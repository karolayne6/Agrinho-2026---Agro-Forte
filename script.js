function abrirAba(id){

    let conteudos = 
    document.querySelectorAll('.conteudo');

    conteudos.forEach(item=>{
        item.classList.remove('ativo');
    });

    document
    .getElementById(id)
    .classList.add('ativo');

    let tabs = 
    document.querySelectorAll('.tab');

    tabs.forEach(tab=>{
        tab.classList.remove('active')
    });

    event.target.classList.add('active');
}

const dadosGrafico = {
    labels: ['2021','2022','2023','2024','2025'],
    datasets: [{
        label: 'Participação no PIB (%)',
        data: [26.6,24.8,24.1,23.7,24.2],
        backgroundColor: 'rgba(46, 204, 113, 0.6)',
        borderColor: '#27ae60',
        borderWidth: 2,
        borderRadius: 6
    }]
};

const config = {
    type: 'bar', // Gráfico de barras
    data: dadosGrafico,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Percentual (%)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Ano'
                }
            }
        }
    }
}

