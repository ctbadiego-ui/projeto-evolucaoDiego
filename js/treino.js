const PLANO_TREINO = {
  Segunda: {
    titulo: 'Parte Superior',
    exercicios: ['Supino Reto', 'Puxada Frontal', 'Desenvolvimento', 'Rosca Direta', 'Tríceps Corda']
  },
  Terca: {
    titulo: 'Parte Inferior',
    exercicios: ['Hack Squat', 'Leg Press', 'Cadeira Extensora', 'Mesa Flexora', 'Gêmeos em Pé (Panturrilha)']
  },
  Quarta: {
    titulo: 'Cardio',
    exercicios: ['Esteira 5km', 'Caminhada Inclinada (15 min)', 'Abdominais']
  },
  Quinta: {
    titulo: 'Superior + Abdômen',
    exercicios: ['Supino Inclinado', 'Remada Curvada', 'Elevação Lateral', 'Prancha Abdominal']
  },
  Sexta: {
    titulo: 'Inferior + Bicicleta',
    exercicios: ['Agachamento Livre', 'Stiff', 'Leg Press', 'Bicicleta Ergométrica (20 min)']
  }
};

function renderTreino(diaSelected) {
  const container = document.getElementById('exercises-list');
  const title = document.getElementById('treino-titulo');
  container.innerHTML = '';

  const plano = PLANO_TREINO[diaSelected] || { titulo: 'Descanso', exercicios: [] };
  title.innerText = plano.titulo;

  const today = getTodayString();
  const status = getStorageData(STORAGE_KEYS.TREINO_STATUS, {});
  const statusHoje = status[today] || {};

  plano.exercicios.forEach((ex, idx) => {
    const itemKey = `${diaSelected}_${idx}`;
    const checked = statusHoje[itemKey] ? 'checked' : '';

    const div = document.createElement('div');
    div.className = 'check-item';
    div.innerHTML = `
      <input type="checkbox" id="ex_${idx}" ${checked} onchange="toggleTreinoEx('${itemKey}', this.checked)">
      <label for="ex_${idx}">${ex}</label>
    `;
    container.appendChild(div);
  });
}

function toggleTreinoEx(key, isChecked) {
  const today = getTodayString();
  const status = getStorageData(STORAGE_KEYS.TREINO_STATUS, {});
  if (!status[today]) status[today] = {};
  status[today][key] = isChecked;
  setStorageData(STORAGE_KEYS.TREINO_STATUS, status);
}
