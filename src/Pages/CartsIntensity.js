import { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts"

export function CartsIntensity({dataframe, width}) {

    // const [widthScreen, setWidthScreen] = useState()

    // console.log(dataframe);

    // useEffect(() => {
    //     if(width > 700){
    //         setWidthScreen(600)
    //     } else if(width > 660 && width <= 700){
    //         setWidthScreen(550)
    //     } else if( width > 400 &&  width <= 660){
    //         setWidthScreen(300)
    //     }else if(width <= 400){
    //         setWidthScreen(250)
    //     }
    // })

    const data = dataframe;
    const categoriesMap = {
        'low': 1,
        'normal': 2,
        'high': 3
    };

    const numericalData = data.map(item => categoriesMap[item]);

    const options = {
        chart: {
            type: 'bar',
            height: 350,
            toolbar:{
                show : true,
                  tools: {
                    download: true,
                    selection: true,
                    zoom: false,
                    zoomin: false,
                    zoomout: false,
                    pan: false,
                    reset: false 
                  },
            
              },background : "#22bc5466"
        },
        title: {
            text: "Dia e Nível de Intensidade por Dia",
            align: 'center',
            style: {
              fontSize: '16px',
              fontWeight: 'bold',
            },
          },
        plotOptions: {
            bar: {
                horizontal: false,
                // distributed: true // Para cores diferentes para cada barra
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ["dia 1", "dia 2", "dia 3", "dia 4", "dia 5", "dia 6", "dia 7"],
            title: {
                text: 'Dias da Semana'
            }
        },
        yaxis: {
            labels: {
                formatter: (val) => {
                switch(val) {
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
                text: 'Nível de intensidade'
            }
        },background: {
                  enabled: true,
                  foreColor: '#000',
                  borderRadius: 2,
                  padding: 4,
                  opacity: 0.9,
                  borderWidth: 1,
                  borderColor: '#00f'
                },
    };

    const series = [{
        name: 'Nível',
        data: numericalData
    }];

    // const options = {
    //   chart: {
    //     width: "100%",
    //     height: 480,
    //     type: "bar",
    //     toolbar:{
    //       show : true,
    //         tools: {
    //           download: true,
    //           selection: true,
    //           zoom: false,
    //           zoomin: false,
    //           zoomout: false,
    //           pan: false,
    //           reset: false 
    //         },
      
    //     },
    //     background : "#22bc5466",
    //   },
    //   title : {
    //     display : true,
    //     text : "Quantidade de Passos x Dia",
    //     style: {
    //         fontSize:  '12px',
    //         fontWeight:  'bold',
    //         align: 'center',
    //       },
    //   },
    //   plotOptions: {
    //     bar: {
    //         borderRadius: 10,
    //         dataLabels: {
    //           position: 'top', // top, center, bottom
    //         },
    //       }
    //   },
    // //   dataLabels: {
    // //     enabled: true,
    // //      style: {
    // //       fontSize: '10px',
    // //       fontWeight: 'bold',
    // //     },
    // //     background: {
    // //       enabled: true,
    // //       foreColor: '#000',
    // //       borderRadius: 2,
    // //       padding: 4,
    // //       opacity: 0.9,
    // //       borderWidth: 1,
    // //       borderColor: '#00f'
    // //     },
    // //   },
    // //   stroke: {
    // //     width: 2,
    // //     curve: 'smooth',
    // //     colors: ["#000"]
    // //   },
    // //   xaxes : {
    // //       categories : ['baixo', 'medio', 'intenso'],
    // //       label : 'Dias'
    // //   },
    //   labels: ["dia 1", "dia 2", "dia 3", "dia 4", "dia 5", "dia 6", "dia 7"],
    //   yaxis: {
    //     title: {
    //       text: undefined
    //     },
    //   },
    // //   legend : {
    // //     show : true,
    // //     position: 'bottom',
    // //     fontSize: '12px',
    // //     showForSingleSeries: true,
    // //     markers: {
    // //       strokeColor: '#00f',
    // //       width: 10,
    // //       height: 10,
    // //       strokeWidth: 20,
    // //       radius: 10,
    // //     },
    // //     itemMargin: {
    // //       horizontal: -1,
    // //       vertical: 0
    // //     }
    // //   },
    // //   responsive: [
    // //     {
    // //       breakpoint: 1000,
    // //       options: {
    // //         plotOptions: {
    // //           bar: {
    // //             horizontal: false
    // //           }
    // //         },
    // //         legend: {
    // //           position: "bottom"
    // //         }
    // //       }
    // //     }
    // //   ],
    // //   markers: {
    // //     size: 4,
    // //     colors: "#fff",
    // //     strokeColors: '#ff00ff55',
    // //     strokeWidth: 2,
    // //     strokeOpacity: 0.9,
    // //     strokeDashArray: 0,
    // //     fillOpacity: 1,
    // //     discrete: [],
    // //     shape: "circle",
    // //     radius: 2,
    // //     offsetX: 0,
    // //     offsetY: 0,
    // //     onClick: undefined,
    // //     onDblClick: undefined,
    // //     showNullDataPoints: true,
    // //     hover: {
    // //       size: undefined,
    // //       sizeOffset: 3
    // //     }
    // // }
    //   }
    // const series = [{
    //     name: 'Inflation',
    //     data:  dataframe
    //   }]

  return (
    <div>

      <ApexCharts
          options={options} 
          series={series}  
          type='bar'    
      />
    </div>
  )
}
