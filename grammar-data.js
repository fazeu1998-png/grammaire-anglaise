/* ===================================================================
   Contenu grammatical — 15 modules
   Chaque module: explication FR, formules (aff/neg/int), usage,
   erreurs classiques, verbes irréguliers utiles, 10+ exemples.
   =================================================================== */

const TIERS = [
  ["present-simple", "imperative", "present-continuous"],
  ["past-simple", "modals", "going-to"],
  ["will-future", "present-perfect", "past-continuous"],
  ["future-continuous", "present-perfect-continuous", "past-perfect"],
  ["conditionals", "future-perfect", "past-perfect-continuous"]
];

const MODULES = [
{
  id: "present-simple",
  title: "Present Simple",
  subtitle: "Le présent simple",
  explanation: "Le present simple sert à parler d'habitudes, de routines et de faits généraux — des choses qui sont vraies en général, pas seulement maintenant. Attention : en français, « je travaille » peut vouloir dire « je suis en train de travailler » OU « je travaille habituellement ». En anglais, ces deux idées utilisent des temps différents. Le present simple = habitude/fait général. Le present continuous (module suivant) = action en train de se passer maintenant.",
  formulas: {
    affirmative: "Sujet + verbe (+ -s à la 3e personne du singulier : he/she/it)",
    negative: "Sujet + do/does + not + verbe (forme de base)",
    interrogative: "Do/Does + sujet + verbe (forme de base) ?"
  },
  usage: [
    "Routines et habitudes quotidiennes (I work every day)",
    "Horaires et faits fixes (The store opens at nine)",
    "Vérités générales et permanentes (Water boils at 100°C)",
    "Fréquence avec always, usually, often, sometimes, never"
  ],
  mistakes: [
    "Oublier le -s à la 3e personne du singulier : « He go » au lieu de « He goes »",
    "Utiliser « do » avec he/she/it au lieu de « does » : « He do » au lieu de « He does »",
    "Utiliser le present simple pour une action en train de se passer (confusion avec le present continuous)"
  ],
  irregularVerbs: null,
  examples: [
    {en:"I work at a construction site.", fr:"Je travaille sur un chantier.", pron:"aï oueurk att eu keunstrekcheunn saït"},
    {en:"She speaks English every day.", fr:"Elle parle anglais chaque jour.", pron:"chi spiiks Innglich èvri dèï"},
    {en:"We start at eight o'clock.", fr:"Nous commençons à huit heures.", pron:"oui start att èït euh'klok"},
    {en:"He doesn't like coffee.", fr:"Il n'aime pas le café.", pron:"hi deuzeunnt laïk kofi"},
    {en:"Do you live in Waterloo?", fr:"Habites-tu à Waterloo ?", pron:"dou you liv inn Ouôteurlou"},
    {en:"The store opens at nine.", fr:"Le magasin ouvre à neuf heures.", pron:"ze stor ôupeunnz att naïnn"},
    {en:"They don't work on Sundays.", fr:"Ils ne travaillent pas le dimanche.", pron:"zèï dônnt oueurk onn seunndèïz"},
    {en:"My English improves every day.", fr:"Mon anglais s'améliore chaque jour.", pron:"maï Innglich improuvz èvri dèï"},
    {en:"Does she understand French?", fr:"Comprend-elle le français ?", pron:"deuz chi eundeursteunnd Frèntch"},
    {en:"I always wear my safety boots.", fr:"Je porte toujours mes bottes de sécurité.", pron:"aï olouèïz uèr maï sèïfti bouts"}
  ]
},
{
  id: "imperative",
  title: "Imperative",
  subtitle: "L'impératif",
  explanation: "L'impératif sert à donner un ordre, une instruction ou un conseil. C'est le temps le plus simple de l'anglais : on utilise juste la base du verbe, sans sujet — « tu » ou « vous » sont sous-entendus. Pour la forme négative, on ajoute simplement « Don't » devant le verbe.",
  formulas: {
    affirmative: "Verbe (forme de base), sans sujet",
    negative: "Don't + verbe (forme de base)",
    interrogative: "(pas de forme interrogative — pour une suggestion, on utilise « Let's + verbe »)"
  },
  usage: [
    "Donner des instructions au travail",
    "Consignes de sécurité",
    "Conseils directs",
    "Suggestions avec « Let's » (Let's take a break)"
  ],
  mistakes: [
    "Ajouter un sujet inutile : « You close the door » au lieu de « Close the door »",
    "Dire « not close » au lieu de « Don't close »"
  ],
  irregularVerbs: null,
  examples: [
    {en:"Close the door.", fr:"Ferme la porte.", pron:"klôuz ze dor"},
    {en:"Don't touch that.", fr:"Ne touche pas à ça.", pron:"dônnt teutch zatt"},
    {en:"Wear your safety glasses.", fr:"Porte tes lunettes de sécurité.", pron:"uèr yor sèïfti glasseuz"},
    {en:"Please wait here.", fr:"Attends ici s'il te plaît.", pron:"pliiz uèït hir"},
    {en:"Don't be late.", fr:"Ne sois pas en retard.", pron:"dônnt bi lèït"},
    {en:"Turn left at the corner.", fr:"Tourne à gauche au coin.", pron:"teurn lèft att ze korneur"},
    {en:"Let's take a break.", fr:"Prenons une pause.", pron:"lèts tèïk eu brèïk"},
    {en:"Sign here, please.", fr:"Signe ici, s'il te plaît.", pron:"saïnn hir pliiz"},
    {en:"Don't forget your gloves.", fr:"N'oublie pas tes gants.", pron:"dônnt forguètt yor gleuvz"},
    {en:"Be careful on the ladder.", fr:"Sois prudent sur l'échelle.", pron:"bi kèrfeul onn ze ladeur"}
  ]
},
{
  id: "present-continuous",
  title: "Present Continuous",
  subtitle: "Le présent continu",
  explanation: "Le present continuous décrit une action EN TRAIN de se passer maintenant, au moment où on parle. C'est différent du present simple qui décrit une habitude. En français on dirait « je suis en train de... », mais en anglais cette nuance est intégrée directement dans la forme du verbe : be + verbe-ing.",
  formulas: {
    affirmative: "Sujet + am/is/are + verbe-ing",
    negative: "Sujet + am/is/are + not + verbe-ing",
    interrogative: "Am/Is/Are + sujet + verbe-ing ?"
  },
  usage: [
    "Action en cours au moment où on parle",
    "Situation temporaire (This week, I'm working nights)",
    "Projet déjà planifié dans un futur proche (I'm starting a new job next week)"
  ],
  mistakes: [
    "Oublier le verbe « to be » : « I working » au lieu de « I am working »",
    "Mal former le -ing : make → making (pas makeing), stop → stopping (on double la consonne)",
    "Utiliser le present simple pour une action en cours"
  ],
  irregularVerbs: null,
  examples: [
    {en:"I am working right now.", fr:"Je suis en train de travailler.", pron:"aï amm oueurking raït naou"},
    {en:"She is talking to the boss.", fr:"Elle parle au patron (en ce moment).", pron:"chi iz toking tou ze boss"},
    {en:"We are waiting for the bus.", fr:"Nous attendons le bus.", pron:"oui ar uèïting for ze beuss"},
    {en:"He isn't listening.", fr:"Il n'écoute pas.", pron:"hi izeunnt liseuning"},
    {en:"Are you coming to work today?", fr:"Viens-tu travailler aujourd'hui ?", pron:"ar you keuming tou oueurk teudèï"},
    {en:"They are building a new house.", fr:"Ils construisent une nouvelle maison.", pron:"zèï ar bilding eu niou haouss"},
    {en:"I'm learning English every day.", fr:"J'apprends l'anglais chaque jour.", pron:"aïm leurning Innglich èvri dèï"},
    {en:"It is raining outside.", fr:"Il pleut dehors.", pron:"itt iz rèïning aoutsaïd"},
    {en:"What are you doing?", fr:"Que fais-tu ?", pron:"watt ar you douing"},
    {en:"She's not working today.", fr:"Elle ne travaille pas aujourd'hui.", pron:"chiz nott oueurking teudèï"}
  ]
},
{
  id: "past-simple",
  title: "Past Simple",
  subtitle: "Le passé simple",
  explanation: "Le past simple sert à parler d'une action TERMINÉE dans le passé, à un moment précis (hier, la semaine dernière, en 2020...). C'est proche du passé composé français dans son usage courant, mais contrairement au français, le verbe ne change pas selon le sujet (sauf « was/were » pour « to be »).",
  formulas: {
    affirmative: "Sujet + verbe+ed (ou forme irrégulière)",
    negative: "Sujet + did + not + verbe (forme de base)",
    interrogative: "Did + sujet + verbe (forme de base) ?"
  },
  usage: [
    "Événements terminés à un moment précis du passé",
    "Récits d'histoires",
    "Actions passées liées à yesterday, last week, in 2020..."
  ],
  mistakes: [
    "Oublier « did » et garder le verbe conjugué : « He didn't went » au lieu de « He didn't go »",
    "Ajouter -ed à un verbe irrégulier : « goed » au lieu de « went »",
    "Utiliser le present perfect avec un moment précis (yesterday) — c'est une erreur classique, voir module Present Perfect"
  ],
  irregularVerbs: [
    ["go","went"],["have","had"],["do","did"],["see","saw"],["get","got"],
    ["make","made"],["take","took"],["come","came"],["say","said"],["know","knew"],
    ["think","thought"],["find","found"],["give","gave"],["tell","told"],["become","became"],
    ["leave","left"],["feel","felt"],["bring","brought"],["buy","bought"],["begin","began"],
    ["eat","ate"],["drive","drove"],["speak","spoke"],["write","wrote"],["read","read"]
  ],
  examples: [
    {en:"I worked yesterday.", fr:"J'ai travaillé hier.", pron:"aï oueurkt yesteurdèï"},
    {en:"She went to the bank.", fr:"Elle est allée à la banque.", pron:"chi ouènnt tou ze bannk"},
    {en:"We didn't finish the job.", fr:"Nous n'avons pas fini le travail.", pron:"oui dideunnt finich ze djob"},
    {en:"Did you call the boss?", fr:"As-tu appelé le patron ?", pron:"did you kol ze boss"},
    {en:"He arrived late.", fr:"Il est arrivé en retard.", pron:"hi araïvd lèït"},
    {en:"I got the job!", fr:"J'ai obtenu l'emploi !", pron:"aï gott ze djob"},
    {en:"They didn't come to work.", fr:"Ils ne sont pas venus travailler.", pron:"zèï dideunnt keum tou oueurk"},
    {en:"I saw him at the store.", fr:"Je l'ai vu au magasin.", pron:"aï so himm att ze stor"},
    {en:"She didn't understand.", fr:"Elle n'a pas compris.", pron:"chi dideunnt eundeursteunnd"},
    {en:"We took the bus downtown.", fr:"Nous avons pris le bus au centre-ville.", pron:"oui touk ze beuss daountaoun"}
  ]
},
{
  id: "modals",
  title: "Can, Must, Should",
  subtitle: "Les modaux de base",
  explanation: "Les modaux sont des mots spéciaux qui expriment une capacité (can), une obligation (must) ou un conseil (should). Ils sont TOUJOURS suivis du verbe à sa forme de base, jamais avec « to » et jamais conjugués (pas de -s à la 3e personne). C'est beaucoup plus simple qu'en français !",
  formulas: {
    affirmative: "Sujet + can/must/should + verbe (forme de base)",
    negative: "Sujet + can't/mustn't/shouldn't + verbe (forme de base)",
    interrogative: "Can/Must/Should + sujet + verbe (forme de base) ?"
  },
  usage: [
    "can = capacité ou permission",
    "must = obligation forte",
    "should = conseil ou recommandation (moins fort que must)"
  ],
  mistakes: [
    "Ajouter « to » après le modal : « I can to work » au lieu de « I can work »",
    "Conjuguer le modal : « He cans » au lieu de « He can »",
    "Utiliser « must » pour un simple conseil (trop fort) au lieu de « should »"
  ],
  irregularVerbs: null,
  examples: [
    {en:"I can speak French.", fr:"Je peux parler français.", pron:"aï keunn spik Frèntch"},
    {en:"You must wear a helmet.", fr:"Tu dois porter un casque.", pron:"you meust uèr eu hèlmètt"},
    {en:"You should practice every day.", fr:"Tu devrais pratiquer chaque jour.", pron:"you choud praktiss èvri dèï"},
    {en:"Can you help me?", fr:"Peux-tu m'aider ?", pron:"keunn you hèlp mi"},
    {en:"I can't come today.", fr:"Je ne peux pas venir aujourd'hui.", pron:"aï keunnt keum teudèï"},
    {en:"You mustn't smoke here.", fr:"Tu ne dois pas fumer ici.", pron:"you meuseunntt smôuk hir"},
    {en:"She should call the doctor.", fr:"Elle devrait appeler le médecin.", pron:"chi choud kol ze dokteur"},
    {en:"We must finish before five.", fr:"Nous devons finir avant cinq heures.", pron:"oui meust finich bifor faïv"},
    {en:"Can I ask a question?", fr:"Puis-je poser une question ?", pron:"keunn aï ask eu koueustcheunn"},
    {en:"You shouldn't work too hard.", fr:"Tu ne devrais pas trop travailler.", pron:"you choudeunnt oueurk tou hard"}
  ]
},
{
  id: "going-to",
  title: "Going to Future",
  subtitle: "Le futur avec « going to »",
  explanation: "« Going to » sert à parler d'un projet DÉJÀ DÉCIDÉ, ou d'une prédiction basée sur ce qu'on voit maintenant. C'est différent de « will » (module suivant) qui sert pour une décision spontanée. Exemple : si le ciel est noir, tu dis « It's going to rain » parce que tu le VOIS venir — pas « It will rain ».",
  formulas: {
    affirmative: "Sujet + am/is/are + going to + verbe (forme de base)",
    negative: "Sujet + am/is/are + not + going to + verbe (forme de base)",
    interrogative: "Am/Is/Are + sujet + going to + verbe (forme de base) ?"
  },
  usage: [
    "Projets et plans déjà décidés",
    "Prédictions basées sur des preuves visibles maintenant"
  ],
  mistakes: [
    "Oublier le verbe « to be » : « I going to work » au lieu de « I am going to work »",
    "Utiliser « will » pour un projet déjà planifié à l'avance"
  ],
  irregularVerbs: null,
  examples: [
    {en:"I am going to start a new job.", fr:"Je vais commencer un nouvel emploi.", pron:"aï amm gôing tou start eu niou djob"},
    {en:"She is going to call you.", fr:"Elle va t'appeler.", pron:"chi iz gôing tou kol you"},
    {en:"We are going to move next month.", fr:"Nous allons déménager le mois prochain.", pron:"oui ar gôing tou mouv nèxt meunnth"},
    {en:"Are you going to apply for that job?", fr:"Vas-tu postuler pour cet emploi ?", pron:"ar you gôing tou euplaï for zatt djob"},
    {en:"It's going to rain.", fr:"Il va pleuvoir.", pron:"itts gôing tou rèïn"},
    {en:"I'm not going to be late.", fr:"Je ne vais pas être en retard.", pron:"aïm nott gôing tou bi lèït"},
    {en:"They are going to hire more people.", fr:"Ils vont embaucher plus de monde.", pron:"zèï ar gôing tou haïeur mor pipeul"},
    {en:"He is going to fix the door.", fr:"Il va réparer la porte.", pron:"hi iz gôing tou fiks ze dor"},
    {en:"What are you going to do tonight?", fr:"Que vas-tu faire ce soir ?", pron:"watt ar you gôing tou dou teunaït"},
    {en:"We aren't going to finish today.", fr:"Nous n'allons pas finir aujourd'hui.", pron:"oui arntt gôing tou finich teudèï"}
  ]
},
{
  id: "will-future",
  title: "Will Future",
  subtitle: "Le futur avec « will »",
  explanation: "« Will » sert pour une décision prise SUR LE MOMENT, une promesse, ou une prédiction générale sans preuve visible immédiate. Contrairement à « going to », il n'y a pas de plan préparé à l'avance. Exemple : le téléphone sonne, tu dis spontanément « I'll answer it! » — c'est une décision instantanée.",
  formulas: {
    affirmative: "Sujet + will + verbe (forme de base)",
    negative: "Sujet + will not (won't) + verbe (forme de base)",
    interrogative: "Will + sujet + verbe (forme de base) ?"
  },
  usage: [
    "Décisions spontanées prises au moment où on parle",
    "Promesses",
    "Prédictions générales sur le futur",
    "Offres d'aide (I'll help you)"
  ],
  mistakes: [
    "Confondre avec « going to » (will = spontané, going to = déjà planifié)",
    "Conjuguer « will » : « He wills » — will ne change JAMAIS de forme",
    "Oublier de contracter en won't à la forme négative dans le langage courant"
  ],
  irregularVerbs: null,
  examples: [
    {en:"I will help you.", fr:"Je vais t'aider.", pron:"aï ouil hèlp you"},
    {en:"She will call you tomorrow.", fr:"Elle t'appellera demain.", pron:"chi ouil kol you teumorrôou"},
    {en:"We won't be late.", fr:"Nous ne serons pas en retard.", pron:"oui ouôunnt bi lèït"},
    {en:"Will you come to the party?", fr:"Viendras-tu à la fête ?", pron:"ouil you keum tou ze parti"},
    {en:"I'll send you my resume.", fr:"Je vais t'envoyer mon CV.", pron:"aïl sènnd you maï rèzioumè"},
    {en:"It will be sunny tomorrow.", fr:"Il fera beau demain.", pron:"itt ouil bi seuni teumorrôou"},
    {en:"They won't finish on time.", fr:"Ils ne finiront pas à temps.", pron:"zèï ouôunnt finich onn taïm"},
    {en:"I promise I will call you.", fr:"Je promets que je t'appellerai.", pron:"aï promiss aï ouil kol you"},
    {en:"Will it rain tomorrow?", fr:"Va-t-il pleuvoir demain ?", pron:"ouil itt rèïn teumorrôou"},
    {en:"I think I will get the job.", fr:"Je pense que je vais obtenir l'emploi.", pron:"aï thinnk aï ouil guètt ze djob"}
  ]
},
{
  id: "present-perfect",
  title: "Present Perfect",
  subtitle: "Le present perfect",
  explanation: "C'est LE temps le plus difficile pour un francophone, car il n'existe pas exactement pareil en français. Le present perfect relie le PASSÉ au PRÉSENT : soit une action a commencé dans le passé et continue encore, soit c'est une expérience de toute une vie (sans dire quand exactement), soit c'est un résultat visible maintenant. Règle simple pour choisir : si tu précises QUAND (yesterday, in 2020, last week), utilise le past simple. Si tu ne précises pas quand, ou que ça a un lien direct avec maintenant, utilise le present perfect.",
  formulas: {
    affirmative: "Sujet + have/has + participe passé",
    negative: "Sujet + have/has + not + participe passé",
    interrogative: "Have/Has + sujet + participe passé ?"
  },
  usage: [
    "Expérience de vie, sans préciser quand (I have been to Toronto)",
    "Action commencée dans le passé qui continue (I have worked here for 5 years)",
    "Résultat visible maintenant (I have lost my keys — donc je ne les ai plus)",
    "Avec just, already, yet, ever, never"
  ],
  mistakes: [
    "Utiliser le present perfect avec un moment précis (yesterday, last week) — c'est l'erreur la plus fréquente : il faut le past simple",
    "Oublier have/has",
    "Mal former le participe passé des verbes irréguliers"
  ],
  irregularVerbs: [
    ["go","gone"],["be","been"],["do","done"],["see","seen"],["eat","eaten"],
    ["take","taken"],["give","given"],["write","written"],["speak","spoken"],["break","broken"],
    ["know","known"],["drive","driven"],["come","come"],["get","gotten"],["forget","forgotten"],
    ["begin","begun"],["find","found"],["make","made"],["have","had"],["say","said"]
  ],
  examples: [
    {en:"I have worked here for five years.", fr:"Je travaille ici depuis cinq ans.", pron:"aï hav oueurkt hir for faïv yirz"},
    {en:"She has already left.", fr:"Elle est déjà partie.", pron:"chi haz olrèdi lèft"},
    {en:"Have you ever been to Toronto?", fr:"Es-tu déjà allé à Toronto ?", pron:"hav you èveur bin tou Teurontô"},
    {en:"I haven't finished yet.", fr:"Je n'ai pas encore fini.", pron:"aï havannt finicht yètt"},
    {en:"He has never worked construction.", fr:"Il n'a jamais travaillé dans la construction.", pron:"hi haz nèveur oueurkt konnstreukcheunn"},
    {en:"We have just arrived.", fr:"Nous venons d'arriver.", pron:"oui hav djeust araïvd"},
    {en:"I have lost my keys.", fr:"J'ai perdu mes clés (et je ne les ai toujours pas).", pron:"aï hav lost maï kiiz"},
    {en:"Has she called you?", fr:"T'a-t-elle appelé ?", pron:"haz chi kold you"},
    {en:"They have moved to Waterloo.", fr:"Ils ont déménagé à Waterloo.", pron:"zèï hav mouvd tou Ouôteurlou"},
    {en:"I have never seen this before.", fr:"Je n'ai jamais vu ça avant.", pron:"aï hav nèveur siin ziss bifor"}
  ]
},
{
  id: "past-continuous",
  title: "Past Continuous",
  subtitle: "Le passé continu",
  explanation: "Le past continuous décrit une action EN TRAIN de se passer à un moment précis du passé, souvent interrompue par une autre action (celle-ci au past simple). C'est comme une photo prise au milieu de l'action. Exemple : « I was working when the phone rang » — j'étais en train de travailler QUAND le téléphone a sonné.",
  formulas: {
    affirmative: "Sujet + was/were + verbe-ing",
    negative: "Sujet + was/were + not + verbe-ing",
    interrogative: "Was/Were + sujet + verbe-ing ?"
  },
  usage: [
    "Action en cours interrompue par une autre action passée",
    "Deux actions simultanées dans le passé (while... ...)",
    "Description d'une scène passée"
  ],
  mistakes: [
    "Utiliser le past simple au lieu du continuous pour l'action « en fond »",
    "Mal choisir entre was (I/he/she/it) et were (you/we/they)"
  ],
  irregularVerbs: null,
  examples: [
    {en:"I was working when you called.", fr:"J'étais en train de travailler quand tu as appelé.", pron:"aï uoz oueurking ouènn you kold"},
    {en:"She was sleeping at ten.", fr:"Elle dormait à dix heures.", pron:"chi uoz sliiping att tènn"},
    {en:"We were waiting for the bus.", fr:"Nous attendions le bus.", pron:"oui uer uèïting for ze beuss"},
    {en:"What were you doing last night?", fr:"Que faisais-tu hier soir ?", pron:"watt uer you douing last naït"},
    {en:"It was raining when I left.", fr:"Il pleuvait quand je suis parti.", pron:"itt uoz rèïning ouènn aï lèft"},
    {en:"They weren't listening.", fr:"Ils n'écoutaient pas.", pron:"zèï ueurntt liseuning"},
    {en:"I was driving to work.", fr:"Je conduisais vers le travail.", pron:"aï uoz draïving tou oueurk"},
    {en:"Was he working there in 2020?", fr:"Travaillait-il là en 2020 ?", pron:"uoz hi oueurking zèr inn tou taouzeunnd tuènti"},
    {en:"While I was eating, the phone rang.", fr:"Pendant que je mangeais, le téléphone a sonné.", pron:"ouaïl aï uoz iiting ze fôunn rang"},
    {en:"We were talking about you.", fr:"Nous parlions de toi.", pron:"oui uer toking eubaout you"}
  ]
},
{
  id: "future-continuous",
  title: "Future Continuous",
  subtitle: "Le futur continu",
  explanation: "Le future continuous décrit une action qui SERA EN TRAIN de se passer à un moment précis dans le futur. Utile pour dire « je serai occupé à faire X » à une heure précise plus tard, ou pour demander poliment si quelqu'un sera occupé.",
  formulas: {
    affirmative: "Sujet + will + be + verbe-ing",
    negative: "Sujet + will + not + be + verbe-ing",
    interrogative: "Will + sujet + be + verbe-ing ?"
  },
  usage: [
    "Action en cours à un moment futur précis",
    "Demande polie pour savoir si quelqu'un sera occupé"
  ],
  mistakes: [
    "Oublier « be » : « I will working » au lieu de « I will be working »",
    "Confondre avec le simple futur (will + verbe)"
  ],
  irregularVerbs: null,
  examples: [
    {en:"I will be working tomorrow at noon.", fr:"Je serai en train de travailler demain à midi.", pron:"aï ouil bi oueurking teumorrôou att noun"},
    {en:"She will be sleeping by then.", fr:"Elle dormira à ce moment-là.", pron:"chi ouil bi sliiping baï zènn"},
    {en:"We will be waiting for you.", fr:"Nous t'attendrons.", pron:"oui ouil bi uèïting for you"},
    {en:"Will you be using the car tonight?", fr:"Vas-tu utiliser la voiture ce soir ?", pron:"ouil you bi youzing ze kar teunaït"},
    {en:"Next week, I will be starting my new job.", fr:"La semaine prochaine, je commencerai mon nouvel emploi.", pron:"nèxt ouiik aï ouil bi starting maï niou djob"},
    {en:"They will be traveling all day.", fr:"Ils voyageront toute la journée.", pron:"zèï ouil bi traveuling ol dèï"},
    {en:"I won't be working this weekend.", fr:"Je ne travaillerai pas ce week-end.", pron:"aï ouôunnt bi oueurking ziss ouikènnd"},
    {en:"He will be driving home at six.", fr:"Il conduira vers la maison à six heures.", pron:"hi ouil bi draïving hôumm att siks"},
    {en:"Will she be attending the meeting?", fr:"Assistera-t-elle à la réunion ?", pron:"ouil chi bi euteunnding ze miiting"},
    {en:"At eight, we will be eating dinner.", fr:"À huit heures, nous serons en train de souper.", pron:"att èït oui ouil bi iiting dineur"}
  ]
},
{
  id: "present-perfect-continuous",
  title: "Present Perfect Continuous",
  subtitle: "Le present perfect continu",
  explanation: "Ce temps insiste sur la DURÉE d'une action qui a commencé dans le passé et continue encore maintenant (ou vient juste de s'arrêter). Différence avec le present perfect simple : le continuous met l'accent sur le PROCESSUS et la durée, pas sur le résultat. « I have worked here for 5 years » (un fait) contre « I have been working all day » (insiste sur l'effort et la durée continue).",
  formulas: {
    affirmative: "Sujet + have/has + been + verbe-ing",
    negative: "Sujet + have/has + not + been + verbe-ing",
    interrogative: "Have/Has + sujet + been + verbe-ing ?"
  },
  usage: [
    "Durée d'une action continue jusqu'à maintenant, souvent avec « for » et « since »",
    "Pour expliquer un résultat visible maintenant (I'm tired because I've been working all day)"
  ],
  mistakes: [
    "Confondre avec le present perfect simple",
    "Oublier « been » : « I have working » au lieu de « I have been working »"
  ],
  irregularVerbs: null,
  examples: [
    {en:"I have been working here since 2020.", fr:"Je travaille ici depuis 2020.", pron:"aï hav bin oueurking hir sinns tou taouzeunnd tuènti"},
    {en:"She has been studying English for two years.", fr:"Elle étudie l'anglais depuis deux ans.", pron:"chi haz bin steudiing Innglich for tou yirz"},
    {en:"We have been waiting for an hour.", fr:"Nous attendons depuis une heure.", pron:"oui hav bin uèïting for eunn aoueur"},
    {en:"Have you been sleeping well?", fr:"As-tu bien dormi ces derniers temps ?", pron:"hav you bin sliiping ouèl"},
    {en:"I'm tired because I've been working all day.", fr:"Je suis fatigué parce que j'ai travaillé toute la journée.", pron:"aïm taïeurd bikoz aïv bin oueurking ol dèï"},
    {en:"It has been raining since morning.", fr:"Il pleut depuis ce matin.", pron:"itt haz bin rèïning sinns morning"},
    {en:"They haven't been answering the phone.", fr:"Ils ne répondent pas au téléphone (depuis un moment).", pron:"zèï havannt bin anseuring ze fôunn"},
    {en:"How long have you been living here?", fr:"Depuis combien de temps habites-tu ici ?", pron:"haou long hav you bin living hir"},
    {en:"He has been looking for a job for months.", fr:"Il cherche un emploi depuis des mois.", pron:"hi haz bin louking for eu djob for meunnths"},
    {en:"We have been practicing every day.", fr:"Nous pratiquons chaque jour (depuis un moment).", pron:"oui hav bin praktissing èvri dèï"}
  ]
},
{
  id: "past-perfect",
  title: "Past Perfect",
  subtitle: "Le plus-que-parfait",
  explanation: "Le past perfect sert à parler d'une action qui s'est passée AVANT une autre action passée — c'est le « passé du passé ». Si tu racontes deux événements passés, celui qui arrive EN PREMIER se met au past perfect, et celui qui arrive après reste au past simple. Exemple : « When I arrived, the bus had already left » — le bus est parti AVANT que j'arrive.",
  formulas: {
    affirmative: "Sujet + had + participe passé",
    negative: "Sujet + had + not + participe passé",
    interrogative: "Had + sujet + participe passé ?"
  },
  usage: [
    "Montrer qu'une action passée est antérieure à une autre action passée",
    "Souvent avec when, before, after, already"
  ],
  mistakes: [
    "Utiliser le past simple pour les deux actions et perdre la nuance d'ordre chronologique",
    "Oublier « had »"
  ],
  irregularVerbs: null,
  examples: [
    {en:"When I arrived, the meeting had already started.", fr:"Quand je suis arrivé, la réunion avait déjà commencé.", pron:"ouènn aï araïvd ze miiting had olrèdi startèd"},
    {en:"She had finished before I called.", fr:"Elle avait fini avant que j'appelle.", pron:"chi had finicht bifor aï kold"},
    {en:"I had never seen snow before I came to Canada.", fr:"Je n'avais jamais vu de neige avant de venir au Canada.", pron:"aï had nèveur siin snôou bifor aï kèïm tou Kaneuda"},
    {en:"Had you eaten before the interview?", fr:"Avais-tu mangé avant l'entretien ?", pron:"had you iiteunn bifor ze inteurviou"},
    {en:"The bus had already left when I got there.", fr:"Le bus était déjà parti quand je suis arrivé.", pron:"ze beuss had olrèdi lèft ouènn aï gott zèr"},
    {en:"We hadn't met before that day.", fr:"Nous ne nous étions pas rencontrés avant ce jour-là.", pron:"oui hadeunnt mètt bifor zatt dèï"},
    {en:"I had worked there for two years before I quit.", fr:"J'avais travaillé là pendant deux ans avant de démissionner.", pron:"aï had oueurkt zèr for tou yirz bifor aï kouitt"},
    {en:"She realized she had forgotten her keys.", fr:"Elle a réalisé qu'elle avait oublié ses clés.", pron:"chi rialaïzd chi had forgotteunn heur kiiz"},
    {en:"Had the job already been filled?", fr:"Le poste avait-il déjà été comblé ?", pron:"had ze djob olrèdi bin fild"},
    {en:"By the time I finished, everyone had left.", fr:"Le temps que je finisse, tout le monde était parti.", pron:"baï ze taïm aï finicht èvriouann had lèft"}
  ]
},
{
  id: "conditionals",
  title: "Conditionals 0, 1, 2",
  subtitle: "Les conditionnels",
  explanation: "Les phrases avec « if » (si) ont plusieurs formes selon le degré de réalité. Type 0 : une vérité toujours vraie (si on chauffe l'eau à 100°C, elle bout — toujours vrai). Type 1 : quelque chose de probable dans le futur (si tu travailles dur, tu réussiras — c'est réaliste et possible). Type 2 : une situation imaginaire ou peu probable, souvent contraire à la réalité actuelle (si j'étais riche, j'achèterais une maison — je ne suis pas riche maintenant). Astuce : au type 2, dans le style soutenu on utilise toujours « were » (if I were you), même si « was » est aussi accepté à l'oral.",
  formulas: {
    affirmative: "Type 0 : If + present simple, present simple\nType 1 : If + present simple, will + verbe\nType 2 : If + past simple, would + verbe",
    negative: "Ajoute « not » dans la partie appropriée : If it doesn't rain... / If I weren't tired...",
    interrogative: "What would you do if... ? / Will you... if... ?"
  },
  usage: [
    "Type 0 : règles et faits toujours vrais",
    "Type 1 : plans et conséquences réalistes dans le futur",
    "Type 2 : rêves, conseils hypothétiques (If I were you...), situations peu probables"
  ],
  mistakes: [
    "Mettre « will » directement après « if » : « If it will rain » au lieu de « If it rains »",
    "Confondre type 1 (réaliste) et type 2 (imaginaire) selon le degré de probabilité",
    "Utiliser « would » dans la partie « if »"
  ],
  irregularVerbs: null,
  examples: [
    {en:"If you heat water, it boils.", fr:"Si tu chauffes de l'eau, elle bout.", pron:"if you hiit ouoteur itt boilz"},
    {en:"If it rains, the ground gets wet.", fr:"S'il pleut, le sol devient mouillé.", pron:"if itt rèïnz ze graound guèts uètt"},
    {en:"If I don't sleep, I get tired.", fr:"Si je ne dors pas, je deviens fatigué.", pron:"if aï dônnt sliip aï guètt taïeurd"},
    {en:"If you mix blue and yellow, you get green.", fr:"Si tu mélanges bleu et jaune, tu obtiens du vert.", pron:"if you miks blou annd yèlôou you guètt griin"},
    {en:"If I work hard, I will get the job.", fr:"Si je travaille dur, j'obtiendrai l'emploi.", pron:"if aï oueurk hard aï ouil guètt ze djob"},
    {en:"If it rains tomorrow, we won't work outside.", fr:"S'il pleut demain, nous ne travaillerons pas dehors.", pron:"if itt rèïnz teumorrôou oui ouôunnt oueurk aoutsaïd"},
    {en:"If you call me, I will answer.", fr:"Si tu m'appelles, je répondrai.", pron:"if you kol mi aï ouil anseur"},
    {en:"If she studies, she will pass the test.", fr:"Si elle étudie, elle réussira le test.", pron:"if chi steudiz chi ouil pass ze tèst"},
    {en:"If I were rich, I would buy a house.", fr:"Si j'étais riche, j'achèterais une maison.", pron:"if aï uer ritch aï woud baï eu haouss"},
    {en:"If I were you, I would ask for help.", fr:"Si j'étais toi, je demanderais de l'aide.", pron:"if aï uer you aï woud ask for hèlp"},
    {en:"If I had more time, I would practice more.", fr:"Si j'avais plus de temps, je pratiquerais davantage.", pron:"if aï had mor taïm aï woud praktiss mor"},
    {en:"What would you do if you won the lottery?", fr:"Que ferais-tu si tu gagnais à la loterie ?", pron:"watt woud you dou if you ouonn ze loteuri"}
  ]
},
{
  id: "future-perfect",
  title: "Future Perfect",
  subtitle: "Le futur antérieur",
  explanation: "Le future perfect décrit une action qui SERA TERMINÉE avant un certain moment dans le futur. C'est plus rare à l'oral courant, mais utile pour parler d'objectifs avec une date limite. Exemple : « By next year, I will have finished my training » — d'ici l'année prochaine, ma formation sera terminée.",
  formulas: {
    affirmative: "Sujet + will + have + participe passé",
    negative: "Sujet + will + not + have + participe passé",
    interrogative: "Will + sujet + have + participe passé ?"
  },
  usage: [
    "Action terminée avant une échéance future",
    "Souvent avec « by + date/heure »"
  ],
  mistakes: [
    "Oublier « have » : « I will finished » au lieu de « I will have finished »",
    "Confondre avec le future continuous"
  ],
  irregularVerbs: null,
  examples: [
    {en:"By next year, I will have finished my training.", fr:"D'ici l'année prochaine, j'aurai terminé ma formation.", pron:"baï nèxt yir aï ouil hav finicht maï trèïning"},
    {en:"She will have left by the time you arrive.", fr:"Elle sera partie avant que tu arrives.", pron:"chi ouil hav lèft baï ze taïm you araïv"},
    {en:"We will have completed the project by Friday.", fr:"Nous aurons terminé le projet d'ici vendredi.", pron:"oui ouil hav keumpliitèd ze prodjèkt baï fraïdèï"},
    {en:"Will you have finished by six?", fr:"Auras-tu fini avant six heures ?", pron:"ouil you hav finicht baï siks"},
    {en:"By 2027, I will have saved enough money.", fr:"D'ici 2027, j'aurai économisé assez d'argent.", pron:"baï tou taouzeunnd tuènti-sèveunn aï ouil hav sèïvd inaf meuni"},
    {en:"They won't have arrived by noon.", fr:"Ils ne seront pas arrivés avant midi.", pron:"zèï ouôunnt hav araïvd baï noun"},
    {en:"He will have worked here for ten years next month.", fr:"Il aura travaillé ici depuis dix ans le mois prochain.", pron:"hi ouil hav oueurkt hir for tènn yirz nèxt meunnth"},
    {en:"I will have called you by then.", fr:"Je t'aurai appelé avant ce moment-là.", pron:"aï ouil hav kold you baï zènn"},
    {en:"Will the store have closed by the time we get there?", fr:"Le magasin sera-t-il fermé quand nous arriverons ?", pron:"ouil ze stor hav klôuzd baï ze taïm oui guètt zèr"},
    {en:"By the end of the year, I will have learned a lot.", fr:"D'ici la fin de l'année, j'aurai beaucoup appris.", pron:"baï ze ènnd euv ze yir aï ouil hav leurnd eu lott"}
  ]
},
{
  id: "past-perfect-continuous",
  title: "Past Perfect Continuous",
  subtitle: "Le plus-que-parfait continu",
  explanation: "C'est le temps le plus complexe : il combine le « passé du passé » (past perfect) avec l'insistance sur la durée (continuous). Il décrit une action qui était EN COURS pendant une certaine durée, AVANT un autre moment du passé. Exemple : « I had been working for three hours when the boss arrived » — je travaillais depuis trois heures QUAND le patron est arrivé.",
  formulas: {
    affirmative: "Sujet + had + been + verbe-ing",
    negative: "Sujet + had + not + been + verbe-ing",
    interrogative: "Had + sujet + been + verbe-ing ?"
  },
  usage: [
    "Durée d'une action en cours avant un autre événement passé",
    "Souvent avec « for » et « when »"
  ],
  mistakes: [
    "Oublier « been » : « I had working » au lieu de « I had been working »",
    "Confondre avec le past perfect simple (qui ne montre pas la durée continue)"
  ],
  irregularVerbs: null,
  examples: [
    {en:"I had been working for three hours when the boss arrived.", fr:"Je travaillais depuis trois heures quand le patron est arrivé.", pron:"aï had bin oueurking for thrii aoueurz ouènn ze boss araïvd"},
    {en:"She had been waiting for an hour before the bus came.", fr:"Elle attendait depuis une heure avant que le bus arrive.", pron:"chi had bin uèïting for eunn aoueur bifor ze beuss kèïm"},
    {en:"We had been living there for five years when we moved.", fr:"Nous vivions là depuis cinq ans quand nous avons déménagé.", pron:"oui had bin living zèr for faïv yirz ouènn oui mouvd"},
    {en:"Had you been sleeping when I called?", fr:"Dormais-tu quand j'ai appelé ?", pron:"had you bin sliiping ouènn aï kold"},
    {en:"He was tired because he had been working all night.", fr:"Il était fatigué parce qu'il avait travaillé toute la nuit.", pron:"hi uoz taïeurd bikoz hi had bin oueurking ol naït"},
    {en:"They hadn't been talking for long before the fight started.", fr:"Ils ne parlaient pas depuis longtemps avant que la dispute commence.", pron:"zèï hadeunnt bin toking for long bifor ze faït startèd"},
    {en:"I had been learning English for six months before I moved to Canada.", fr:"J'apprenais l'anglais depuis six mois avant de déménager au Canada.", pron:"aï had bin leurning Innglich for siks meunnths bifor aï mouvd tou Kaneuda"},
    {en:"How long had you been waiting?", fr:"Depuis combien de temps attendais-tu ?", pron:"haou long had you bin uèïting"},
    {en:"She had been feeling sick for days before she saw a doctor.", fr:"Elle se sentait malade depuis des jours avant de voir un médecin.", pron:"chi had bin filing sik for dèïz bifor chi so eu dokteur"},
    {en:"We had been driving for two hours when we stopped.", fr:"Nous conduisions depuis deux heures quand nous nous sommes arrêtés.", pron:"oui had bin draïving for tou aoueurz ouènn oui stoppt"}
  ]
}
];
