const treinosCadastrados = {
  Segunda: {
    nome: "TREINO 1 - Peito, Costas, Ombros, Tríceps e Abdômen",
    exercicios: [
      { id: "ex_supino_inc", nome: "Supino inclinado com halteres", series: "5 séries", reps: "15, 12, 8, 8, 8 reps", cargaPadrao: "18", descanso: "45s", calEstimada: 50 },
      { id: "ex_remada_fec", nome: "Remada fechada", series: "5 séries", reps: "15, 12, 8, 8, 8 reps", cargaPadrao: "40", descanso: "45s", calEstimada: 50 },
      { id: "ex_supino_maq", nome: "Supino máquina", series: "3 séries", reps: "8, 8, 8 reps", cargaPadrao: "70", descanso: "45s", calEstimada: 35 },
      { id: "ex_elev_lat", nome: "Elevação lateral", series: "3 séries", reps: "8, 8, 8 reps", cargaPadrao: "20", descanso: "45s", calEstimada: 30 },
      { id: "ex_triceps_fra", nome: "Tríceps francês", series: "3 séries", reps: "8, 8, 8 reps", cargaPadrao: "24", descanso: "45s", calEstimada: 30 },
      { id: "ex_abd_supra", nome: "Abdominal supra banco declinado", series: "3 séries", reps: "10, 10, 10 reps", cargaPadrao: "10", descanso: "45s", calEstimada: 25 }
    ]
  },
  Terca: {
    nome: "TREINO 2 - Perna e Inferiores",
    exercicios: [{ id: "ex_terca_1", nome: "Treino em breve", series: "-", reps: "-", cargaPadrao: "0", descanso: "-", calEstimada: 0 }]
  },
  Quarta: {
    nome: "TREINO 3 - Cardio",
    exercicios: [
      { id: "ex_esteira", nome: "Esteira Intervalado", series: "Aeróbico", reps: "2' Caminhada / 3' Corrida", cargaPadrao: "0", tempoPadrao: "35", descanso: "1s", isCardioTempo: true, calPorMinuto: 8 },
      { id: "ex_eliptico", nome: "Elíptico", series: "Aeróbico", reps: "Ritmo constante", cargaPadrao: "0", tempoPadrao: "10", descanso: "1s", isCardioTempo: true, calPorMinuto: 7 }
    ]
  },
  Quinta: {
    nome: "TREINO 4 - Superior, Ombros e Abdômen",
    exercicios: [
      { id: "ex_puxada_fre", nome: "Puxada frente na máquina", series: "5 séries", reps: "15, 12, 8-12, 8-12, 8-12", cargaPadrao: "0", descanso: "45s", calEstimada: 45 },
      { id: "ex_supino_inc_q", nome: "Supino inclinado", series: "5 séries", reps: "15, 12, 8-12, 8-12, 8-12", cargaPadrao: "0", descanso: "45s", calEstimada: 45 },
      { id: "ex_remada_abe", nome: "Remada aberta (pronada)", series: "3 séries", reps: "8-12, 8-12, 8-12", cargaPadrao: "0", descanso: "45s", calEstimada: 35 },
      { id: "ex_encolhimento", nome: "Encolhimento com halteres", series: "3 séries", reps: "8-12, 8-12, 8-12", cargaPadrao: "0", descanso: "45s", calEstimada: 30 },
      { id: "ex_rosca_banco", nome: "Rosca com halteres no banco inclinado", series: "3 séries", reps: "8-12, 8-12, 8-12", cargaPadrao: "0", descanso: "45s", calEstimada: 30 },
      { id: "ex_abd_infra", nome: "Abdominal infra solo (completo)", series: "3 séries", reps: "10-15, 10-15, 10-15", cargaPadrao: "0", descanso: "45s", calEstimada: 25 }
    ]
  },
  Sexta: {
    nome: "TREINO 5 - Pernas, Glúteos e Cardio Bike",
    exercicios: [
      { id: "ex_stiff", nome: "Stiff com barra", series: "5 séries", reps: "15, 12, 8-12, 8-12, 8-12", cargaPadrao: "0", descanso: "45s", calEstimada: 50 },
      { id: "ex_leg_press", nome: "Leg press", series: "5 séries", reps: "15, 12, 8-12, 8-12, 8-12", cargaPadrao: "0", descanso: "45s", calEstimada: 55 },
      { id: "ex_flexor", nome: "Flexor", series: "3 séries", reps: "8-12, 8-12, 8-12", cargaPadrao: "0", descanso: "45s", calEstimada: 35 },
      { id: "ex_adutor", nome: "Adutor (com 10\" Isometria)", series: "3 séries", reps: "8-12 + 10\" iso", cargaPadrao: "0", descanso: "45s", calEstimada: 30 },
      { id: "ex_pantu_leg", nome: "Panturrilha leg press", series: "4 séries", reps: "10-15, 10-15, 10-15, 10-15", cargaPadrao: "0", descanso: "45s", calEstimada: 30 },
      { id: "ex_bike", nome: "Intervalado na Bike (Sugestão)", series: "3-4x", reps: "2' Sentado / 1' Em pé", cargaPadrao: "0", tempoPadrao: "15", descanso: "60s", isCardioTempo: true, calPorMinuto: 8 }
    ]
  }
};

function renderTreino(dia) {
  const container = document.getElementById('exercises-list');
  const tituloEl = document.getElementById('treino-titulo');
  if (!container) return;

  const treino = treinosCadastrados[dia] || treinosCadastrados['Segunda'];
  if (tituloEl) tituloEl.textContent = treino.nome;

  let concluidos = JSON.parse(localStorage.getItem('user_treinos_concluidos') || '[]');

  let html = '';
  treino.exercicios.forEach((ex, index) => {
    const isChecked = concluidos.includes(ex.id) ? 'checked' : '';
    
    let caloriasAtual = ex.calEstimada || 0;
    let controleInput = '';

    if (ex.isCardioTempo) {
      const tempoSalvo = localStorage.getItem('tempo_' + ex.id) || ex.tempoPadrao;
      caloriasAtual = Math.round(parseInt(tempoSalvo) * ex.calPorMinuto);
      
      controleInput = `
        <div style="display: flex; align-items: center; gap: 4px;">
          <label style="font-size: 0.8rem; color: #94a3b8;">⏱️ Tempo (min):</label>
          <input type="number" value="${tempoSalvo}" 
                 onchange="salvarTempo('${ex.id}', this.value, '${dia}')"
                 style="width: 65px; padding: 4px 6px; background: #1e293b; border: 1px solid #475569; color: #38bdf8; font-weight: bold; border-radius: 4px; text-align: center;">
        </div>
      `;
    } else {
      const cargaSalva = localStorage.getItem('carga_' + ex.id) || ex.cargaPadrao;
      controleInput = `
        <div style="display: flex; align-items: center; gap: 4px;">
          <label style="font-size: 0.8rem; color: #94a3b8;">🏋️ Carga (Kg):</label>
          <input type="number" step="0.5" value="${cargaSalva}" 
                 onchange="salvarCarga('${ex.id}', this.value)"
                 style="width: 65px; padding: 4px 6px; background: #1e293b; border: 1px solid #475569; color: #38bdf8; font-weight: bold; border-radius: 4px; text-align: center;">
        </div>
      `;
    }

    localStorage.setItem('cal_' + ex.id, caloriasAtual);

    html += `
      <div class="card" style="margin-bottom: 12px; background: #0f172a; border: 1px solid #334155; padding: 12px; border-radius: 8px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <input type="checkbox" ${isChecked} onchange="toggleConcluido('${ex.id}', this.checked)" style="width: 18px; height: 18px; cursor: pointer;">
            <strong style="color: #38bdf8; font-size: 0.95rem;">${index + 1}. ${ex.nome}</strong>
          </div>
          <span style="font-size: 0.75rem; background: #334155; padding: 2px 8px; border-radius: 4px; color: #94a3b8;">⏱️ ${ex.descanso}</span>
        </div>

        <div style="font-size: 0.8rem; color: #f43f5e; margin-bottom: 8px; font-weight: 500;">
          🔥 Gasto Estimado: <strong>${caloriasAtual} kcal</strong>
        </div>
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <span style="font-size: 0.85rem; color: #f8fafc;">🔁 <strong>${ex.series}</strong></span>
          ${controleInput}
        </div>
        <div style="font-size: 0.8rem; color: #94a3b8;">Repetições / Instrução: ${ex.reps}</div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function salvarTempo(exercicioId, minutos, dia) {
  localStorage.setItem('tempo_' + exercicioId, minutos);
  renderTreino(dia);
}

function salvarCarga(exercicioId, valor) {
  localStorage.setItem('carga_' + exercicioId, valor);
}

function toggleConcluido(exercicioId, status) {
  let concluidos = JSON.parse(localStorage.getItem('user_treinos_concluidos') || '[]');
  if (status) {
    if (!concluidos.includes(exercicioId)) concluidos.push(exercicioId);
  } else {
    concluidos = concluidos.filter(id => id !== exercicioId);
  }
  localStorage.setItem('user_treinos_concluidos', JSON.stringify(concluidos));
}

document.addEventListener('DOMContentLoaded', () => { renderTreino('Segunda'); });
