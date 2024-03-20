import axios from 'axios';
import { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

import style from './ListPerson.module.css'

export function ListPerson() {
    
    const navigate = useNavigate()
    const [listPerson, setListPerson] = useState([])

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
            } else {
              console.log('Dados não encontrados na resposta da API.');
            }
          } catch (error) {
            console.error('Erro na requisição:', error.message);
          }
        };
    
        requisition();
      }, []); 

      const [search, setSearch] = useState('');

      const handleSearchInput = (e) => {
        setSearch(e.target.value);
      }
      
  return (
    <div className={style.content}>

      <div  className={style.search}>

        <FaSearch />
        <input type="text" placeholder='Pesquise um nome ou email' onChange={handleSearchInput} />
      </div>

      <div  className={style.tableCcntent}>
        <table className={style.tabela}>
            <thead className={style.thead}>
                <tr>
                    <td>NOME</td>
                    <td>EMAIL</td>
                    <td>FAZ ATIVIDADES</td>
                </tr>
                <tr>
                  <td>Dados</td>
                </tr>
            </thead>
            <tbody className={style.tbody}>
              {listPerson.length > 0 ? 
                listPerson.filter(person => 
                  person.attributes.name.toLowerCase().includes(search.toLowerCase()) ||
                  person.attributes.email.toLowerCase().includes(search.toLowerCase())
                )
                .map((person, index) => (
                  <tr key={index} onClick={() =>  {
                      localStorage.setItem("a2Bc9E4fGhI1jKlM7nOpQr3tUvX5wYz8" ,  index)
                      navigate('/a7Rb2CkL9pI3qY8')
                      }} >
                      <td>{person.attributes.name}</td>
                      <td>{person.attributes.email}</td>
                      <td>{person.attributes.profile.active_lifestyle === true ? <p>Sim</p> : <p>Não</p>} </td>
                  </tr>
                  )
                )
                :
                (
                  <span>Aguarde...</span>
                )
              }
            </tbody>
        </table>
      </div>
    </div>
  )
}
