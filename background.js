let timer = null; // guarda o setInterval
const INTERVALO_MS = 20_000; // 20 s
let abas = []; // IDs das abas que vamos alternar
let indiceAtual = 0;

chrome.action.onClicked.addListener(async () => {
  if (timer) { // se já está rodando, parar
    clearInterval(timer);
    timer = null;
    chrome.action.setBadgeText({ text: "" });
    return;
  }

  // Captura as duas primeiras abas da janela ativa
  const tabs = await chrome.tabs.query({ currentWindow: true });
  if (tabs.length < 2) {
    alert("Abra pelo menos duas abas antes de ativar a extensão.");
    return;
  }
  abas = [tabs[0].id, tabs[1].id];
  indiceAtual = 0;

  // Liga o loop
  chrome.action.setBadgeText({ text: "ON" });
  timer = setInterval(() => {
    indiceAtual ^= 1; // alterna 0/1 
    chrome.tabs.update(abas[indiceAtual], { active: true });
  }, INTERVALO_MS);
}); 