document.addEventListener("DOMContentLoaded", () => {
    // Get the required DOM elements
    const logDiv = document.getElementById("log");
    const stateDiv = document.getElementById("state");
    const startBtn = document.querySelector(".start-btn"); // Use querySelector to select by class
    const stopBtn = document.querySelector(".stop-btn");   // Use querySelector to select by class

    // Check if the required elements exist before proceeding
    if (!startBtn || !stopBtn || !logDiv || !stateDiv) {
        console.error("One or more required elements are missing from the DOM.");
        return; // Stop the script execution if elements are missing
    }

    // Add event listener to the Start button
    startBtn.addEventListener("click", () => {
        // Start logging keypresses by adding event listeners for keydown and keyup
        document.addEventListener("keydown", handleDown);
        document.addEventListener("keyup", handleUp);
        
        // Disable the Start button and enable the Stop button (optional)
        startBtn.disabled = true;
        stopBtn.disabled = false;
    });

    // Add event listener to the Stop button
    stopBtn.addEventListener("click", () => {
        // Stop logging keypresses by removing event listeners for keydown and keyup
        document.removeEventListener("keydown", handleDown);
        document.removeEventListener("keyup", handleUp);

        // Clear the log and state when stopping the logging
        logDiv.textContent = "";
        stateDiv.textContent = " ";

        // Enable the Start button and disable the Stop button (optional)
        startBtn.disabled = false;
        stopBtn.disabled = true;
    });

    // Event handler for when a key is pressed down
    function handleDown(e) {
        logDiv.textContent = `Key ${e.key} pressed down`;
        stateDiv.textContent = `Key is down`;
    }

    // Event handler for when a key is released
    function handleUp(e) {
        logDiv.textContent = `Key ${e.key} pressed up`;
        stateDiv.textContent = `Key is up`;
    }
});
