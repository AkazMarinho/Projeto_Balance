import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import style from './PersonalDetails.module.css'
import { Charts } from './Charts';

export function PersonDetails() {

    const [person, setPerson] = useState()
    const [metrics, setMetrics] = useState([])
    const [metricsData, setMetricsData] = useState()
    const [sum, setSum] = useState()
    const [distanceTotal, setDistanceTotal] = useState()
    const [steps, setSteps] = useState()
    const [distance, setDistance] = useState()
    
    const [windowScreen, setWindowScreen] = useState()

    const id_initial = localStorage.getItem("a2Bc9E4fGhI1jKlM7nOpQr3tUvX5wYz8")
    console.log(id_initial);

    useEffect(() => {
      const windWidth = window.innerWidth;

      setWindowScreen(windWidth)

    });

    useEffect(() => {
        const requisition = async () => {
          try {
            // Realize a requisição usando o método await diretamente, sem a necessidade de .then
            const response = await axios.get('https://balance-dxhn.onrender.com/api/v1/profiles', {
              headers: {
                'Content-Type': 'application/json',
              },
            });
    
            // Verifique se há dados antes de acessar data.data.data
            if (response.data && response.data.data && response.data.data[id_initial]) {
              setPerson(response.data.data[id_initial].attributes);
              // console.log(response.data.data[id_initial].attributes.profile);
            } else {
              // console.log('Dados não encontrados na resposta da API.');
            }
          } catch (error) {
            console.error('Erro na requisição:', error.message);
          }
        };
    
        // Chame a função de requisição
        requisition();
      },[id_initial]); // Certifique-se de incluir dependências necessárias no array de dependências se necessário
    
      useEffect(() => {
        const data_metrics = async () => {
          try {
            const id =  id_initial + 1
            // Realize a requisição usando o método await diretamente, sem a necessidade de .then
            const response = await axios.get(`https://balance-dxhn.onrender.com/api/v1/exercise_metrics?user_id=${id}`, {
              headers: {
                'Content-Type': 'application/json',
              },
            });

            
            // Verifique se há dados antes de acessar data.data.data
            if (response.data && response.data.data) {
              const datametrics = response.data.data
              // console.log(datametrics);

              setMetrics([])
  
              datametrics.map((item)=>{
                setMetrics((prevMetrics) => [...prevMetrics, item.attributes.steps])
                // console.log(item.attributes.steps)
              })
            } else {
              console.log('Dados não encontrados na resposta da API.');
            }
          } catch (error) {
            console.error('Erro na requisição:', error.message);
          }
        };
    
        // Chame a função de requisição
        data_metrics();
      },[id_initial]);



      useEffect(() => {

        console.log(metrics);
        let objcMetrics = []
        let stepPerDay = []
        let distancePerDay = []
      
          let soma = 0;
          let distanciaTotal = 0;
          
          for (let i = 0; i < metrics.length; i++){
            soma += metrics[i]
            stepPerDay = [...stepPerDay, metrics[i]]
            distancePerDay = [...distancePerDay, metrics[i] * 0.82]
            distanciaTotal += metrics[i] * 0.82

          }

         setSum(soma)
         setSteps(stepPerDay)
         setDistance(distancePerDay)
         setDistanceTotal(distanciaTotal)

          objcMetrics = [...objcMetrics, soma]
          objcMetrics = [...objcMetrics, stepPerDay]
          objcMetrics = [...objcMetrics, distancePerDay]
          console.log(objcMetrics);
          
          setMetricsData(objcMetrics)
          
        }, [metrics])


        // const  metricsStepsAndDistance = (data) => {
        //  console.log(data);
        // }

  return (
    <div className={style.content}>
        <div className={style.content_inside}>

            {/* <div className={styleBalls.content_balls}>
                <span className={`${styleBalls.balls}`}></span>
            </div> */}

          <div className={style.content_details}>

            

            {person && (
              <div className={style.info_data}>
                <div className={style.data}>

                  <h2>Detalhes</h2>

                  <p><span>Nome: </span>{person.name}</p>

                  <p  className={style.display}><span>Sexo: </span> {person.profile.gender === 'male'? <p>Masculino</p> : <p>Feminino</p>  }</p>
                  <p><span>Peso: </span>{person.profile.weight} <span> kg</span> </p>
                  <p><span>Altura: </span>{(person.profile.height_in_cm / 100).toFixed(2)} <span> m</span> </p>
                </div>

                <div className={style.data}>
                  {metricsData && (
                    <div className={style.stepStyle}>
                      {sum && 
                        <h3><span>Passos totais: </span>{sum}</h3>
                      
                      }
                      {distanceTotal && 
                       <h3><span> Distância total: </span>{distanceTotal > 1000 ? (<> {distanceTotal / 1000} <span> km</span></> ) : (<> {distanceTotal} <span> m</span></> ) }</h3>
                      
                      }
                      
                            
                      <table >
                        <thead className={style.dados_thead}>
                          <tr>
                            <td>Dia</td>
                            <td>Passos</td>
                            <td>Distância</td>
                          </tr>
                        </thead>
                        <tbody className={style.dados_tabela}>
                          {

                            Array.from({ length: 7 }, (_, i) => (
                              <tr key={i}>
                                <td>{i+1}</td>
                                <td>{steps[i]}</td>
                                <td>{distance[i]  > 1000 ? (<> {distance[i] / 1000} <span> km</span></> ) : (<> {distance[i]} <span> m</span></> )}</td>
                              </tr>
                            ))
                          }
                        </tbody>
                      </table>
                    </div>
                  )}


                </div>
              </div>
            )}

            <div className={style.statistic}>
              <h2>Estatísticas</h2>
              <div>
                {metrics && <Charts width={windowScreen} dataframe={metrics}/>}

              </div>
            </div>
          </div>

          <div>
              <Link to='/'>
                  <button>
                      Voltar
                  </button>
              </Link>
          </div>

        </div>


    </div>
  )
}
