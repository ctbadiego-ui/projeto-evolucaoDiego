function renderHistorico() {
  const tbody = document.getElementById('historico-tbody');
  tbody.innerHTML = '';

  const registros = getStorageData(STORAGE_KEYS.REGISTROS, {});
  const datas = Object.keys(registros).sort().reverse();

  if (datas.length === 0) {
    tbody.innerHTML = '<tr><td colspan="4" style="text-align:center; color:#94a3b8;">Nenhum registro ainda.</td></tr>';
    return;
  }

  datas.forEach(dateStr => {
    const r = registros[dateStr];
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${dateStr}</td>
      <td>${r.peso ? r.peso + ' kg' : '--'}</td>
      <td>${r.cintura ? r.cintura + ' cm' : '--'}</td>
      <td>${r.panturrilha ? r.panturrilha + ' cm' : '--'}</td>
    `;
    tbody.appendChild(tr);
  });
}
