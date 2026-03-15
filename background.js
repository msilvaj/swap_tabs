let abas = [];
let indiceAtual = 0;

const INTERVALO_MIN = 0.33; // ~20s

chrome.action.onClicked.addListener(async () => {

  const alarm = await chrome.alarms.get("rotator");

  // se já estiver rodando -> parar
  if (alarm) {
    chrome.alarms.clear("rotator");
    chrome.action.setBadgeText({ text: "" });
    return;
  }

  const tabs = await chrome.tabs.query({ currentWindow: true });

  if (tabs.length < 2) {
    return;
  }

  abas = [tabs[0].id, tabs[1].id];
  indiceAtual = 0;

  chrome.action.setBadgeText({ text: "ON" });

  chrome.alarms.create("rotator", {
    periodInMinutes: INTERVALO_MIN
  });

});

chrome.alarms.onAlarm.addListener(() => {

  if (abas.length < 2) return;

  indiceAtual ^= 1;

  chrome.tabs.update(abas[indiceAtual], { active: true });

});
