const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event handler for the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default behavior of the event
  event.preventDefault();
  // Store the `beforeinstallprompt` event for later use
  const installPromptEvent = event;
  
  // Event handler for the install button click
  butInstall.addEventListener('click', async () => {
    // Show the installation prompt using the stored event
    installPromptEvent.prompt();
    // Wait for the user to respond to the prompt
    const choiceResult = await installPromptEvent.userChoice;
    
    // Handle user choice (choiceResult.outcome can be 'accepted' or 'dismissed')
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the installation prompt');
    } else {
      console.log('User dismissed the installation prompt');
    }
  });
});

// Event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('App was installed.', event);
});