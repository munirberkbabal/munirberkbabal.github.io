function goToApp() {
  const select = document.getElementById('app-select');
  const selectedApp = select.value;
  if (selectedApp) {
    window.location.href = selectedApp;
  }
}
