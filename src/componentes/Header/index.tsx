import React from 'react'
import casal from 'assets/casal.png';
import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import { useLimparLista } from 'state/hooks/useLimparLista';



export default function Header() {
const navegar = useNavigate();
const limpar = useLimparLista();

const voltarAoInicio =()=>{
  limpar();
  navegar('/')
}

  return (
    <div className={styles.header}>
        <h2>O que Vamos Assistir ?!?</h2>
        <img 
          onClick={voltarAoInicio}
          src={casal} 
          alt="Imagem de um casal" 
        />
    </div>
  )
}
