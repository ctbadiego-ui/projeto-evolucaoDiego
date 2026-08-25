// ==========================================
// DADOS DOS TREINOS (TREINO 1 AO TREINO 5)
// ==========================================
const treinosDados = {
  Segunda: {
    titulo: "TREINO 1 - Peito, Costas, Ombro e Tríceps",
    exercicios: [
      { id: "t1_sup_inc", nome: "Supino inclinado com halteres", series: "5 séries", reps: "15, 12, 8, 8, 8 reps", cargaPadrao: 18 },
      { id: "t1_rem_fec", nome: "Remada fechada", series: "5 séries", reps: "15, 12, 8, 8, 8 reps", cargaPadrao: 40 },
      { id: "t1_sup_maq", nome: "Supino máquina", series: "3 séries", reps: "8 reps", cargaPadrao: 70 },
      { id: "t1_ele_lat", nome: "Elevação lateral", series: "3 séries", reps: "8 reps", cargaPadrao: 20 },
      { id: "t1_tri_fra", nome: "Tríceps francês", series: "3 séries", reps: "8 reps", cargaPadrao: 24 },
      { id: "t1_abd_sup", nome: "Abdominal supra banco declinado", series: "3 séries", reps: "10 reps", cargaPadrao: 10 }
    ]
  },
  Terca: {
    titulo: "TREINO 2 - Pernas (Foco Quadríceps e Posteriores)",
    exercicios: [
      { id: "t2_aga_smi", nome: "Agachamento Smith (2 aquec.)", series: "5 séries", reps: "15, 12, 8-12, 8-12, 8-12 reps", cargaPadrao: 40 },
      { id: "t2_mes_fle", nome: "Mesa flexora (2 aquec.)", series: "5 séries", reps: "15, 12, 8-12, 8-12, 8-12 reps", cargaPadrao: 30 },
      { id: "t2_extensor", nome: "Extensor", series: "3 séries", reps: "8-12 reps", cargaPadrao: 35 },
      { id: "t2_abdutor", nome: "Abdutor (10\" Isometria)", series: "3 séries", reps: "8-12+10\" reps", cargaPadrao: 40 },
      { id: "t2_pan_maq", nome: "Panturrilha máquina (Sentado)", series: "4 séries", reps: "10-15 reps", cargaPadrao: 30 },
      { id: "t2_bik_int", nome: "Cardio - Intervalado na Bike", series: "3-4X", reps: "2' sent. mod. / 1' em pé pes.", cargaPadrao: 0 }
    ]
  },
  Quarta: {
    titulo: "TREINO 3 - Cardio Especial",
    exercicios: [
      { id: "t3_est_int", nome: "Esteira Intervalado (2' caminhada / 3' corrida)", series: "1 sessão", reps: "30'-40' min", cargaPadrao: 0 },
      { id: "t3_eliptico", nome: "Elíptico", series: "1 sessão", reps: "10' min", cargaPadrao: 0 }
    ]
  },
  Quinta: {
    titulo: "TREINO 4 - Tronco & Superior Completo",
    exercicios: [
      { id: "t4_pux_fre", nome: "Puxada frente na máquina (2 aquec.)", series: "5 séries", reps: "15, 12, 8-12, 8-12, 8-12 reps", cargaPadrao: 45 },
      { id: "t4_sup_inc", nome: "Supino inclinado (2 aquec.)", series: "5 séries", reps: "15, 12, 8-12, 8-12, 8-12 reps", cargaPadrao: 20 },
      { id: "t4_rem_abe", nome: "Remada aberta (Pronada)", series: "3 séries", reps: "8-12 reps", cargaPadrao: 35 },
      { id: "t4_enc_hal", nome: "Encolhimento com halteres", series: "3 séries", reps: "8-12 reps", cargaPadrao: 18 },
      { id: "t4_ros_inc", nome: "Rosca com halteres no banco inclinado", series: "3 séries", reps: "8-12 reps", cargaPadrao: 12 },
      { id: "t4_abd_inf", nome: "Abdominal infra solo (Completo)", series: "3 séries", reps: "10-15 reps", cargaPadrao: 0 }
    ]
  },
  Sexta: {
    titulo: "TREINO 5 - Pernas & Glúteos / Cardio",
    exercicios: [
      { id: "t5_sti_bar", nome: "Stiff com barra (2 aquec.)", series: "5 séries", reps: "15, 12, 8-12, 8-12, 8-12 reps", cargaPadrao: 30 },
      { id: "t5_leg_pre", nome: "Leg press (2 aquec.)", series: "5 séries", reps: "15, 12, 8-12, 8-12, 8-12 reps", cargaPadrao: 80 },
      { id: "t5_flexor",  nome: "Flexor", series: "3 séries", reps: "8-12 reps", cargaPadrao: 30 },
      { id: "t5_adutor",  nome: "Adutor (10\" Isometria)", series: "3 séries", reps: "8-12+10\" reps", cargaPadrao: 35 },
      { id: "t5_pan_leg", nome: "Panturrilha leg press", series: "4 séries", reps: "10-15 reps", cargaPadrao: 50 },
      { id: "t5_bik_int", nome: "Cardio - Intervalado na Bike", series: "3-4X", reps: "2' sent. mod. / 1' em pé pes.", cargaPadrao: 0 }
    ]
  }
};

// ==========================================
// FUNÇÕES AUXILIARES DE CÁLCULO
// ==========================================
function parseNumSeries(str) {
  const match = str.match(/\d+/);
  return match ? parseInt(match[0]) : 1;
}

function parseNumReps(str) {
  const matches = str.match(/\d+/g);
  if (!matches) return 1;
  let soma = 0;
  matches.forEach(m => soma += parseInt(m));
  return Math.round(soma / matches.length);
}

// ==========================================
// RENDERIZAR EXERCÍCIOS DO DIA SELECIONADO
// ==========================================
function renderTreino(dia) {
  const container = document.getElementById('exercises-list');
  const tituloEl = document.getElementById('treino-titulo');
  
  if (!container) return;

  const diaSelec = dia || 'Segunda';
  const treinoAtual = treinosDados[diaSelec] || treinosDados.Segunda;
  if (tituloEl) tituloEl.textContent = treinoAtual.titulo;

  let concluidos = JSON.parse(localStorage.getItem('user_treinos_concluidos') || '[]');

  let html = '';
  treinoAtual.exercicios.forEach(ex => {
    const isChecked = concluidos.includes(ex.id) ? 'checked' : '';
    const cargaSalva = localStorage.getItem('carga_' + ex.id) || ex.cargaPadrao;

    html += `
      <div style="background: #0f172a; padding: 12px; border-radius: 8px; border: 1px solid #334155; margin-bottom: 10px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <strong style="color: #f8fafc; font-size: 0.95rem;">${ex.nome}</strong>
          <input type="checkbox" id="check_${ex.id}" ${isChecked} onchange="toggleExercicio('${ex.id}', '${diaSelec}')" style="width: 20px; height: 20px; cursor: pointer;">
        </div>
        
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; color: #94a3b8;">
          <span>${ex.series} × ${ex.reps}</span>
          
          <div style="display: flex; align-items: center; gap: 4px;">
            <label style="font-size: 0.75rem; color: #64748b;">Carga/Série:</label>
            <input type="number" id="carga_${ex.id}" value="${cargaSalva}" onchange="salvarCarga('${ex.id}', this.value, '${diaSelec}')"
                   style="width: 60px; padding: 4px 6px; background: #1e293b; border: 1px solid #475569; color: #38bdf8; font-weight: bold; border-radius: 4px; text-align: center;">
            <span style="font-size: 0.75rem; color: #64748b;">kg</span>
          </div>
        </div>
      </div>
    `;
  });

  html += `
    <div style="background: #1e293b; padding: 12px; border-radius: 8px; border: 1px solid #38bdf8; margin-top: 15px; text-align: center;">
      <span style="font-size: 0.8rem; color: #94a3b8; display: block; margin-bottom: 2px;">Carga Total Levantada (Volume Concluído):</span>
      <strong id="volume-total-treino" style="font-size: 1.2rem; color: #38bdf8;">0 kg</strong>
    </div>
  `;

  container.innerHTML = html;
  calcularVolumeTotalTreino(diaSelec);
}

// ==========================================
// CÁLCULO DA CARGA TOTAL LEVANTADA
// ==========================================
function calcularVolumeTotalTreino(dia) {
  const labelTotal = document.getElementById('volume-total-treino');
  if (!labelTotal) return;

  const diaSelec = dia || 'Segunda';
  const treinoAtual = treinosDados[diaSelec] || treinosDados.Segunda;
  let concluidos = JSON.parse(localStorage.getItem('user_treinos_concluidos') || '[]');

  let tonelagemTotal = 0;

  treinoAtual.exercicios.forEach(ex => {
    if (concluidos.includes(ex.id)) {
      const carga = parseFloat(localStorage.getItem('carga_' + ex.id)) || ex.cargaPadrao;
      const numSeries = parseNumSeries(ex.series);
      const numReps = parseNumReps(ex.reps);

      tonelagemTotal += (numSeries * numReps * carga);
    }
  });

  labelTotal.innerText = Math.round(tonelagemTotal).toLocaleString('pt-BR') + ' kg';
}

function salvarCarga(id, valor, dia) {
  localStorage.setItem('carga_' + id, valor);
  calcularVolumeTotalTreino(dia);
}

function toggleExercicio(id, dia) {
  let concluidos = JSON.parse(localStorage.getItem('user_treinos_concluidos') || '[]');
  
  if (concluidos.includes(id)) {
    concluidos = concluidos.filter(item => item !== id);
  } else {
    concluidos.push(id);
  }

  localStorage.setItem('user_treinos_concluidos', JSON.stringify(concluidos));
  calcularVolumeTotalTreino(dia);
}
