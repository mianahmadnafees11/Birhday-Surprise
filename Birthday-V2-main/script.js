document.addEventListener('DOMContentLoaded', () => {
  // --- Steps ---
  const step0 = document.getElementById('step0');
  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  const step3 = document.getElementById('step3');
  const step4 = document.getElementById('step4');
  const step5 = document.getElementById('step5');

const countdownOverlay = document.getElementById('countdownOverlay');
const countdownTimer = document.getElementById('countdownTimer');

  // --- Music ---
  const musicBtn = document.getElementById('musicBtn');
  const bgMusic = document.getElementById('bgMusic');

  musicBtn.addEventListener('click', () => {
    // Play music
    bgMusic.play();
    musicBtn.textContent = "🔇 Pause Music";

    // Hide Step 0, show Step 1
    step0.classList.remove('active');
    step1.classList.add('active');
  });

  // --- Envelope Step 1 ---
  const envelopeContainer = document.getElementById('envelopeContainer');
  envelopeContainer.addEventListener('click', () => {
    envelopeContainer.classList.add('open');
    setTimeout(() => {
      step1.classList.remove('active');
      step2.classList.add('active');

      // Show letter after a tiny delay
      const letterContainer = document.getElementById('letterContainer');
      setTimeout(() => letterContainer.classList.add('show'), 100);
    }, 700); // Wait for flap animation
  });

  // --- Step 2 → Step 3 (Final Card) ---
  const unfoldButton = document.getElementById('unfold-button');
  unfoldButton.addEventListener('click', () => {
    step2.classList.remove('active');
    step3.classList.add('active');
    startFinalAnimations();
  });

  function startFinalAnimations() {
    // Typewriter greeting
    const greetingTextElement = document.getElementById('greetingText');
    const greeting = "Happy Birthday,";
    let i = 0;
    greetingTextElement.innerHTML = '';
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    greetingTextElement.appendChild(cursor);

    const typing = setInterval(() => {
      if (i < greeting.length) {
        greetingTextElement.insertBefore(document.createTextNode(greeting.charAt(i)), cursor);
        i++;
      } else {
        clearInterval(typing);
        cursor.style.display = 'none';
      }
    }, 100);

    // Balloons
    createBalloons(15);
  }

  function createBalloons(count) {
    const colors = ['#e94560', '#f0e68c', '#00d8d6', '#8e44ad', '#3498db'];
    for (let i = 0; i < count; i++) {
      const balloon = document.createElement('div');
      balloon.className = 'balloon';
      balloon.style.left = `${Math.random() * 100}%`;
      balloon.style.animationDuration = `${Math.random() * 6 + 8}s`;
      balloon.style.animationDelay = `${Math.random() * 5}s`;
      balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      step3.appendChild(balloon); // attach only to Step 3
    }
  }

  // --- Step 3 → Step 4 (Wishes) ---
  const toWishesBtn = document.getElementById('toWishesBtn');
  toWishesBtn.addEventListener('click', () => {
    step3.classList.remove('active');
    step4.classList.add('active');

    // Remove balloons when leaving Step 3
    step3.querySelectorAll('.balloon').forEach(b => b.remove());
  });

  // --- Step 4 → Step 5 (Memories) ---
  const toMemoriesBtn = document.getElementById('toMemoriesBtn');
  if (toMemoriesBtn) {
    toMemoriesBtn.addEventListener('click', () => {
      step4.classList.remove('active');
      step5.classList.add('active');
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
