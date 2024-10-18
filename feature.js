
let addFriendBtn = document.querySelector("#addFriend");
let removeFriendBtn = document.querySelector("#removeFriend");
let isUserFollowing = false; // Boolean values should be used instead of strings for true/false

addFriendBtn.addEventListener("click", function() {
    if (!isUserFollowing) { // Check if the user is not following
        addFriendBtn.innerHTML = "Following";
        console.log("Someone followed you");
        isUserFollowing = true; // Update user status to true
    }
});

removeFriendBtn.addEventListener("click", function() {
    if (isUserFollowing) { // Check if the user is currently following
        addFriendBtn.innerHTML = "Follow";
        isUserFollowing = false; // Update user status to false
    }
});

const feedbackInput = document.querySelector("#card-feedback");
const submitFeedback = document.querySelector("#submitFeedback");
const feedbackDisplay = document.querySelector("#feedbackDisplay");
const hiddenFeedback = document.querySelector("#hiddenFeedback");

submitFeedback.addEventListener("click", function() {
    let userFeedback = feedbackInput.value.trim();
    if (userFeedback) {
        hiddenFeedback.innerHTML = userFeedback;  // Store feedback in hidden div
        feedbackInput.value = "";  // Clear the input area
        alert("Feedback submitted successfully!");
    } else {
        alert("Please enter feedback before submitting!");
    }
});

feedbackDisplay.addEventListener("mouseover", function() {
    if (hiddenFeedback.innerHTML) {
        feedbackDisplay.innerHTML = hiddenFeedback.innerHTML; // Display the feedback on hover
    }
});

feedbackDisplay.addEventListener("mouseout", function() {
    feedbackDisplay.innerHTML = "Hover to see feedback"; // Reset when not hovered
});

