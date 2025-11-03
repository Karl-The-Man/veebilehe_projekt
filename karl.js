document.getElementById("startButton").addEventListener("click", () => {
  window.scrollTo({ top: document.querySelector(".gallery").offsetTop - 50, behavior: "smooth" });
});

function openRecipe(page) {
  window.location.href = page;
}

