function checkMaintenance() {
    fetch("https://raw.githubusercontent.com/codewithsharu/mentinence/main/perfume.txt")
        .then(response => response.text())
        .then(status => {
            console.log("Status value:", status.trim());
            if (status.trim() === "on") {
                // Site is active, continue normally
                return;
            } else {
                window.location.href = "https://codewithsharu.github.io/mentinence/";
            }
        })
        .catch(error => {
            console.error("Error checking redirect status:", error);
            // Redirect on error to be safe
            window.location.href = "https://codewithsharu.github.io/mentinence/";
        });
}

// Run check when script loads
checkMaintenance();