 let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('inst').style.display='none'
});
      
function install() {
    if (deferredPrompt) { // Check if deferredPrompt is defined
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(({ outcome }) => {
            if (outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                alert('Installation cancelled 😢');
            }
            deferredPrompt = null;
        });

    } else {
        alert('App already Installed 🤗🎊');
    }
}
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
});

self.addEventListener('fetch', event => {
  // offline logic later
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log('Service Worker registered'));
}