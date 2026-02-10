* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  background: radial-gradient(circle at top, #0f2a44, #071523);
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  color: white;
  font-size: 32px;
  margin-bottom: 24px;
}

.title span {
  color: #9CFF7A;
}

.card {
  background: white;
  padding: 24px 20px 32px;
  border-radius: 18px;
  width: 92%;
  max-width: 340px;
  text-align: center;
  position: relative;
}

.gif {
  width: 200px;
  max-width: 100%;
  border-radius: 14px;
}

.question {
  font-size: 20px;
  margin: 18px 0 22px;
  font-weight: 600;
}

/* ===== BUTTON AREA ===== */
.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  position: relative;
  height: 60px;
}

.btn {
  padding: 14px 24px;
  border-radius: 50px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: transform 0.25s ease;
  touch-action: manipulation;
}

.yes {
  background: #ff5c8d;
  color: white;
  box-shadow: 0 6px 18px rgba(255,92,141,.45);
}

.yes:active {
  transform: scale(0.96);
}

.no {
  background: #bdbdbd;
  color: white;
  position: relative; /* penting: biar sejajar dulu */
}
