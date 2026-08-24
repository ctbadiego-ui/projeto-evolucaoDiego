const REFEICOES_DEFAULT = [
  {
    nome: 'Café da Manhã',
    itens: [
      { nome: 'Ovos cozidos/mexidos', qtd: '3 unidades', prot: 18 },
      { nome: 'Pão integral', qtd: '2 fatias', prot: 6 },
      { nome: 'Whey Protein', qtd: '1 dose (30g)', prot: 24 }
    ]
  },
  {
    nome: 'Almoço',
    itens: [
      { nome: 'Peito de Frango / Carne', qtd: '150g', prot: 45 },
      { nome: 'Arroz', qtd: '150g', prot: 4 },
      { nome: 'Feijão', qtd: '100g', prot: 5 },
      { nome: 'Salada / Verduras', qtd: 'À vontade', prot: 0 }
    ]
  },
  {
    nome: 'Lanche',
    itens: [
      { nome: 'Iogurte Natural', qtd: '1 potinho', prot: 7 },
      { nome: 'Fruta', qtd: '1 unidade', prot: 1 },
      { nome: 'Whey Protein', qtd: '1 dose', prot: 24 }
    ]
  },
  {
    nome: 'Jantar',
    itens: [
      { nome: 'Proteína (Frango/Carne/Peixe)', qtd: '150g', prot: 45 },
      { nome: 'Arroz', qtd: '100g', prot: 3 },
      { nome: 'Salada', qtd: 'À vontade', prot: 0 }
    ]
  }
];

function renderDieta() {
  const container = document.getElementById('meals-container');
  container.innerHTML = '';

  let protTotal = 0;

  REFEICOES_DEFAULT.forEach((ref) => {
    const card = document.createElement('div');
    card.style.marginBottom = '16px';
    let html = `<h3 style="color:#38bdf8; font-size:1rem; margin-bottom:8px;">${ref.nome}</h3>`;

    ref.itens.forEach(item => {
      protTotal += item.prot;
      html += `
        <div style="display:flex; justify-between; padding:8px 0; border-bottom:1px solid #334155; font-size:0.85rem;">
          <div>
            <strong>${item.nome}</strong> (${item.qtd})
          </div>
          <div style="color:#38bdf8; font-weight:bold;">${item.prot}g prot</div>
        </div>
      `;
    });

    card.innerHTML = html;
    container.appendChild(card);
  });

  document.getElementById('dieta-proteina-total').innerText = `${protTotal}g`;
}

window.calcularProteinaTotal = function() {
  let total = 0;
  REFEICOES_DEFAULT.forEach(ref => {
    ref.itens.forEach(i => total += i.prot);
  });
  return total;
};
