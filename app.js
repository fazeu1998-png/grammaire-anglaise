/* ===================================================================
   Moteur de l'application — navigation, quiz, audio, reconnaissance
   vocale, sauvegarde de progression.
   =================================================================== */

const STORAGE_KEY = "gram_progress_v1";
const UNLOCK_ALL_KEY = "gram_unlock_all_v1";
const PASS_THRESHOLD = 0.7;

/* ---------- Stockage ---------- */
function loadProgress(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  }catch(e){ return {}; }
}
function saveProgress(p){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); }catch(e){}
}
function loadUnlockAll(){
  return localStorage.getItem(UNLOCK_ALL_KEY) === "1";
}
function saveUnlockAll(v){
  localStorage.setItem(UNLOCK_ALL_KEY, v ? "1" : "0");
}

let progress = loadProgress();
let unlockAll = loadUnlockAll();

function getModuleProgress(id){
  return progress[id] || { bestScore:0, attempts:0, passed:false, missed:[] };
}
function setModuleProgress(id, data){
  progress[id] = Object.assign(getModuleProgress(id), data);
  saveProgress(progress);
}

function moduleTierIndex(id){
  return TIERS.findIndex(t => t.includes(id));
}
function isTierFullyPassed(tierIndex){
  return TIERS[tierIndex].every(id => getModuleProgress(id).passed);
}
function isModuleUnlocked(id){
  if(unlockAll) return true;
  const ti = moduleTierIndex(id);
  if(ti === 0) return true;
  return isTierFullyPassed(ti - 1);
}

/* ---------- Voix (TTS) ---------- */
let enVoice = null;
function pickVoice(){
  if(typeof speechSynthesis === "undefined") return;
  const voices = speechSynthesis.getVoices();
  enVoice = voices.find(v=>/en[-_]US/i.test(v.lang))
        || voices.find(v=>/en[-_]GB/i.test(v.lang))
        || voices.find(v=>/^en/i.test(v.lang))
        || null;
}
if(typeof speechSynthesis !== "undefined"){
  pickVoice();
  speechSynthesis.onvoiceschanged = pickVoice;
}
function speak(text, rate){
  if(typeof speechSynthesis === "undefined") return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = enVoice ? enVoice.lang : "en-US";
  if(enVoice) u.voice = enVoice;
  u.rate = rate || 0.85;
  speechSynthesis.speak(u);
}
const ttsSupported = typeof speechSynthesis !== "undefined";

/* ---------- Reconnaissance vocale (STT) ---------- */
const SpeechRecognitionCtor = window.SpeechRecognition || window.webkitSpeechRecognition || null;
const sttSupported = !!SpeechRecognitionCtor;

function normalizeForMatch(s){
  return (s||"").toLowerCase().replace(/[.,!?;:'"]/g,"").replace(/\s+/g," ").trim();
}
function checkKeywordMatch(transcript, keywords){
  const norm = normalizeForMatch(transcript);
  const words = norm.split(" ");
  let hits = 0;
  keywords.forEach(k=>{
    const nk = normalizeForMatch(k);
    if(norm.includes(nk) || words.includes(nk)) hits++;
  });
  const ratio = keywords.length ? hits / keywords.length : 0;
  return { ratio, hits, ok: ratio >= 0.6 };
}

/* ---------- État de l'application ---------- */
const state = {
  screen: "home",
  moduleId: null,
  quizQuestions: [],
  quizIndex: 0,
  quizScore: 0,
  quizMissed: [],
  reviewMode: false,
  answered: false
};

const appEl = document.getElementById("app");
const headerTitleEl = document.getElementById("headerTitle");
const backBtnEl = document.getElementById("backBtn");

function goHome(){
  state.screen = "home"; state.moduleId = null; state.reviewMode = false;
  render();
}
function goModule(id){
  state.screen = "module"; state.moduleId = id;
  render();
}
function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}
function startQuiz(id){
  const quiz = QUIZZES[id] || [];
  state.screen = "quiz";
  state.moduleId = id;
  state.quizQuestions = quiz.map((q,idx)=>Object.assign({_idx:idx, _modId:id}, q));
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizMissed = [];
  state.reviewMode = false;
  state.answered = false;
  render();
}
function startReview(){
  const items = [];
  Object.keys(progress).forEach(modId=>{
    const missed = progress[modId].missed || [];
    missed.forEach(qIdx=>{
      const q = (QUIZZES[modId] || [])[qIdx];
      if(q) items.push(Object.assign({_idx:qIdx, _modId:modId}, q));
    });
  });
  if(items.length === 0){
    alert("Rien à réviser pour le moment — bravo, aucune question ratée en attente !");
    return;
  }
  state.screen = "quiz";
  state.moduleId = null;
  state.quizQuestions = shuffle(items);
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizMissed = [];
  state.reviewMode = true;
  state.answered = false;
  render();
}
function goProgress(){
  state.screen = "progress"; render();
}

/* ---------- Rendu : accueil ---------- */
function renderHome(){
  headerTitleEl.textContent = "Grammaire anglaise";
  backBtnEl.style.visibility = "hidden";

  let html = "";
  TIERS.forEach((tierIds, ti)=>{
    html += `<div class="tier"><div class="tier-label">Niveau ${ti+1}</div>`;
    tierIds.forEach(id=>{
      const mod = MODULES.find(m=>m.id===id);
      const p = getModuleProgress(id);
      const unlocked = isModuleUnlocked(id);
      const pct = Math.round((p.bestScore||0)*100);
      const badge = unlocked ? (p.passed ? "✅" : "📘") : "🔒";
      html += `
      <div class="mod-card ${unlocked?"":"locked"}" data-mod="${id}">
        <div class="mod-badge ${p.passed?"done":unlocked?"":"locked"}">${badge}</div>
        <div class="mod-info">
          <div class="mod-title">${mod.title}</div>
          <div class="mod-sub">${mod.subtitle}</div>
          ${unlocked ? `<div class="progress-bar-track"><div class="progress-bar-fill" style="width:${pct}%"></div></div>` : ""}
        </div>
        ${unlocked ? `<div class="mod-score">${pct}%</div>` : ""}
      </div>`;
    });
    html += `</div>`;
  });

  html += `
    <div class="toggle-row">
      <span>🔓 Tout débloquer</span>
      <label class="switch">
        <input type="checkbox" id="unlockAllToggle" ${unlockAll?"checked":""}>
        <span class="slider"></span>
      </label>
    </div>
    <div class="toolbar">
      <button class="btn btn-outline btn-full" id="reviewBtn">🔁 Mode révision</button>
      <button class="btn btn-outline btn-full" id="progressBtn">📊 Progression globale</button>
    </div>
    <footer class="appfoot">15 modules · progression sauvegardée sur ce téléphone</footer>
  `;

  appEl.innerHTML = html;

  appEl.querySelectorAll(".mod-card").forEach(card=>{
    card.addEventListener("click", ()=>{
      const id = card.dataset.mod;
      if(isModuleUnlocked(id)) goModule(id);
    });
  });
  document.getElementById("unlockAllToggle").addEventListener("change", (e)=>{
    unlockAll = e.target.checked;
    saveUnlockAll(unlockAll);
    render();
  });
  document.getElementById("reviewBtn").addEventListener("click", startReview);
  document.getElementById("progressBtn").addEventListener("click", goProgress);
}

/* ---------- Rendu : détail d'un module ---------- */
function renderModule(){
  const mod = MODULES.find(m=>m.id===state.moduleId);
  headerTitleEl.textContent = mod.title;
  backBtnEl.style.visibility = "visible";

  let html = `
    <div class="section-card">
      <h3>📖 Explication</h3>
      <p>${mod.explanation}</p>
    </div>
    <div class="section-card">
      <h3>🔧 Comment construire la phrase</h3>
      <div class="formula-row"><span class="formula-tag">Affirmatif</span><span class="formula-text">${mod.formulas.affirmative}</span></div>
      <div class="formula-row"><span class="formula-tag">Négatif</span><span class="formula-text">${mod.formulas.negative}</span></div>
      <div class="formula-row"><span class="formula-tag">Question</span><span class="formula-text">${mod.formulas.interrogative}</span></div>
    </div>
    <div class="section-card">
      <h3>🕒 Quand l'utiliser</h3>
      <ul>${mod.usage.map(u=>`<li>${u}</li>`).join("")}</ul>
    </div>
    <div class="section-card">
      <h3>⚠️ Erreurs classiques des francophones</h3>
      <ul>${mod.mistakes.map(u=>`<li>${u}</li>`).join("")}</ul>
    </div>
  `;

  if(mod.irregularVerbs && mod.irregularVerbs.length){
    html += `
    <div class="section-card">
      <h3>📋 Verbes irréguliers utiles</h3>
      <table class="irr-table">
        <tr><th>Base</th><th>Forme</th></tr>
        ${mod.irregularVerbs.map(([a,b])=>`<tr><td>${a}</td><td>${b}</td></tr>`).join("")}
      </table>
    </div>`;
  }

  if(!ttsSupported){
    html += `<div class="warn-banner">🔇 La lecture audio n'est pas disponible sur ce navigateur.</div>`;
  }

  html += `<div class="section-card"><h3>💬 Exemples (touche 🔊 pour écouter)</h3></div>`;
  mod.examples.forEach((ex,i)=>{
    html += `
    <div class="example-card" style="display:flex;align-items:center;gap:10px;">
      <div style="flex:1;">
        <div class="example-en">${ex.en}</div>
        <div class="example-fr">${ex.fr}</div>
        <div class="example-pron">🗣️ ${ex.pron}</div>
      </div>
      <button class="audio-btn" data-say="${encodeURIComponent(ex.en)}">🔊</button>
    </div>`;
  });

  html += `
    <div class="toolbar">
      <button class="btn btn-primary btn-full btn-lg" id="startQuizBtn">📝 Commencer le quiz (${(QUIZZES[mod.id]||[]).length} questions)</button>
    </div>
  `;

  appEl.innerHTML = html;
  appEl.querySelectorAll("[data-say]").forEach(btn=>{
    btn.addEventListener("click", ()=> speak(decodeURIComponent(btn.dataset.say)));
  });
  document.getElementById("startQuizBtn").addEventListener("click", ()=> startQuiz(mod.id));
}

/* ---------- Rendu : quiz ---------- */
let recognitionInstance = null;

function renderQuiz(){
  const total = state.quizQuestions.length;
  const q = state.quizQuestions[state.quizIndex];
  const title = state.reviewMode ? "Mode révision" : MODULES.find(m=>m.id===state.moduleId).title;
  headerTitleEl.textContent = title;
  backBtnEl.style.visibility = "visible";

  let html = `<div class="quiz-header"><span>Question ${state.quizIndex+1} / ${total}</span><span>Score : ${state.quizScore}</span></div>`;
  html += `<div class="quiz-q" id="quizQ">`;
  html += `<div class="quiz-prompt">${q.prompt}</div>`;

  if(q.type === "mcq"){
    html += q.options.map((opt,i)=>`<button class="opt-btn" data-i="${i}">${opt}</button>`).join("");
  } else if(q.type === "fill"){
    html += `<div class="quiz-sentence">${q.sentence}</div>`;
    html += `<input type="text" class="fill-input" id="fillInput" placeholder="Écris ta réponse ici" autocomplete="off" autocapitalize="off">`;
    html += `<div class="toolbar"><button class="btn btn-primary btn-full" id="checkFillBtn">Vérifier</button></div>`;
  } else if(q.type === "reorder"){
    html += `<div class="reorder-answer" id="reorderAnswer"></div>`;
    html += `<div class="reorder-bank" id="reorderBank"></div>`;
    html += `<div class="toolbar"><button class="btn btn-outline" id="reorderResetBtn">↩️ Recommencer</button><button class="btn btn-primary" id="reorderCheckBtn">Vérifier</button></div>`;
  } else if(q.type === "oral"){
    html += `<div class="mic-area">`;
    if(!sttSupported){
      html += `<div class="warn-banner">🎙️ La reconnaissance vocale n'est pas disponible sur ce navigateur (fonctionne surtout sur Chrome). Écoute la phrase, répète-la à voix haute pour t'entraîner, puis continue.</div>`;
      html += `<div class="toolbar"><button class="btn btn-outline btn-full" id="oralListenBtn">🔊 Écouter la phrase attendue</button></div>`;
      html += `<div class="toolbar"><button class="btn btn-primary btn-full" id="oralSkipBtn">J'ai essayé, continuer</button></div>`;
    } else {
      html += `<button class="mic-btn" id="micBtn">🎙️</button><div class="mic-label" id="micLabel">Touche le micro et dis ta réponse en anglais</div>`;
      html += `<div id="heardBox"></div>`;
    }
    html += `</div>`;
  }

  html += `<div id="feedbackArea"></div>`;
  html += `</div>`;

  appEl.innerHTML = html;
  bindQuizHandlers(q);
}

function finishQuestion(correct, q){
  state.answered = true;
  if(correct){
    state.quizScore++;
  } else {
    state.quizMissed.push({ modId: q._modId, idx: q._idx });
  }
  const nextLabel = (state.quizIndex+1 < state.quizQuestions.length) ? "Suivant ▶" : "Voir les résultats ▶";
  const fb = document.getElementById("feedbackArea");
  fb.innerHTML = `
    <div class="feedback ${correct?"ok":"ko"}">
      <b>${correct ? "✅ Bonne réponse !" : "❌ Pas tout à fait."}</b>
      ${!correct ? `Réponse attendue : <i>${q.answer || q.expected}</i>` : ""}
      ${q.explain ? `<br>${q.explain}` : ""}
    </div>
    <div class="toolbar"><button class="btn btn-primary btn-full btn-lg" id="nextBtn">${nextLabel}</button></div>
  `;
  document.getElementById("nextBtn").addEventListener("click", nextQuestion);
}

function nextQuestion(){
  if(recognitionInstance){ try{ recognitionInstance.abort(); }catch(e){} recognitionInstance = null; }
  state.answered = false;
  if(state.quizIndex+1 < state.quizQuestions.length){
    state.quizIndex++;
    render();
  } else {
    finishQuiz();
  }
}

function finishQuiz(){
  const total = state.quizQuestions.length;
  const score = state.quizScore;

  if(state.reviewMode){
    // Pour chaque module présent dans cette session de révision : on retire de
    // sa liste "ratées" toutes les questions qui viennent d'être retestées,
    // puis on ré-ajoute seulement celles ratées à nouveau cette fois-ci.
    const roundByModule = {};
    state.quizQuestions.forEach(q=>{
      (roundByModule[q._modId] = roundByModule[q._modId] || new Set()).add(q._idx);
    });
    const missedByModule = {};
    state.quizMissed.forEach(m=>{
      (missedByModule[m.modId] = missedByModule[m.modId] || new Set()).add(m.idx);
    });
    Object.keys(roundByModule).forEach(modId=>{
      const p = getModuleProgress(modId);
      const stillMissed = new Set(p.missed || []);
      roundByModule[modId].forEach(idx => stillMissed.delete(idx));
      (missedByModule[modId] || new Set()).forEach(idx => stillMissed.add(idx));
      setModuleProgress(modId, { missed: Array.from(stillMissed) });
    });
  } else {
    const modId = state.moduleId;
    const ratio = total ? score/total : 0;
    const prev = getModuleProgress(modId);
    setModuleProgress(modId, {
      bestScore: Math.max(prev.bestScore||0, ratio),
      attempts: (prev.attempts||0) + 1,
      passed: prev.passed || ratio >= PASS_THRESHOLD,
      missed: state.quizMissed.map(m=>m.idx)
    });
  }

  state.screen = "result";
  render();
}

function bindQuizHandlers(q){
  if(q.type === "mcq"){
    appEl.querySelectorAll(".opt-btn").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        if(state.answered) return;
        const i = parseInt(btn.dataset.i,10);
        const correct = i === q.answer;
        appEl.querySelectorAll(".opt-btn").forEach((b,bi)=>{
          b.disabled = true;
          if(bi === q.answer) b.classList.add("correct");
          else if(bi === i && !correct) b.classList.add("incorrect");
        });
        finishQuestion(correct, q);
      });
    });
  } else if(q.type === "fill"){
    const input = document.getElementById("fillInput");
    const check = ()=>{
      if(state.answered) return;
      const val = normalizeForMatch(input.value);
      const target = normalizeForMatch(q.answer);
      const correct = val === target;
      input.disabled = true;
      input.classList.add(correct ? "correct" : "incorrect");
      finishQuestion(correct, q);
    };
    document.getElementById("checkFillBtn").addEventListener("click", check);
    input.addEventListener("keydown", e=>{ if(e.key==="Enter") check(); });
  } else if(q.type === "reorder"){
    setupReorder(q);
  } else if(q.type === "oral"){
    if(!sttSupported){
      const listenBtn = document.getElementById("oralListenBtn");
      if(listenBtn) listenBtn.addEventListener("click", ()=> speak(q.expected));
      const skipBtn = document.getElementById("oralSkipBtn");
      if(skipBtn) skipBtn.addEventListener("click", ()=> finishQuestion(true, q));
    } else {
      setupOral(q);
    }
  }
}

function setupReorder(q){
  const bank = document.getElementById("reorderBank");
  const ans = document.getElementById("reorderAnswer");
  const words = shuffle(q.words);
  let placed = [];

  function renderChips(){
    bank.innerHTML = "";
    words.forEach((w,i)=>{
      const used = placed.includes(i);
      const chip = document.createElement("span");
      chip.className = "word-chip" + (used ? " used" : "");
      chip.textContent = w;
      chip.addEventListener("click", ()=>{
        if(used || state.answered) return;
        placed.push(i);
        renderChips(); renderAnswer();
      });
      bank.appendChild(chip);
    });
  }
  function renderAnswer(){
    ans.innerHTML = "";
    placed.forEach((i)=>{
      const chip = document.createElement("span");
      chip.className = "word-chip";
      chip.textContent = words[i];
      chip.addEventListener("click", ()=>{
        if(state.answered) return;
        placed = placed.filter(x=>x!==i);
        renderChips(); renderAnswer();
      });
      ans.appendChild(chip);
    });
  }
  renderChips(); renderAnswer();

  document.getElementById("reorderResetBtn").addEventListener("click", ()=>{
    if(state.answered) return;
    placed = []; renderChips(); renderAnswer();
  });
  document.getElementById("reorderCheckBtn").addEventListener("click", ()=>{
    if(state.answered) return;
    const built = placed.map(i=>words[i]).join(" ");
    const correct = normalizeForMatch(built) === normalizeForMatch(q.answer);
    finishQuestion(correct, q);
  });
}

function setupOral(q){
  const micBtn = document.getElementById("micBtn");
  const micLabel = document.getElementById("micLabel");
  const heardBox = document.getElementById("heardBox");

  micBtn.addEventListener("click", ()=>{
    if(state.answered) return;
    if(recognitionInstance){ try{ recognitionInstance.abort(); }catch(e){} }
    let rec;
    try{
      rec = new SpeechRecognitionCtor();
    }catch(e){
      heardBox.innerHTML = `<div class="warn-banner">Impossible de démarrer le micro sur ce navigateur.</div>`;
      return;
    }
    recognitionInstance = rec;
    rec.lang = "en-US";
    rec.interimResults = false;
    rec.maxAlternatives = 1;

    micBtn.classList.add("listening");
    micLabel.textContent = "🎙️ Écoute en cours... parle maintenant";
    heardBox.innerHTML = "";

    rec.onresult = (event)=>{
      const transcript = event.results[0][0].transcript;
      const match = checkKeywordMatch(transcript, q.keywords || []);
      heardBox.innerHTML = `<div class="heard-box">Tu as dit : « ${transcript} »</div>`;
      micBtn.classList.remove("listening");
      micLabel.textContent = "Touche le micro pour réessayer";
      if(match.ok){
        finishQuestion(true, q);
      } else {
        heardBox.innerHTML += `
          <div class="feedback ko"><b>Pas tout à fait reconnu.</b> Réponse attendue : <i>${q.expected}</i></div>
          <div class="toolbar">
            <button class="btn btn-outline btn-full" id="oralListenExpected">🔊 Écouter la bonne réponse</button>
          </div>
          <div class="toolbar">
            <button class="btn btn-outline btn-full" id="oralRetryBtn">🔁 Réessayer</button>
            <button class="btn btn-primary btn-full" id="oralGiveUpBtn">Continuer quand même</button>
          </div>
        `;
        document.getElementById("oralListenExpected").addEventListener("click", ()=> speak(q.expected));
        document.getElementById("oralRetryBtn").addEventListener("click", ()=> micBtn.click());
        document.getElementById("oralGiveUpBtn").addEventListener("click", ()=> finishQuestion(false, q));
      }
    };
    rec.onerror = (event)=>{
      micBtn.classList.remove("listening");
      let msg = "Une erreur est survenue avec le micro.";
      if(event.error === "not-allowed" || event.error === "service-not-allowed"){
        msg = "🚫 Le micro n'est pas autorisé. Vérifie les permissions du site dans Chrome (icône cadenas dans la barre d'adresse) puis réessaie.";
      } else if(event.error === "no-speech"){
        msg = "Je n'ai rien entendu. Réessaie en parlant un peu plus fort.";
      } else if(event.error === "network"){
        msg = "Problème réseau avec la reconnaissance vocale. Vérifie ta connexion internet.";
      }
      heardBox.innerHTML = `<div class="warn-banner">${msg}</div>
        <div class="toolbar"><button class="btn btn-primary btn-full" id="oralGiveUpBtn2">Continuer sans réponse orale</button></div>`;
      micLabel.textContent = "Touche le micro pour réessayer";
      const giveUp = document.getElementById("oralGiveUpBtn2");
      if(giveUp) giveUp.addEventListener("click", ()=> finishQuestion(false, q));
    };
    rec.onend = ()=>{
      micBtn.classList.remove("listening");
    };
    try{
      rec.start();
    }catch(e){
      micBtn.classList.remove("listening");
      heardBox.innerHTML = `<div class="warn-banner">Impossible de démarrer le micro.</div>`;
    }
  });
}

/* ---------- Rendu : résultats ---------- */
function renderResult(){
  const total = state.quizQuestions.length;
  const score = state.quizScore;
  const ratio = total ? score/total : 0;
  const pct = Math.round(ratio*100);
  const passed = ratio >= PASS_THRESHOLD;
  headerTitleEl.textContent = "Résultats";
  backBtnEl.style.visibility = "visible";

  let html = `
    <div class="result-score">
      <div class="big">${score} / ${total}</div>
      <div class="sub">${pct}% de bonnes réponses</div>
      ${!state.reviewMode ? `<div class="pass-pill ${passed?"pass":"fail"}">${passed ? "✅ Module réussi !" : "Réessaie pour débloquer la suite (70% requis)"}</div>` : ""}
    </div>
    <div class="toolbar">
      ${!state.reviewMode ? `<button class="btn btn-outline btn-full" id="retryBtn">🔁 Refaire ce quiz</button>` : ""}
      <button class="btn btn-primary btn-full" id="homeBtn2">🏠 Retour à l'accueil</button>
    </div>
  `;
  appEl.innerHTML = html;
  if(!state.reviewMode){
    document.getElementById("retryBtn").addEventListener("click", ()=> startQuiz(state.moduleId));
  }
  document.getElementById("homeBtn2").addEventListener("click", goHome);
}

/* ---------- Rendu : progression globale ---------- */
function renderProgress(){
  headerTitleEl.textContent = "Progression globale";
  backBtnEl.style.visibility = "visible";

  const total = MODULES.length;
  const passedCount = MODULES.filter(m=>getModuleProgress(m.id).passed).length;
  const avg = Math.round(MODULES.reduce((s,m)=>s+(getModuleProgress(m.id).bestScore||0),0)/total*100);

  let html = `
    <div class="result-score">
      <div class="big">${passedCount} / ${total}</div>
      <div class="sub">modules réussis · moyenne ${avg}%</div>
    </div>
  `;
  MODULES.forEach(m=>{
    const p = getModuleProgress(m.id);
    const pct = Math.round((p.bestScore||0)*100);
    html += `
      <div class="mod-card">
        <div class="mod-badge ${p.passed?"done":""}">${p.passed?"✅":"📘"}</div>
        <div class="mod-info">
          <div class="mod-title">${m.title}</div>
          <div class="progress-bar-track"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
        </div>
        <div class="mod-score">${pct}%</div>
      </div>
    `;
  });
  appEl.innerHTML = html;
}

/* ---------- Routeur ---------- */
function render(){
  window.scrollTo(0,0);
  if(state.screen === "home") renderHome();
  else if(state.screen === "module") renderModule();
  else if(state.screen === "quiz") renderQuiz();
  else if(state.screen === "result") renderResult();
  else if(state.screen === "progress") renderProgress();
}

backBtnEl.addEventListener("click", ()=>{
  if(state.screen === "module") goHome();
  else if(state.screen === "quiz") goHome();
  else if(state.screen === "result") goHome();
  else if(state.screen === "progress") goHome();
  else goHome();
});

render();
