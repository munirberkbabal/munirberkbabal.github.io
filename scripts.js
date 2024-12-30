// Alt menüyü açıp kapatmak için
const mobileAppsBtn = document.getElementById('mobile-apps-btn');
const mobileAppsMenu = document.getElementById('mobile-apps-menu');

mobileAppsBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Sayfanın yenilenmesini engelle
  mobileAppsMenu.style.display = mobileAppsMenu.style.display === 'block' ? 'none' : 'block';
});

// Sayfanın herhangi bir yerine tıklandığında menüyü kapat
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    mobileAppsMenu.style.display = 'none';
  }
});
