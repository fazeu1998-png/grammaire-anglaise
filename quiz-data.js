/* ===================================================================
   Banque de quiz — 12 questions par module (MCQ, fill, reorder, oral)
   =================================================================== */

const QUIZZES = {

"present-simple": [
  {type:"mcq", prompt:"Quelle est la bonne forme ? « He ___ to work every day. »", options:["go","goes","going","went"], answer:1, explain:"À la 3e personne du singulier (he/she/it), on ajoute -s au verbe."},
  {type:"mcq", prompt:"Comment forme-t-on la négation avec « she » ?", options:["She not works","She doesn't works","She doesn't work","She don't work"], answer:2, explain:"Sujet + doesn't + verbe à la forme de base (sans -s)."},
  {type:"mcq", prompt:"Quelle phrase est correcte ?", options:["Do she work here?","Does she work here?","Does she works here?","Is she work here?"], answer:1, explain:"Avec he/she/it, on utilise « does », et le verbe reste à la forme de base."},
  {type:"mcq", prompt:"Le present simple sert surtout à exprimer...", options:["une action en cours maintenant","une habitude ou un fait général","une action terminée hier","un projet futur"], answer:1, explain:"Le present simple décrit des habitudes et des faits généraux."},
  {type:"fill", prompt:"Complète :", sentence:"I ___ (work) at a construction site.", answer:"work", explain:"Avec « I », pas de -s."},
  {type:"fill", prompt:"Complète :", sentence:"She ___ (not / like) coffee.", answer:"doesn't like", explain:"Négation à la 3e personne : doesn't + verbe de base."},
  {type:"fill", prompt:"Complète :", sentence:"___ you ___ (live) in Waterloo?", answer:"Do you live", explain:"Question : Do + sujet + verbe de base."},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["work","I","site","construction","at","a"], answer:"I work at a construction site.", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["speaks","every","She","English","day"], answer:"She speaks English every day.", explain:""},
  {type:"oral", prompt:"Dis en anglais : « Je travaille sur un chantier »", expected:"I work at a construction site", keywords:["work","construction","site"]},
  {type:"oral", prompt:"Dis en anglais : « Elle parle anglais chaque jour »", expected:"She speaks English every day", keywords:["speaks","english","every","day"]},
  {type:"oral", prompt:"Dis en anglais : « Le magasin ouvre à neuf heures »", expected:"The store opens at nine", keywords:["store","opens","nine"]}
],

"imperative": [
  {type:"mcq", prompt:"Comment dit-on « Ferme la porte » ?", options:["You close the door","Close the door","Closing the door","Closes the door"], answer:1, explain:"L'impératif = verbe de base, sans sujet."},
  {type:"mcq", prompt:"Comment forme-t-on la négation à l'impératif ?", options:["Not touch that","No touch that","Don't touch that","Doesn't touch that"], answer:2, explain:"Don't + verbe de base."},
  {type:"mcq", prompt:"Quelle phrase propose une suggestion (« Prenons... ») ?", options:["Take a break","Taking a break","Let's take a break","We take a break"], answer:2, explain:"« Let's » + verbe de base pour proposer quelque chose ensemble."},
  {type:"mcq", prompt:"À l'impératif, le sujet (tu/vous)...", options:["est toujours écrit","est sous-entendu, jamais écrit","se met après le verbe","n'existe pas en anglais"], answer:1, explain:"Le sujet est sous-entendu à l'impératif anglais."},
  {type:"fill", prompt:"Complète (ferme) :", sentence:"___ the door.", answer:"Close", explain:""},
  {type:"fill", prompt:"Complète (n'oublie pas) :", sentence:"___ forget your gloves.", answer:"Don't forget", explain:""},
  {type:"fill", prompt:"Complète (sois) :", sentence:"___ careful on the ladder.", answer:"Be", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["glasses","safety","Wear","your"], answer:"Wear your safety glasses.", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["late","be","Don't"], answer:"Don't be late.", explain:""},
  {type:"oral", prompt:"Dis en anglais : « Ferme la porte »", expected:"Close the door", keywords:["close","door"]},
  {type:"oral", prompt:"Dis en anglais : « Ne sois pas en retard »", expected:"Don't be late", keywords:["don't","late"]},
  {type:"oral", prompt:"Dis en anglais : « Prenons une pause »", expected:"Let's take a break", keywords:["let's","take","break"]}
],

"present-continuous": [
  {type:"mcq", prompt:"Quelle est la bonne forme ? « I ___ right now. »", options:["work","works","am working","was working"], answer:2, explain:"Present continuous = am/is/are + verbe-ing."},
  {type:"mcq", prompt:"Comment forme-t-on le present continuous ?", options:["verbe + ing","have + participe passé","be + verbe-ing","did + verbe"], answer:2, explain:"Sujet + be (am/is/are) + verbe-ing."},
  {type:"mcq", prompt:"Quelle phrase est correcte ?", options:["She talking to the boss","She is talking to the boss","She talks to the boss now","She talked to the boss now"], answer:1, explain:"Il faut le verbe « to be » avant le verbe en -ing."},
  {type:"mcq", prompt:"Le present continuous décrit...", options:["une habitude","une action en train de se passer maintenant","une action terminée","un conseil"], answer:1, explain:"C'est le temps de l'action en cours."},
  {type:"fill", prompt:"Complète :", sentence:"We ___ (wait) for the bus.", answer:"are waiting", explain:""},
  {type:"fill", prompt:"Complète :", sentence:"It ___ (rain) outside.", answer:"is raining", explain:""},
  {type:"fill", prompt:"Complète :", sentence:"___ you ___ (come) to work today?", answer:"Are you coming", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["working","am","I","now","right"], answer:"I am working right now.", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["building","are","house","They","a","new"], answer:"They are building a new house.", explain:""},
  {type:"oral", prompt:"Dis en anglais : « Je suis en train de travailler »", expected:"I am working", keywords:["working"]},
  {type:"oral", prompt:"Dis en anglais : « Il pleut dehors »", expected:"It is raining outside", keywords:["raining","outside"]},
  {type:"oral", prompt:"Dis en anglais : « Que fais-tu ? »", expected:"What are you doing", keywords:["what","doing"]}
],

"past-simple": [
  {type:"mcq", prompt:"Quel est le past simple de « go » ?", options:["goed","went","gone","going"], answer:1, explain:"« go » est irrégulier : go → went."},
  {type:"mcq", prompt:"Comment forme-t-on la négation au past simple ?", options:["I not worked","I didn't worked","I didn't work","I don't worked"], answer:2, explain:"didn't + verbe de base (jamais conjugué)."},
  {type:"mcq", prompt:"Quelle phrase est correcte ?", options:["Did you called the boss?","Did you call the boss?","Did you calls the boss?","Do you called the boss?"], answer:1, explain:"Did + sujet + verbe de base."},
  {type:"mcq", prompt:"Le past simple sert à parler...", options:["d'une action habituelle","d'une action terminée à un moment précis du passé","d'une action en cours maintenant","d'un conseil"], answer:1, explain:"Action terminée à un moment précis."},
  {type:"fill", prompt:"Complète :", sentence:"I ___ (work) yesterday.", answer:"worked", explain:""},
  {type:"fill", prompt:"Complète :", sentence:"She ___ (go) to the bank.", answer:"went", explain:""},
  {type:"fill", prompt:"Complète :", sentence:"We ___ (not / finish) the job.", answer:"didn't finish", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["job","got","the","I"], answer:"I got the job.", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["late","He","arrived"], answer:"He arrived late.", explain:""},
  {type:"oral", prompt:"Dis en anglais : « J'ai travaillé hier »", expected:"I worked yesterday", keywords:["worked","yesterday"]},
  {type:"oral", prompt:"Dis en anglais : « J'ai obtenu l'emploi ! »", expected:"I got the job", keywords:["got","job"]},
  {type:"oral", prompt:"Dis en anglais : « As-tu appelé le patron ? »", expected:"Did you call the boss", keywords:["did","call","boss"]}
],

"modals": [
  {type:"mcq", prompt:"Quelle phrase est correcte ?", options:["I can to speak French","I can speaks French","I can speak French","I cans speak French"], answer:2, explain:"Après un modal, le verbe reste à la forme de base, sans « to »."},
  {type:"mcq", prompt:"Quel modal exprime une obligation forte ?", options:["can","should","must","would"], answer:2, explain:"« must » = obligation forte."},
  {type:"mcq", prompt:"Quel modal exprime un conseil ?", options:["must","can","should","will"], answer:2, explain:"« should » = conseil, recommandation."},
  {type:"mcq", prompt:"Comment forme-t-on la négation de « must » ?", options:["don't must","mustn't","not must","musn't"], answer:1, explain:"mustn't (must + not, contracté)."},
  {type:"fill", prompt:"Complète (obligation) :", sentence:"You ___ wear a helmet.", answer:"must", explain:""},
  {type:"fill", prompt:"Complète (conseil) :", sentence:"You ___ practice every day.", answer:"should", explain:""},
  {type:"fill", prompt:"Complète (capacité) :", sentence:"___ you help me?", answer:"Can", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["French","can","speak","I"], answer:"I can speak French.", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["helmet","must","wear","You","a"], answer:"You must wear a helmet.", explain:""},
  {type:"oral", prompt:"Dis en anglais : « Peux-tu m'aider ? »", expected:"Can you help me", keywords:["can","help"]},
  {type:"oral", prompt:"Dis en anglais : « Tu dois porter un casque »", expected:"You must wear a helmet", keywords:["must","wear","helmet"]},
  {type:"oral", prompt:"Dis en anglais : « Tu devrais pratiquer chaque jour »", expected:"You should practice every day", keywords:["should","practice","every","day"]}
],

"going-to": [
  {type:"mcq", prompt:"Quelle est la bonne forme ? « I ___ start a new job. »", options:["going to","am going to","is going to","go to"], answer:1, explain:"Sujet + be + going to + verbe."},
  {type:"mcq", prompt:"« Going to » sert surtout pour...", options:["une décision spontanée","un projet déjà décidé","un conseil","une obligation"], answer:1, explain:"Going to = projet déjà planifié ou preuve visible."},
  {type:"mcq", prompt:"Quelle phrase est correcte ?", options:["She going to call you","She is going to call you","She go to call you","She will going to call you"], answer:1, explain:"Il faut le verbe « to be »."},
  {type:"mcq", prompt:"Si le ciel est noir, on dit plutôt...", options:["It will rain","It is going to rain","It rains","It rained"], answer:1, explain:"On le voit venir : going to."},
  {type:"fill", prompt:"Complète :", sentence:"We ___ (going to) move next month.", answer:"are going to", explain:""},
  {type:"fill", prompt:"Complète :", sentence:"___ you ___ (going to) apply for that job?", answer:"Are you going to", explain:""},
  {type:"fill", prompt:"Complète :", sentence:"I'm not ___ (going to) be late.", answer:"going to", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["job","start","going","to","new","a","am","I"], answer:"I am going to start a new job.", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["rain","going","It's","to"], answer:"It's going to rain.", explain:""},
  {type:"oral", prompt:"Dis en anglais : « Je vais commencer un nouvel emploi »", expected:"I am going to start a new job", keywords:["going","to","start","new","job"]},
  {type:"oral", prompt:"Dis en anglais : « Il va pleuvoir »", expected:"It's going to rain", keywords:["going","to","rain"]},
  {type:"oral", prompt:"Dis en anglais : « Que vas-tu faire ce soir ? »", expected:"What are you going to do tonight", keywords:["what","going","to","do"]}
],

"will-future": [
  {type:"mcq", prompt:"Quelle phrase exprime une décision spontanée ?", options:["I am going to answer it","I'll answer it!","I answer it","I answered it"], answer:1, explain:"« will » pour une décision prise sur le moment."},
  {type:"mcq", prompt:"Comment contracte-t-on « will not » ?", options:["willn't","won't","wont","will'nt"], answer:1, explain:"will not → won't."},
  {type:"mcq", prompt:"Quelle phrase est correcte ?", options:["She will calls you","She wills call you","She will call you","She is will call you"], answer:2, explain:"will ne se conjugue jamais, verbe à la forme de base après."},
  {type:"mcq", prompt:"« Will » sert surtout pour...", options:["un projet déjà planifié","une décision spontanée ou une promesse","une habitude","une action en cours"], answer:1, explain:"Will = spontané, promesse, prédiction générale."},
  {type:"fill", prompt:"Complète :", sentence:"I ___ help you.", answer:"will", explain:""},
  {type:"fill", prompt:"Complète :", sentence:"We ___ be late.", answer:"won't", explain:""},
  {type:"fill", prompt:"Complète :", sentence:"___ you come to the party?", answer:"Will", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["you","help","I","will"], answer:"I will help you.", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["tomorrow","call","She","you","will"], answer:"She will call you tomorrow.", explain:""},
  {type:"oral", prompt:"Dis en anglais : « Je vais t'aider »", expected:"I will help you", keywords:["will","help"]},
  {type:"oral", prompt:"Dis en anglais : « Elle t'appellera demain »", expected:"She will call you tomorrow", keywords:["will","call","tomorrow"]},
  {type:"oral", prompt:"Dis en anglais : « Je promets que je t'appellerai »", expected:"I promise I will call you", keywords:["promise","will","call"]}
],

"present-perfect": [
  {type:"mcq", prompt:"Quelle phrase convient pour une action liée au présent, sans date précise ?", options:["I worked here for five years","I have worked here for five years","I work here for five years","I am working here for five years"], answer:1, explain:"Present perfect : lien avec le présent, pas de date précise."},
  {type:"mcq", prompt:"Quel est le participe passé de « go » ?", options:["went","goed","gone","going"], answer:2, explain:"go → went (past simple) → gone (participe passé)."},
  {type:"mcq", prompt:"Quand utilise-t-on le past simple plutôt que le present perfect ?", options:["Quand on précise un moment (yesterday, in 2020)","Quand il n'y a pas de moment précisé","Toujours","Jamais"], answer:0, explain:"Un moment précis = past simple."},
  {type:"mcq", prompt:"Quelle phrase est correcte ?", options:["Has she called you?","Have she called you?","Did she has called you?","Does she has called you?"], answer:0, explain:"Has + sujet (he/she/it) + participe passé."},
  {type:"fill", prompt:"Complète :", sentence:"I ___ (have / lose) my keys.", answer:"have lost", explain:""},
  {type:"fill", prompt:"Complète :", sentence:"___ you ever ___ (be) to Toronto?", answer:"Have you ever been", explain:""},
  {type:"fill", prompt:"Complète :", sentence:"She ___ (already / leave).", answer:"has already left", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["five","for","worked","have","years","I","here"], answer:"I have worked here for five years.", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["finished","haven't","yet","I"], answer:"I haven't finished yet.", explain:""},
  {type:"oral", prompt:"Dis en anglais : « Je travaille ici depuis cinq ans »", expected:"I have worked here for five years", keywords:["have","worked","five","years"]},
  {type:"oral", prompt:"Dis en anglais : « J'ai perdu mes clés »", expected:"I have lost my keys", keywords:["have","lost","keys"]},
  {type:"oral", prompt:"Dis en anglais : « Es-tu déjà allé à Toronto ? »", expected:"Have you ever been to Toronto", keywords:["have","ever","been","toronto"]}
],

"past-continuous": [
  {type:"mcq", prompt:"Quelle phrase décrit une action interrompue ?", options:["I worked when you called","I was working when you called","I work when you call","I will work when you call"], answer:1, explain:"Action en cours (past continuous) interrompue par une autre (past simple)."},
  {type:"mcq", prompt:"Comment forme-t-on le past continuous ?", options:["was/were + verbe-ing","have + participe passé","did + verbe","will + verbe"], answer:0, explain:"was/were + verbe-ing."},
  {type:"mcq", prompt:"Quelle forme utilise-t-on avec « we » ?", options:["was","were","is","am"], answer:1, explain:"we/you/they → were."},
  {type:"mcq", prompt:"Quelle phrase est correcte ?", options:["What you were doing?","What were you doing?","What was you doing?","What did you doing?"], answer:1, explain:"Were + sujet + verbe-ing pour une question."},
  {type:"fill", prompt:"Complète :", sentence:"She ___ (sleep) at ten.", answer:"was sleeping", explain:""},
  {type:"fill", prompt:"Complète :", sentence:"They ___ (not / listen).", answer:"weren't listening", explain:""},
  {type:"fill", prompt:"Complète :", sentence:"___ he ___ (work) there in 2020?", answer:"Was he working", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["bus","waiting","were","the","We","for"], answer:"We were waiting for the bus.", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["left","raining","was","when","I","It"], answer:"It was raining when I left.", explain:""},
  {type:"oral", prompt:"Dis en anglais : « J'étais en train de travailler quand tu as appelé »", expected:"I was working when you called", keywords:["was","working","called"]},
  {type:"oral", prompt:"Dis en anglais : « Que faisais-tu hier soir ? »", expected:"What were you doing last night", keywords:["what","were","doing"]},
  {type:"oral", prompt:"Dis en anglais : « Nous attendions le bus »", expected:"We were waiting for the bus", keywords:["were","waiting","bus"]}
],

"future-continuous": [
  {type:"mcq", prompt:"Quelle est la bonne forme ? « I ___ working tomorrow at noon. »", options:["will","will be","am","was"], answer:1, explain:"will + be + verbe-ing."},
  {type:"mcq", prompt:"Comment forme-t-on le future continuous ?", options:["will + verbe-ing","will + be + verbe-ing","will + have + participe","was + verbe-ing"], answer:1, explain:"will + be + verbe-ing."},
  {type:"mcq", prompt:"Quelle phrase est correcte ?", options:["She will sleeping by then","She will be sleeping by then","She will be sleep by then","She is sleeping by then"], answer:1, explain:"will be + verbe-ing."},
  {type:"mcq", prompt:"Le future continuous décrit...", options:["une action terminée avant un moment futur","une action en cours à un moment futur précis","une habitude","un conseil"], answer:1, explain:"Action en cours à un moment précis du futur."},
  {type:"fill", prompt:"Complète :", sentence:"We ___ (will / wait) for you.", answer:"will be waiting", explain:""},
  {type:"fill", prompt:"Complète :", sentence:"___ you ___ (will / use) the car tonight?", answer:"Will you be using", explain:""},
  {type:"fill", prompt:"Complète :", sentence:"I ___ (will not / work) this weekend.", answer:"won't be working", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["noon","working","be","will","tomorrow","I","at"], answer:"I will be working tomorrow at noon.", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["dinner","eating","we","be","will","At","eight"], answer:"At eight, we will be eating dinner.", explain:""},
  {type:"oral", prompt:"Dis en anglais : « Je serai en train de travailler demain à midi »", expected:"I will be working tomorrow at noon", keywords:["will","be","working","tomorrow"]},
  {type:"oral", prompt:"Dis en anglais : « Nous t'attendrons »", expected:"We will be waiting for you", keywords:["will","be","waiting"]},
  {type:"oral", prompt:"Dis en anglais : « Je ne travaillerai pas ce week-end »", expected:"I won't be working this weekend", keywords:["won't","be","working","weekend"]}
],

"present-perfect-continuous": [
  {type:"mcq", prompt:"Quelle phrase insiste sur la DURÉE continue ?", options:["I have worked here for five years","I have been working here for five years","I work here for five years","I worked here for five years"], answer:1, explain:"have/has been + verbe-ing insiste sur la durée."},
  {type:"mcq", prompt:"Comment forme-t-on ce temps ?", options:["have/has + participe passé","have/has + been + verbe-ing","was/were + verbe-ing","have/has + verbe-ing"], answer:1, explain:"have/has + been + verbe-ing."},
  {type:"mcq", prompt:"Quelle phrase est correcte ?", options:["It has raining since morning","It has been raining since morning","It is raining since morning","It rained since morning"], answer:1, explain:"has been + verbe-ing."},
  {type:"mcq", prompt:"Ce temps met l'accent sur...", options:["le résultat final","le processus et la durée continue","une action ponctuelle","un conseil"], answer:1, explain:"L'accent est mis sur la durée et le processus."},
  {type:"fill", prompt:"Complète :", sentence:"I ___ (have / study) English for two years.", answer:"have been studying", explain:""},
  {type:"fill", prompt:"Complète :", sentence:"How long ___ you ___ (live) here?", answer:"have you been living", explain:""},
  {type:"fill", prompt:"Complète :", sentence:"I'm tired because I ___ (have / work) all day.", answer:"have been working", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["since","working","here","been","2020","have","I"], answer:"I have been working here since 2020.", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["hour","have","We","for","an","waiting","been"], answer:"We have been waiting for an hour.", explain:""},
  {type:"oral", prompt:"Dis en anglais : « Je travaille ici depuis 2020 »", expected:"I have been working here since 2020", keywords:["have","been","working","since"]},
  {type:"oral", prompt:"Dis en anglais : « Nous attendons depuis une heure »", expected:"We have been waiting for an hour", keywords:["have","been","waiting","hour"]},
  {type:"oral", prompt:"Dis en anglais : « Il cherche un emploi depuis des mois »", expected:"He has been looking for a job for months", keywords:["has","been","looking","job","months"]}
],

"past-perfect": [
  {type:"mcq", prompt:"Quelle action se passe EN PREMIER dans le passé ?", options:["celle au past simple","celle au past perfect","les deux en même temps","impossible à dire"], answer:1, explain:"Le past perfect = l'action la plus ancienne."},
  {type:"mcq", prompt:"Comment forme-t-on le past perfect ?", options:["was/were + verbe-ing","have/has + participe passé","had + participe passé","did + verbe"], answer:2, explain:"had + participe passé."},
  {type:"mcq", prompt:"Quelle phrase est correcte ?", options:["When I arrived, the meeting already started","When I arrived, the meeting had already started","When I arrive, the meeting had started","When I arrived, the meeting has already started"], answer:1, explain:"had + participe passé pour l'action antérieure."},
  {type:"mcq", prompt:"Le past perfect est souvent appelé...", options:["le futur du futur","le passé du passé","le présent du passé","le futur du passé"], answer:1, explain:"C'est le « passé du passé »."},
  {type:"fill", prompt:"Complète :", sentence:"She ___ (finish) before I called.", answer:"had finished", explain:""},
  {type:"fill", prompt:"Complète :", sentence:"___ you ___ (eat) before the interview?", answer:"Had you eaten", explain:""},
  {type:"fill", prompt:"Complète :", sentence:"We ___ (not / meet) before that day.", answer:"hadn't met", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["left","bus","already","The","when","had","there","got","I"], answer:"The bus had already left when I got there.", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["keys","forgotten","she","realized","had","her","She"], answer:"She realized she had forgotten her keys.", explain:""},
  {type:"oral", prompt:"Dis en anglais : « Quand je suis arrivé, la réunion avait déjà commencé »", expected:"When I arrived, the meeting had already started", keywords:["arrived","meeting","had","already","started"]},
  {type:"oral", prompt:"Dis en anglais : « Le bus était déjà parti quand je suis arrivé »", expected:"The bus had already left when I got there", keywords:["bus","had","already","left"]},
  {type:"oral", prompt:"Dis en anglais : « Nous ne nous étions pas rencontrés avant ce jour-là »", expected:"We hadn't met before that day", keywords:["hadn't","met","before"]}
],

"conditionals": [
  {type:"mcq", prompt:"Quel type utilise-t-on pour une vérité toujours vraie ?", options:["Type 0","Type 1","Type 2","Aucun"], answer:0, explain:"Type 0 = vérité générale."},
  {type:"mcq", prompt:"Quelle phrase est correcte (type 1) ?", options:["If it will rain, we won't work","If it rains, we won't work","If it rained, we won't work","If it raining, we won't work"], answer:1, explain:"Jamais « will » après « if »."},
  {type:"mcq", prompt:"Quelle phrase est du type 2 (imaginaire) ?", options:["If I work hard, I will succeed","If I were rich, I would buy a house","If you heat water, it boils","If it rains, I stay home"], answer:1, explain:"Type 2 : if + past simple, would + verbe."},
  {type:"mcq", prompt:"Au type 2, avec « I », le style soutenu utilise...", options:["was","were","am","be"], answer:1, explain:"« If I were... » — soutenu, même si « was » est aussi entendu à l'oral."},
  {type:"fill", prompt:"Complète (type 0) :", sentence:"If you heat water, it ___ (boil).", answer:"boils", explain:""},
  {type:"fill", prompt:"Complète (type 1) :", sentence:"If I ___ (work) hard, I will get the job.", answer:"work", explain:""},
  {type:"fill", prompt:"Complète (type 2) :", sentence:"If I ___ (be) rich, I would buy a house.", answer:"were", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["job","hard","get","the","work","will","I","If","I"], answer:"If I work hard, I will get the job.", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["house","were","rich","I","would","buy","a","If","I"], answer:"If I were rich, I would buy a house.", explain:""},
  {type:"oral", prompt:"Dis en anglais : « Si tu chauffes de l'eau, elle bout »", expected:"If you heat water, it boils", keywords:["if","heat","water","boils"]},
  {type:"oral", prompt:"Dis en anglais : « Si je travaille dur, j'obtiendrai l'emploi »", expected:"If I work hard, I will get the job", keywords:["if","work","hard","will","get","job"]},
  {type:"oral", prompt:"Dis en anglais : « Si j'étais toi, je demanderais de l'aide »", expected:"If I were you, I would ask for help", keywords:["if","were","would","ask","help"]}
],

"future-perfect": [
  {type:"mcq", prompt:"Quelle phrase décrit une action terminée avant une échéance future ?", options:["I will finish my training next year","By next year, I will have finished my training","I finished my training last year","I am finishing my training"], answer:1, explain:"will + have + participe passé, avec « by »."},
  {type:"mcq", prompt:"Comment forme-t-on le future perfect ?", options:["will + verbe-ing","will + have + participe passé","will + be + verbe-ing","have + participe passé"], answer:1, explain:"will + have + participe passé."},
  {type:"mcq", prompt:"Quelle phrase est correcte ?", options:["She will have leave by then","She will have left by then","She has left by then","She will leaving by then"], answer:1, explain:"will have + participe passé (left)."},
  {type:"mcq", prompt:"Le future perfect est souvent utilisé avec...", options:["yesterday","by + date/heure","now","always"], answer:1, explain:"Souvent avec « by + échéance »."},
  {type:"fill", prompt:"Complète :", sentence:"By Friday, we ___ (will / complete) the project.", answer:"will have completed", explain:""},
  {type:"fill", prompt:"Complète :", sentence:"___ you ___ (will / finish) by six?", answer:"Will you have finished", explain:""},
  {type:"fill", prompt:"Complète :", sentence:"They ___ (will not / arrive) by noon.", answer:"won't have arrived", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["training","have","finished","my","will","I","year","next","By"], answer:"By next year, I will have finished my training.", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["you","by","arrive","left","have","will","She","the","time"], answer:"She will have left by the time you arrive.", explain:""},
  {type:"oral", prompt:"Dis en anglais : « D'ici l'année prochaine, j'aurai terminé ma formation »", expected:"By next year I will have finished my training", keywords:["will","have","finished","training"]},
  {type:"oral", prompt:"Dis en anglais : « Elle sera partie avant que tu arrives »", expected:"She will have left by the time you arrive", keywords:["will","have","left"]},
  {type:"oral", prompt:"Dis en anglais : « Nous aurons terminé le projet d'ici vendredi »", expected:"We will have completed the project by Friday", keywords:["will","have","completed","project","friday"]}
],

"past-perfect-continuous": [
  {type:"mcq", prompt:"Quelle phrase insiste sur une durée continue AVANT un autre moment passé ?", options:["I worked for three hours","I had worked for three hours","I had been working for three hours when the boss arrived","I have been working for three hours"], answer:2, explain:"had been + verbe-ing = durée continue avant un autre événement passé."},
  {type:"mcq", prompt:"Comment forme-t-on le past perfect continuous ?", options:["had + verbe-ing","had + been + verbe-ing","have + been + verbe-ing","was + verbe-ing"], answer:1, explain:"had + been + verbe-ing."},
  {type:"mcq", prompt:"Quelle phrase est correcte ?", options:["He was tired because he had working all night","He was tired because he had been working all night","He was tired because he has been working all night","He is tired because he had been working all night"], answer:1, explain:"had been + verbe-ing."},
  {type:"mcq", prompt:"Ce temps combine...", options:["le présent et le futur","le passé du passé et la durée continue","le présent continu et le futur","aucune combinaison"], answer:1, explain:"C'est le mélange du past perfect et du continuous."},
  {type:"fill", prompt:"Complète :", sentence:"She ___ (had / wait) for an hour before the bus came.", answer:"had been waiting", explain:""},
  {type:"fill", prompt:"Complète :", sentence:"How long ___ you ___ (wait)?", answer:"had you been waiting", explain:""},
  {type:"fill", prompt:"Complète :", sentence:"We ___ (had / drive) for two hours when we stopped.", answer:"had been driving", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["arrived","boss","hours","working","three","been","the","had","for","I","when"], answer:"I had been working for three hours when the boss arrived.", explain:""},
  {type:"reorder", prompt:"Remets les mots dans le bon ordre :", words:["night","all","working","been","tired","was","because","he","had","He"], answer:"He was tired because he had been working all night.", explain:""},
  {type:"oral", prompt:"Dis en anglais : « Je travaillais depuis trois heures quand le patron est arrivé »", expected:"I had been working for three hours when the boss arrived", keywords:["had","been","working","three","hours"]},
  {type:"oral", prompt:"Dis en anglais : « Depuis combien de temps attendais-tu ? »", expected:"How long had you been waiting", keywords:["how","long","had","been","waiting"]},
  {type:"oral", prompt:"Dis en anglais : « Nous conduisions depuis deux heures quand nous nous sommes arrêtés »", expected:"We had been driving for two hours when we stopped", keywords:["had","been","driving","two","hours"]}
]

};
