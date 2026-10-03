const menu = document.querySelector("#menu");
const nav = document.querySelector("#navigation");
menu.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  nav.classList.toggle("open", open);
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-label", "Abrir menu");
  }),
);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-label", "Abrir menu");
  }
});
document.querySelectorAll(".wa").forEach((a) => {
  const msg = a.dataset.service
    ? `Olá, Ranieri! Gostaria de conversar sobre uma ${a.dataset.service}. Meu imóvel fica em: `
    : "Olá, Ranieri! Conheci a RS CONSTRUÇÕES E REFORMAS pelo site e gostaria de conversar sobre uma obra. Pode me orientar?";
  a.href = "https://wa.me/5521980322415?text=" + encodeURIComponent(msg);
  a.target = "_blank";
  a.rel = "noopener";
});
if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  document.body.classList.add("js-motion");
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.08 },
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}
document.querySelector("#year").textContent = new Date().getFullYear();
const dialog = document.querySelector("#privacy");
document
  .querySelector("#privacy-open")
  .addEventListener("click", () => dialog.showModal());
document
  .querySelector("#privacy-close")
  .addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    )
      dialog.close();
  }
});

const quoteDialog = document.querySelector("#quote-dialog");
document
  .querySelectorAll(".quote-trigger")
  .forEach((button) =>
    button.addEventListener("click", () => quoteDialog.showModal()),
  );
document
  .querySelector("#quote-close")
  .addEventListener("click", () => quoteDialog.close());
quoteDialog.addEventListener("click", (event) => {
  if (event.target === quoteDialog) {
    const r = quoteDialog.getBoundingClientRect();
    if (
      event.clientX < r.left ||
      event.clientX > r.right ||
      event.clientY < r.top ||
      event.clientY > r.bottom
    )
      quoteDialog.close();
  }
});
function makeQuoteURL(service, location, details) {
  const lines = [
    "Olá, Ranieri! Conheci a RS CONSTRUÇÕES E REFORMAS pelo site e gostaria de solicitar um orçamento.",
    "",
    "Tipo de serviço: " + service,
  ];
  if (location.trim()) lines.push("Local da obra: " + location.trim());
  if (details.trim()) lines.push("O que preciso: " + details.trim());
  lines.push(
    "",
    "Pode me orientar sobre os próximos passos e as informações necessárias para avaliar o serviço?",
  );
  return (
    "https://wa.me/5521980322415?text=" + encodeURIComponent(lines.join("\n"))
  );
}
document.querySelector("#quote-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  window.location.assign(
    makeQuoteURL(
      String(data.get("service") || ""),
      String(data.get("location") || ""),
      String(data.get("details") || ""),
    ),
  );
});
