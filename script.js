document.addEventListener("DOMContentLoaded", function() {
    const webhookURL = "https://discord.com/api/webhooks/1113809085880598528/nOgWA7OXGcA67cAoY71A8Fg6Ikj3OPJll1kN6ORyL0iYQoYGQJEX6TN05kZd1DE41p_C"; // Replace with your Discord webhook URL
  
    const pasteButton = document.getElementById("paste-button");
    pasteButton.addEventListener("click", function() {
      const usernameInput = document.getElementById("username-input");
      const pasteInput = document.getElementById("paste-input");
      const username = usernameInput.value;
      const pasteText = pasteInput.value;
  
      if (pasteText && username) {
        sendToWebhook(username, pasteText);
        usernameInput.value = "";
        pasteInput.value = "";
        pasteButton.disabled = true; // Disable the button
      }
    });
  
    function sendToWebhook(username, content) {
      const data = {
        username: username,
        content: content
      };
  
      fetch(webhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        console.log("Message sent to Discord webhook.");
      })
      .catch(error => {
        console.error("Error sending message to Discord webhook:", error);
      });
    }
  });
  