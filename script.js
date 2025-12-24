document.addEventListener("DOMContentLoaded", () => {
  const now = new Date()
  const day = now.getDate()
  const month = now.toLocaleString("pt-BR", { month: "long" })
  const year = now.getFullYear()
  const noteDate = document.querySelector(".note-date")
  if (noteDate) noteDate.textContent = `${day} de ${month} de ${year}`
})

function openEnvelope() {
  document.querySelector(".flap").style.transform = "rotateX(0deg)"
  setTimeout(() => {
    document.querySelector(".envelope-wrapper").style.display = "none"
    document.getElementById("letter").style.display = "block"
  }, 800)
}

/* Funções do presente/modal */
function openGift() {
  const modal = document.getElementById("gift-modal")
  if (!modal) return
  modal.setAttribute("aria-hidden", "false")
  modal.classList.add("open")
  // garantir que a imagem tenha a classe de animação quando o modal abrir
  const img = modal.querySelector(".gift-image")
  if (img) img.classList.add("float")
}

function closeGift() {
  const modal = document.getElementById("gift-modal")
  if (!modal) return
  modal.setAttribute("aria-hidden", "true")
  modal.classList.remove("open")
  // remover classe de animação quando fechar
  const img = modal.querySelector(".gift-image")
  if (img) img.classList.remove("float")
}

// fechar ao clicar no overlay ou no botão
document.addEventListener("click", (e) => {
  const modal = document.getElementById("gift-modal")
  if (!modal) return
  if (e.target.classList.contains("modal-close")) closeGift()
  if (e.target === modal) closeGift()
})

// Esc para fechar
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeGift()
})
