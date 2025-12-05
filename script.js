document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("check-btn").addEventListener("click", function () {
    const userInput = document.getElementById("user-input").value.trim();
    const resultsDiv = document.getElementById("results-div");

    if (!userInput) {
      alert("Please provide a phone number");
      return;
    }

    const validRegex = /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

    if (validRegex.test(userInput)) {
      resultsDiv.textContent = `Valid US number: ${userInput}`;
    } else {
      resultsDiv.textContent = `Invalid US number: ${userInput}`;
    }
  });

  document.getElementById("clear-btn").addEventListener("click", function () {
    document.getElementById("results-div").textContent = "";
  });
});
