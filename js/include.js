// include.js — carrega automaticamente trechos HTML (header, footer, etc)
async function includeHTML() {
  const includes = document.querySelectorAll("[data-include]");

  // Detecta se a página está na raiz ou em /pages/
  const pathPrefix = window.location.pathname.includes("/pages/") ? "../" : "./";

  for (const el of includes) {
    const file = el.getAttribute("data-include");
    const filePath = file.startsWith(".") || file.startsWith("..") ? file : pathPrefix + file;

    try {
      const resp = await fetch(filePath);
      if (!resp.ok) throw new Error(`Erro ao carregar ${filePath}`);
      el.innerHTML = await resp.text();
    } catch (e) {
      console.error(e);
    }
  }

  if (typeof initNavbar === "function"){
    initNavbar();
  }
}

document.addEventListener("DOMContentLoaded", includeHTML);
