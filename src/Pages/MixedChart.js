import React from 'react';
import Chart from 'react-apexcharts';

const MixedChart = ({dataframe_01, dataframe_02}) => {
  const data = dataframe_01; // Substitua pelo seu dataframe de dados
  const categoriesMap = {
    'low': 1,
    'normal': 2,
    'high': 3
  };

  const numericalData = data.map(item => categoriesMap[item]);
  const passosData = dataframe_02; // Exemplo de dados de passos (substitua pelo seu dataframe)


//   (7) ['normal', 'high', 'high', 'low', 'high', 'high', 'low'] 
//   (7) [2000, 5000, 10000, 700, 6000, 12000, 500]
//   console.log(dataframe_01, dataframe_02);
//   const data = dataframe_02; // Substitua pelo seu dataframe de dados
//   const categoriesMap = {
//     'low': 1,
//     'normal': 2,
//     'high': 3
//   };

//   const numericalData = data.map(item => categoriesMap[item]);
//   const passosData = dataframe_01; 

  const chartOptions = {
    chart: {
      height: 480,
      type: 'line', // Tipo principal é 'line' para gráfico misto
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: true,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false
        },
      },
      background: "#22bc5466",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        strokeWidth: 0,
        colors: { // Defina as cores aqui
            ranges: [{
              from: 1,
              to: 1,
              color: '#5f4be1' // Azul para baixo
            }, {
              from: 2,
              to: 2,
              color: '#5f4be1' // Azul para normal
            }, {
              from: 3,
              to: 3,
              color: '#5f4be1' // Azul para alto
            }]
          },
          backgroundBarRadius: 4// Remova o stroke para barrasx
        },
    },
    stroke: {
      width: [2, 0], // Largura da linha para gráfico de linha e barras
      curve: 'smooth',
    },
    title: {
      text: "Quantidade de Passos x Dia e Nível de Intensidade",
      align: 'center',
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
      },
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
      style: {
        fontSize: '10px',
        fontWeight: 'bold',
      },
      background: {
        enabled: true,
        foreColor: '#000',
        borderRadius: 2,
        padding: 4,
        opacity: 0.9,
        borderWidth: 1,
        borderColor: '#00f'
      },
    },
    xaxis: {
      categories: ["dia 1", "dia 2", "dia 3", "dia 4", "dia 5", "dia 6", "dia 7"],
      title: {
        text: 'Dias da Semana',
        style: {
          fontSize: '12px',
          fontWeight: 'bold'
        }
      }
    },
    yaxis: [
      {
        seriesName: 'Passos',
        title: {
          text: 'Quantidade de Passos',
          style: {
            fontSize: '12px',
            fontWeight: 'bold'
          }
        },
      },
      {
        opposite: true,
        seriesName: 'Nível',
        labels: {
          formatter: (val) => {
            switch (val) {
              case 1:
                return 'Baixo';
              case 2:
                return 'Normal';
              case 3:
                return 'Alto';
              default:
                return val;
            }
          }
        },
        title: {
          text: 'Nível de Intensidade',
          style: {
            fontSize: '12px',
            fontWeight: 'bold'
          }
        }
      }
    ],

    legend: {
      show: true,
      position: 'top',
      fontSize: '12px',
      showForSingleSeries: true,
      markers: {
        strokeColor: ['#000', '#5f4be1'],
        width: 10,
        height: 10,
        strokeWidth: 20,
        radius: 10,
      },

      itemMargin: {
        horizontal: 4,
        vertical: 0
      }
    },
    stroke: {
        width: [2,0], // Largura da linha para gráfico de linha e barras
        curve: 'smooth',
        colors: ["#000"] // Definindo a cor da linha como #00
    },
    responsive: [
      {
        breakpoint: 1000,
        options: {
          plotOptions: {
            bar: {
              horizontal: false
            }
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ],
    markers: {
      size: 4,
      colors: "#fff",
      strokeColors: '#ff00ff55',
      strokeWidth: 2,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      onClick: undefined,
      onDblClick: undefined,
      showNullDataPoints: true,
      hover: {
        size: undefined,
        sizeOffset: 3
      }
    }
  };

  const series = [
    {
      name: 'Passos',
      type: 'line',
      data: passosData,
    },
    {
      name: 'Nível',
      type: 'bar',
      data: numericalData,
      strokeWidth: 0
    }
  ];

  return (
    <div>
      <Chart
        options={chartOptions}
        series={series}
        type="line" // Tipo principal ainda é 'line' para gráfico misto
        height={480}
      />
    </div>
  );
};

export default MixedChart;
