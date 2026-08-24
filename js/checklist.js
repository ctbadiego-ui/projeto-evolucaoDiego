const HÁBITOS_LIST = [
  'Acordei no horário',
  'Treino realizado',
  'Cardio realizado',
  'Bati minha meta de proteína',
  'Bebi água suficiente',
  'Segui a alimentação',
  'Registrei peso e medidas'
];

function renderChecklist() {
  const container = document.getElementById('checklist-items');
  container.innerHTML = '';

  const today = getTodayString();
  const data = getStorageData(STORAGE_KEYS.CHECKLIST_HOJE, {});
  const hojeStatus = data[today] || {};

  HÁBITOS_LIST.forEach((habito, idx) => {
    const isChecked = hojeStatus[idx] ? 'checked' : '';
    const div = document.createElement('div');
    div.className = 'check-item';
    div.innerHTML = `
      <input type="checkbox" id="chk_${idx}" ${isChecked} onchange="toggleChecklist(${idx}, this.checked)">
      <label for="chk_${idx}">${habito}</label>
    `;
    container.appendChild(div);
  });
}

function toggleChecklist(idx, isChecked) {
  const today = getTodayString();
  const data = getStorageData(STORAGE_KEYS.CHECKLIST_HOJE, {});
  if (!data[today]) data[today] = {};
  data[today][idx] = isChecked;
  setStorageData(STORAGE_KEYS.CHECKLIST_HOJE, data);
}
