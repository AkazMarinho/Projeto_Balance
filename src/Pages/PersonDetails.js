import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import style from './PersonalDetails.module.css'
import { Charts } from './Charts';

export function PersonDetails() {

    const [person, setPerson] = useState()
    const [metrics, setMetrics] = useState([])

    const id_initial = localStorage.getItem("a2Bc9E4fGhI1jKlM7nOpQr3tUvX5wYz8")
    console.log(id_initial);

    // useEffect(() => {
    //     const requisition = async () => {
    //         const response = await axios.get('https://balance-dxhn.onrender.com/api/v1/profiles', {
    //             headers : {
    //                 "Content-Type" : "application/json"
    
    //             }
    //         })
    //             .then((data) => {
    //                 setPerson(data.data.data[id_initial].attributes);
    //                 console.log(data.data.data[id_initial].attributes.profile)
    //             })
    //             .catch(err => console.log(err))
                
    //         }
    //     }
    // , []);

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
              console.log(response.data.data[id_initial].attributes.profile);
            } else {
              console.log('Dados não encontrados na resposta da API.');
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
              console.log(datametrics);

              setMetrics([])
  
              datametrics.map((item)=>{
                setMetrics((prevMetrics) => [...prevMetrics, item.attributes.steps])
                console.log(item.attributes.steps)
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


  return (
    <div className={style.content}>
        <div className={style.content_inside}>

            {/* <div className={styleBalls.content_balls}>
                <span className={`${styleBalls.balls}`}></span>
            </div> */}

          <div className={style.content_details}>

            {person && (
              <div className={style.data}>

                <h2>Detalhes</h2>

                <p><span>Nome: </span>{person.name}</p>

                <p  className={style.display}><span>Sexo: </span> {person.profile.gender === 'male'? <p>Masculino</p> : <p>Feminino</p>  }</p>
                <p><span>Peso: </span>{person.profile.weight}</p>
                <p><span>Altura: </span>{(person.profile.height_in_cm / 100).toFixed(2)}</p>
              </div>
            )}

            <div className={style.statistic}>
              <h2>Estatísticas</h2>
              <div>
                {metrics && <Charts dataframe={metrics}/>}

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
