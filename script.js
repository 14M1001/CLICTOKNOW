document.addEventListener('DOMContentLoaded', function() {
  const clickButton = document.getElementById('clickButton');
  const clickCount = document.getElementById('clickCount');
  const messageDiv = document.getElementById('message');
  const encryptedMessage = document.getElementById('encryptedMessage');

  let totalClicks = 0;

  // Fonction pour mettre à jour le compteur côté client
  function updateCounter() {
    totalClicks++;
    clickCount.textContent = totalClicks;
    if (totalClicks >= 1000) {
      messageDiv.style.display = 'block';
      fetch('message.txt')
        .then(response => response.text())
        .then(message => {
          encryptedMessage.textContent = message;
        })
        .catch(error => {
          console.error('Une erreur est survenue : ', error);
        });
    }
  }

  // Écouter le clic sur le bouton
  clickButton.addEventListener('click', function() {
    updateCounter();
  });
});
