document.getElementById("startButton").addEventListener("click", (e) => {
  createNuclearExplosion(e.target);
  setTimeout(() => {
    window.scrollTo({ top: document.querySelector(".gallery").offsetTop - 50, behavior: "smooth" });
  }, 200);
});

/* Nuclear explosion effect, author Cursor Composer 1*/
function createNuclearExplosion(button) {
  // Get button's parent container (.intro)
  const container = button.closest('.intro');
  if (!container) return;
  
  // Get button position relative to container
  const buttonRect = button.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  const buttonCenterX = buttonRect.left - containerRect.left + buttonRect.width / 2;
  const buttonCenterY = buttonRect.top - containerRect.top + buttonRect.height / 2;
  
  // Add shake effect to body
  document.body.classList.add('exploding');
  setTimeout(() => {
    document.body.classList.remove('exploding');
  }, 500);
  
  // Create flash overlay - covers entire screen, centered on button
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
  
  // Create explosion core - relative to container
  const core = document.createElement('div');
  core.className = 'explosion-core';
  core.style.left = `${buttonCenterX}px`;
  core.style.top = `${buttonCenterY}px`;
  container.appendChild(core);
  setTimeout(() => core.remove(), 1000);
  
  // Create shockwave - relative to container
  const shockwave = document.createElement('div');
  shockwave.className = 'explosion-shockwave';
  shockwave.style.left = `${buttonCenterX}px`;
  shockwave.style.top = `${buttonCenterY}px`;
  container.appendChild(shockwave);
  setTimeout(() => shockwave.remove(), 1200);
  
  // Create particles - nuclear colors, relative to container
  const particleCount = 60;
  const colors = ['#ffffff', '#ffd700', '#ff6600', '#ff3300', '#cc0000', '#ffaa00', '#ffff00'];
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'explosion-particle';
    
    // Random angle and distance - some fast, some slow
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
    
    // Varying sizes - some big chunks, some small sparks
    const size = speed === 'fast' 
      ? 4 + Math.random() * 8 
      : 8 + Math.random() * 15;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    container.appendChild(particle);
    
    // Remove particle after animation
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

