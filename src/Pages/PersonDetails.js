import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import style from './PersonalDetails.module.css'
import { Charts } from './Charts';
import { CartsIntensity } from './CartsIntensity';
import MixedChart from './MixedChart';

export function PersonDetails() {

    const [person, setPerson] = useState()
    const [metrics, setMetrics] = useState([])
    const [intensity, setIntensity] = useState([])
    const [metricsData, setMetricsData] = useState()
    const [sum, setSum] = useState()
    const [distanceTotal, setDistanceTotal] = useState()
    const [steps, setSteps] = useState()
    const [distance, setDistance] = useState()
    const [imc, setImc] = useState()
    const [grafics, setGrafics] = useState(1)
    

    const id_initial = localStorage.getItem("a2Bc9E4fGhI1jKlM7nOpQr3tUvX5wYz8")
    // console.log(id_initial);

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
              
              const datametrics = response.data.data.slice(-7)
              
              setMetrics([])
              setIntensity([])
  
              datametrics.map((item)=>{
                setMetrics((prevMetrics) => [...prevMetrics, item.attributes.steps]);
                setIntensity((prevMetrics) => [...prevMetrics, item.attributes.intensity])
              })
            } else {
              console.log('Dados não encontrados na resposta da API.');
            }
          } catch (error) {
            console.error('Erro na requisição:', error.message);
          }
        };
    
        data_metrics();

        const imc = async () => {
            try {
              const id =  id_initial + 1
              const response = await axios.get(`https://balance-dxhn.onrender.com/api/v1/bmi_calculations/${id}`, {
                headers: {
                  'Content-Type': 'application/json',
                }
              })
              if (response.data) {
                setImc(response.data.data.attributes.imc);
              }
            } catch (error) {
              console.log("No data");
            }
          }
        imc();
      },[id_initial]);

      useEffect(() => {
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
          
          setMetricsData(objcMetrics)
          
        }, [metrics])


  return (
    <div className={style.content}>
        <div className={style.content_inside}>
          <div className={style.content_details}>

            <h2>Dados do usuário</h2>
            
            {person && (
              <div className={style.info_data}>
                <div className={style.data}>
                  <h3>DADOS PESSOAIS</h3>
                  <div><span>Nome: </span>{person.name}</div>
                  <div  className={style.display}><span>Sexo: </span> {person.profile.gender === 'male'? <span>Masculino</span> : <span>Feminino</span>  }</div>
                  <div><span>Peso: </span>{person.profile.weight} <span> kg</span> </div>
                  <div><span>Altura: </span>{(person.profile.height_in_cm / 100).toFixed(2)} <span> m</span> </div>
                </div>

                <div  className={style.data}>
                  <h3>DADOS GERAIS</h3>

                  <div>
                    <span>Passos totais: </span>{sum ? sum : 0} <span>Passos</span>
                  </div>

                  <div>
                    <span> Distância total: {distanceTotal !=0 ? distanceTotal > 1000 ? (<> {distanceTotal / 1000} <span> km</span></> ) : (<> {distanceTotal} <span> m</span></> ) : <span> Sem dados</span>} </span> 
                  </div>

                  {imc && 
                    <div><span> IMC: </span>{imc}</div>
                  }

                  <div>
                    <span>Dias de exercicios: </span>
                    {person.profile.workout_days_frequency}
                  </div>

                </div>

                <div className={style.data}>
                <h3>DADOS DIÁRIOS</h3>
                  {metricsData[0] >0 ? (
                    
                    
                    <div className={style.stepStyle}>
                      <table >
                        <thead className={style.dados_thead}>
                          <tr>
                            <td className={style.lengthTd}>Dia</td>
                            <td>Passos</td>
                            <td>Distância</td>
                            <td>Intensidade</td>
                          </tr>
                        </thead>
                        <tbody className={style.dados_tabela}>
                          {
                            Array.from({ length: 7 }, (_, i) => (
                              <tr key={i}>
                                <td className={style.lengthTd}>{i+1}</td>
                                <td>{steps[i]}</td>
                                <td>{distance[i]  > 1000 ? (<> {distance[i] / 1000} <span> km</span></> ) : (<> {distance[i]} <span> m</span></> )}</td>
                                <td>{intensity[i] === 'low' ? 'Baixo' : '' || intensity[i] === 'normal' ? 'Moderado' : ''|| intensity[i] === 'high' ? 'Alto' : ''}</td>
                              </tr>
                            ))
                          }
                        </tbody>
                      </table>
                    </div>
                  ):
                  (
                    <span>Sem dados</span>
                  )
                  
                  }


                </div>
              </div>
            )}

            <div className={style.statistic}>
              <h2>Gráfico</h2>
              <div>

                <div className={style.grafics_select}>
                <div>
                  <label htmlFor="mixed">Grafico duplo</label>
                  <input type="radio" name="chartType" id="mixed" onChange={() => setGrafics(1)} checked={grafics === 1}/>
                </div>
                <div>
                  <label htmlFor="separate">Graficos separados</label>
                  <input type="radio" name="chartType" id="separate"  onChange={() => setGrafics(0)} checked={grafics === 0}/>
                </div>
                <div>
                  <label htmlFor="both">Graficos separados e duplos</label>
                  <input type="radio" name="chartType" id="both"  onChange={() => setGrafics(10)} checked={grafics === 10}/>
                </div>
                </div>

                { 
                  (grafics === 1 || grafics === 10) && metrics.length > 0 ?
                    <MixedChart dataframe_01={intensity} dataframe_02={metrics}/>
                  :
                  metrics ? '' : <span>Sem dados</span>
                }
                
                {
                  (grafics === 0 || grafics === 10) && metrics.length > 0 ? 
                    <Charts 
                      dataframe={metrics}
                    /> 
                  : 
                  metrics ? '' : <span>Sem dados</span>
                }

                {
                  (grafics === 0 || grafics === 10) && intensity.length > 0 ?   
                    <CartsIntensity
                      dataframe={intensity}
                  />
                  :
                  metrics ? '' : <span>Sem dados</span>            
                }

              </div>
              <div className={style.but}>
                  <Link to='/'>
                      <button>
                          Voltar
                      </button>
                  </Link>
              </div>
            </div>
          </div>


        </div>


    </div>
  )
}
