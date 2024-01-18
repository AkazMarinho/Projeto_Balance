import ApexCharts from "react-apexcharts"

export function Charts({dataframe}) {

    console.log(dataframe);
    const options = {
        legend : {
            show : true,
            position: 'bottom',
            showForSingleSeries: true
        },
        title : {
            display : true,
            text : "Quantidade de Passos x Dia",
            style: {
                fontSize:  '18px',
                fontWeight:  'bold',
                align: 'center',
              },
        },
        chart: {
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
                  }
            },
                type: 'line',
                background : "#fff"
            },
        xaxes : {
            categories : [1,2,3,4,5,6,7],
            label : 'Dias'
        },
        yaxes : {
            tooltip: true
        }
    }
    const series = [{
        name : 'Passos',
        data : dataframe
    }]
    // {
        // data: [{
        //     x : 1,
        //     y : 2000
        // },{
        //     x : 2,
        //     y : 5000
        // },{
        //     x : 3,
        //     y : 1000
        // },{
        //     x : 4,
        //     y : 700
        // },{
        //     x : 5,
        //     y : 6000
        // },{
        //     x : 6,
        //     y : 12000
        // },{
        //     x : 7,
        //     y : 500
        // }
        // ]

    // }
  return (
    <div>
        <ApexCharts
            options={options} 
            series={series} 
            width={580}
            
            
        />
    </div>
  )
}
