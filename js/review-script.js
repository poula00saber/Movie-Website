// Sample comments with avatars (using placeholder images)
const randomComments = [
  {
    name: "Harry Potter",
    comment: "Excpecto Patronum.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Ron Weasley",
    comment: "This film made me eat a lot.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Hermione Granger",
    comment: "It's not Liviosa, it's Levio-sa!",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Albus Dumbledore",
    comment: "Happiness can be found even in the darkest of times.",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
];

// DOM Elements
const reviewsContainer = document.getElementById("reviews-container");
const openFormBtn = document.getElementById("open-form-btn");
const reviewForm = document.getElementById("review-form");
const cancelBtn = document.getElementById("cancel-btn");

// Load comments on page load
document.addEventListener("DOMContentLoaded", () => {
  randomComments.forEach((review) => {
    addReviewToPage(review.name, review.comment, review.avatar);
  });
});

// Open/close form (same as before)
openFormBtn.addEventListener("click", () => {
  reviewForm.classList.remove("hidden");
  openFormBtn.classList.add("hidden");
});

cancelBtn.addEventListener("click", () => {
  reviewForm.classList.add("hidden");
  openFormBtn.classList.remove("hidden");
  reviewForm.reset();
});

// Submit new review (now with a default avatar)
reviewForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;
  const randomAvatar = `https://i.pravatar.cc/150?img=${Math.floor(
    Math.random() * 70
  )}`;

  if (name && comment) {
    addReviewToPage(name, comment, randomAvatar);
    reviewForm.reset();
    reviewForm.classList.add("hidden");
    openFormBtn.classList.remove("hidden");
  }
});

// Helper: Add a review to the page (with avatar)
function addReviewToPage(name, comment, avatar) {
  const reviewElement = document.createElement("div");
  reviewElement.classList.add("review");
  reviewElement.innerHTML = `
    <img src="${avatar}" alt="${name}" class="review-avatar">
    <div class="review-content">
      <h3>${name}</h3>
      <p>${comment}</p>
    </div>
  `;
  reviewsContainer.prepend(reviewElement);
}
