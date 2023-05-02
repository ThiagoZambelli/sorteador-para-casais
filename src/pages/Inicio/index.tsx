import CadastroForm from 'componentes/CadastroForm'
import ListaDeEscolhas from 'componentes/ListaDeEscolhas'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useListaDeEscolhas } from 'state/hooks/useListaDeEscolhas'
import { AiOutlinePlayCircle } from 'react-icons/ai';
import styles from './Inicio.module.scss';

const Inicio = () => {
  const lista = useListaDeEscolhas();
  const proximaPagina = useNavigate();

  const iniciar = () => {
    proximaPagina('/sorteio')
  }

  return (
    <>
      <CadastroForm />
      <ListaDeEscolhas />
      <div className={styles.iniciar}>
        <button
        className={lista.length < 3 ? '' : styles.habilitado}
        onClick={iniciar}
        disabled={lista.length < 3}
        >
          <AiOutlinePlayCircle />
          Iniciar
        </button>
      </div>
    </>
  )
}

export default Inicio
