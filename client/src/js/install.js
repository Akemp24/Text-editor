const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the default behavior of the event
  event.preventDefault();

  // Store the triggered events
  window.deferredPrompt = event;

  // Remove the hidden class from the button.
  butInstall.classList.toggle("hidden", false);
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  // Retrieve the stored prompt event
  const promptEvent = window.deferredPrompt;

  // Check if the prompt event exists
  if (!promptEvent) {
    return;
  }

  // Show prompt
  promptEvent.prompt();

  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;

  // Hide the installation button
  butInstall.classList.toggle("hidden", true);
});

// Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  // Clear prompt
  window.deferredPrompt = null;
});


// Event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('App was installed.', event);
});