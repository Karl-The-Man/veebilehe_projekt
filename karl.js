const plahvatus = new Audio('helid/plahvatus.mp3');
plahvatus.preload = 'auto'; // Eellaadi helifail
plahvatus.load(); // Sunni laadimist kohe alustama

/* Nupu klõpsamise efekt (autor Karl Elmar Vikat) */
document.getElementById("startButton").addEventListener("click", (e) => {
  createNuclearExplosion(e.target);
  setTimeout(() => {
    window.scrollTo({ top: document.querySelector(".gallery").offsetTop - 50, behavior: "smooth" });
  }, 200);
});

/* Tuumapommi plahvatusefekt (autor Cursor Composer 1)*/
function createNuclearExplosion(button) {
  // Hangi nupu ülemine konteiner (.intro)
  const container = button.closest('.intro');
  if (!container) return;
  
  // Hangi nupu asukoht konteineri suhtes
  const buttonRect = button.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  const buttonCenterX = buttonRect.left - containerRect.left + buttonRect.width / 2;
  const buttonCenterY = buttonRect.top - containerRect.top + buttonRect.height / 2;
  
// Mängi plahvatuse heli
  plahvatus.play();

  // Lisa raputamise efekt
  document.body.classList.add('exploding');
  setTimeout(() => {
    document.body.classList.remove('exploding');
  }, 500);
  
  // Loo välgatus - katab kogu ekraani, tsentreeritud nupule
  const flash = document.createElement('div');
  flash.className = 'explosion-flash';
  const buttonScreenX = buttonRect.left + buttonRect.width / 2;
  const buttonScreenY = buttonRect.top + buttonRect.height / 2;
  const flashXPercent = (buttonScreenX / window.innerWidth) * 100;
  const flashYPercent = (buttonScreenY / window.innerHeight) * 100;
  flash.style.setProperty('--flash-x', `${flashXPercent}%`);
  flash.style.setProperty('--flash-y', `${flashYPercent}%`);
  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 600);
  
  // Loo plahvatuse tuum
  const core = document.createElement('div');
  core.className = 'explosion-core';
  core.style.left = `${buttonCenterX}px`;
  core.style.top = `${buttonCenterY}px`;
  container.appendChild(core);
  setTimeout(() => core.remove(), 1000);
  
  // Loo lööklaine 
  const shockwave = document.createElement('div');
  shockwave.className = 'explosion-shockwave';
  shockwave.style.left = `${buttonCenterX}px`;
  shockwave.style.top = `${buttonCenterY}px`;
  container.appendChild(shockwave);
  setTimeout(() => shockwave.remove(), 1200);
  
  // Plahvatuse osakeste loomine
  const particleCount = 60;
  const colors = ['#ffffff', '#ffd700', '#ff6600', '#ff3300', '#cc0000', '#ffaa00', '#ffff00'];
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'explosion-particle';
    
    // Juhuslik nurk ja kaugus plahvatuse osakestele, mõned kiired, mõned aeglased
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() > 0.5 ? 'fast' : 'slow';
    const distance = speed === 'fast' 
      ? 150 + Math.random() * 200 
      : 100 + Math.random() * 150;
    
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    
    particle.classList.add(speed);
    particle.style.setProperty('--x', `${x}px`);
    particle.style.setProperty('--y', `${y}px`);
    particle.style.left = `${buttonCenterX}px`;
    particle.style.top = `${buttonCenterY}px`;
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Erinevad suurused plahvatuse tükkidele,mõned suured tükid, mõned väikesed sädemed
    const size = speed === 'fast' 
      ? 4 + Math.random() * 8 
      : 8 + Math.random() * 15;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    container.appendChild(particle);
    
    // Eemalda osakesed pärast animatsiooni
    setTimeout(() => {
      if (particle.parentNode) {
        particle.remove();
      }
    }, speed === 'fast' ? 800 : 1500);
  }
}

function openRecipe(page) {
  window.location.href = page;
}

/* Salajane fakti nupp (autor Karl Elmar Vikat) */
const faktid = [
  "Kas teadsid, et kui pasta oleks religioon, oleks parmesan selle püha vesi?",
  "Šokolaad ei küsi kunagi, kuidas su päev läks, ta lihtsalt parandab selle.",
  "Kokad ütlevad, et “maitsesta maitse järgi”, tõlge: pane soola, kuni su süda rahul on.",
  "Makaronid on lihtsalt pastad, kes ei viitsinud moodsat nime võtta.",
  "Kui sul on külm, söö pastat. Kui sul on kurb, söö pastat. Kui kõik on hästi, söö ikkagi pastat.",
  "Iga pitsa on ümmargune tõestus, et elu võib tõesti imeline olla.",
  "Juust on ametlik põhjus, miks taimetoitlased öösel mõtlevad: “Äkki homme alustan uuesti…”",
  "Kokad ei tee vigu – nad leiutavad “uut retsepti”.",
  "Jäätis on sotsiaalselt aktsepteeritud viis süüa külmutatud suhkrut ega tunda end süüdi.",
  "Kõige ohtlikum köögiriist on näljas inimene – ta sööb su snäkid ära enne, kui toit valmis saab."
];

const factButton = document.getElementById("factButton");
const factDisplay = document.getElementById("factDisplay");

factButton.addEventListener("click", () => {
  // Vali juhuslik fakt massiivist - Math.random() annab 0-1 vahelise arvu, korrutame faktide arvuga ja ümardame alla
  const juhuslikFakt = faktid[Math.floor(Math.random() * faktid.length)];
  // Aseta valitud fakt ekraanile näitamiseks
  factDisplay.textContent = juhuslikFakt;
  // Tee fakt nähtavaks (alguses on see peidetud)
  factDisplay.style.display = "block";
  
  // Keri leht alla, et fakt oleks nähtav
  factDisplay.scrollIntoView({ behavior: 'smooth', block: 'center' });
  
  // Peida fakt mõne sekundi pärast
  setTimeout(() => {
    factDisplay.style.display = "none";
  }, 7000);
});
