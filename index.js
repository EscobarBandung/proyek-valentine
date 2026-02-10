const noBtn = document.getElementById("noBtn");
const card = document.querySelector(".card");

/* fungsi pindahin tombol */
function moveNoButton() {
  const cardRect = card.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = cardRect.width - btnRect.width - 16;
  const maxY = cardRect.height - btnRect.height - 16;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

/* MOBILE FIRST */
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();   // 🔥 penting
  moveNoButton();
});

/* DESKTOP */
noBtn.addEventListener("mouseenter", moveNoButton);

function yesClick() {
  alert("YEAY 💖 Aku tau kamu pasti pilih YES 🤍");
}
