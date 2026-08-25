// ==========================================
// DADOS DOS TREINOS (SEGUNDA A SEXTA)
// ==========================================
const treinosDados = {
  Segunda: {
    titulo: "TREINO 1 - Peito, Ombro e Tríceps",
    exercicios: [
      { id: "p1", nome: "Supino Inclinado c/ Halteres", series: "4 séries", reps: "10-12 reps", cargaPadrao: 20 },
      { id: "p2", nome: "Supino Reto c/ Barra ou Máquina", series: "4 séries", reps: "8-10 reps", cargaPadrao: 30 },
      { id: "p3", nome: "Crossover / Crucifixo na Polia", series: "3 séries", reps: "12-15 reps", cargaPadrao: 15 },
      { id: "o1", nome: "Desenvolvimento c/ Halteres", series: "4 séries", reps: "10-12 reps", cargaPadrao: 14 },
      { id: "o2", nome: "Elevação Lateral na Polia ou Halter", series: "4 séries", reps: "12-15 reps", cargaPadrao: 8 },
      { id: "t1", nome: "Tríceps Corda na Polia", series: "4 séries", reps: "12-15 reps", cargaPadrao: 25 },
      { id: "t2", nome: "Tríceps Testa ou Francês", series: "3 séries", reps: "10-12 reps", cargaPadrao: 12 }
    ]
  },
  Terca: {
    titulo: "TREINO 2 - Costas, Bíceps e Antebraço",
    exercicios: [
      { id: "c1", nome: "Puxada Frontal (Pegada Aberta)", series: "4 séries", reps: "10-12 reps", cargaPadrao: 45 },
      { id: "c2", nome: "Remada Curvada ou Remada Baixa", series: "4 séries", reps: "8-10 reps", cargaPadrao: 40 },
      { id: "c3", nome: "Remada Unilateral c/ Halter (Serrote)", series: "3 séries", reps: "10-12 reps", cargaPadrao: 22 },
      { id: "b1", nome: "Rosca Direta c/ Barra W ou Polia", series: "4 séries", reps: "10-12 reps", cargaPadrao: 12 },
      { id: "b2", nome: "Rosca Martelo c/ Halteres", series: "3 séries", reps: "12 reps", cargaPadrao: 10 },
      { id: "a1", nome: "Rosca Inversa ou Inclinada", series: "3 séries", reps: "12-15 reps", cargaPadrao: 8 },
      { id: "k1", nome: "Cardio - Bicicleta (Ergométrica)", series: "1 sessão", reps: "20 min", cargaPadrao: 0 }
    ]
  },
  Quarta: {
    titulo: "TREINO 3 - Cardio & Core / Descanso Ativo",
    exercicios: [
      { id: "cardio1", nome: "Bicicleta Ergométrica (Ritmo Moderado)", series: "1 sessão", reps: "40 min", cargaPadrao: 0 },
      { id: "abs1", nome: "Abdominal Infra na Barra / Chão", series: "4 séries", reps: "15-20 reps", cargaPadrao: 0 },
      { id: "abs2", nome: "Prancha Abdominal", series: "4 séries", reps: "45 seg", cargaPadrao: 0 }
    ]
  },
  Quinta: {
    titulo: "TREINO 4 - Pernas Completo",
    exercicios: [
      { id: "l1", nome: "Agachamento Livre ou Leg Press 45°", series: "4 séries", reps: "8-10 reps", cargaPadrao: 80 },
      { id: "l2", nome: "Cadeira Extensora", series: "4 séries", reps: "12-15 reps", cargaPadrao: 35 },
      { id: "l3", nome: "Mesa Flexora / Cadeira Flexora", series: "4 séries", reps: "10-12 reps", cargaPadrao: 30 },
      { id: "l4", nome: "Stiff c/ Halteres ou Barra", series: "3 séries", reps: "10-12 reps", cargaPadrao: 16 },
      { id: "p1_leg", nome: "Gêmeos / Panturrilha no Leg ou em Pé", series: "5 séries", reps: "15-20 reps", cargaPadrao: 50 }
    ]
  },
  Sexta: {
    titulo: "TREINO 5 - Braços & Ombro (Foco Hipertrofia)",
    exercicios: [
      { id: "s1", nome: "Desenvolvimento Máquina / Halter", series: "4 séries", reps: "10-12 reps", cargaPadrao: 16 },
      { id: "s2", nome: "Elevação Lateral", series: "4 séries", reps: "12-15 reps", cargaPadrao: 10 },
      { id: "s3", nome: "Rosca Simultânea c/ Halteres", series: "4 séries", reps: "10-12 reps", cargaPadrao: 12 },
      { id: "s4", nome: "Tríceps Pulley V / Corda", series: "4 séries", reps: "12-15 reps", cargaPadrao: 30 },
      { id: "s5", nome: "Rosca Scott ou Banco 45°", series: "3 séries", reps: "10-12 reps", cargaPadrao: 10 },
      { id: "s6", nome: "Tríceps Coice ou Mergulho", series: "3 séries", reps: "12 reps", cargaPadrao: 8 }
    ]
  }
};

// ==========================================
// EXTRAIR NÚMERO DE SÉRIES E REPETIÇÕES
// ==========================================
function parseNumSeries(str) {
  const match = str.match(/\d+/);
  return match ? parseInt(match[0]) : 1;
}

function parseNumReps(str) {
  const matches = str.match(/\d+/g);
  if (!matches) return 1;
  if (matches.length >= 2) {
    return (parseInt(matches[0]) + parseInt(matches[1])) / 2;
  }
  return parseInt(matches[0]);
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
            <label style="font-size: 0.75rem; color: #64748b;">Carga por série:</label>
            <input type="number" id="carga_${ex.id}" value="${cargaSalva}" onchange="salvarCarga('${ex.id}', this.value, '${diaSelec}')"
                   style="width: 60px; padding: 4px 6px; background: #1e293b; border: 1px solid #475569; color: #38bdf8; font-weight: bold; border-radius: 4px; text-align: center;">
            <span style="font-size: 0.75rem; color: #64748b;">kg</span>
          </div>
        </div>
      </div>
    `;
  });

  // Card com o Volume Total
  html += `
    <div style="background: #1e293b; padding: 12px; border-radius: 8px; border: 1px solid #38bdf8; margin-top: 15px; text-align: center;">
      <span style="font-size: 0.8rem; color: #94a3b8; display: block; margin-bottom: 2px;">Carga Total Tonelada (Volume do Treino Concluído):</span>
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

// ==========================================
// SALVAR CARGA E RECALCULAR VOLUME
// ==========================================
function salvarCarga(id, valor, dia) {
  localStorage.setItem('carga_' + id, valor);
  calcularVolumeTotalTreino(dia);
}

// ==========================================
// MARCAR / DESMARCAR EXERCÍCIO
// ==========================================
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
