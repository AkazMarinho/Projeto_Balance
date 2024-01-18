import axios from 'axios';
import { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';


import style from './ListPerson.module.css'


export function ListPerson() {
    
    const navigate = useNavigate()
    const [listPerson, setListPerson] = useState([])


    // useEffect(() => {
    //     // const Func = async (listPerson) =>{
    //     const response = axios.get('https://balance-dxhn.onrender.com/api/v1/profiles')
    //         .then((data) => {
    //             setListPerson(data.data.data);
    //         })
    //         .catch(err => console.log(err))
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
            if (response.data && response.data.data) {
                setListPerson(response.data.data);
                console.log(response.data.data);
            } else {
              console.log('Dados não encontrados na resposta da API.');
            }
          } catch (error) {
            console.error('Erro na requisição:', error.message);
          }
        };
    
        requisition();
      }, []); // Certifique-se de incluir dependências necessárias no array de dependências se necessário
    
    

        
  return (
    <div className={style.content}>
        
            <table className={style.tabela}>
                <thead className={style.thead}>
                    <tr>
                        <td>NOME</td>
                        <td>EMAIL</td>
                        <td>FAZ ATIVIDADES</td>
                        {/* <td>GÊNERO</td>
                        <td>PESO(kg)</td>
                        <td>ALTURA(m)</td> */}
                    </tr>
                </thead>
                <tbody className={style.tbody}>

                    {listPerson.map((person, index) => (
                            <tr onClick={() =>  {
                                localStorage.setItem("a2Bc9E4fGhI1jKlM7nOpQr3tUvX5wYz8" ,  index)
                                navigate('/a7Rb2CkL9pI3qY8')
                                }} >
                                
                                <td>{person.attributes.name}</td>
                                <td>{person.attributes.email}</td>
                                <td>{person.attributes.profile.active_lifestyle ==true ? <p>Sim</p> : <p>Não</p>} </td>
                                {/* <td>{person.attributes.profile.gender}</td>
                                <td>{person.attributes.profile.weight}</td>
                                <td>{(person.attributes.profile.height_in_cm / 100).toFixed(2)}</td> */}
                            </tr>
                    ))
                    }
                </tbody>

            </table>
    </div>
  )
}
