import React, { useState, useRef } from 'react'
import { useAdicionaEscolha } from 'state/hooks/useAdicionarEscolha';
import { useMessagemDeErro } from 'state/hooks/useMenssagemDeErro';
import styles from './CadastroFormulario.module.scss';

export default function CadastroForm() {
  const [escolha, setEscolha] = useState('');
  const adicionar = useAdicionaEscolha();
  const inputRef = useRef<HTMLInputElement>(null)
  const errorMenssage = useMessagemDeErro();

  const adicionarEscolha = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    let primeiraMaiuscula = escolha[0].toUpperCase() + escolha.substring(1);
    
    adicionar(primeiraMaiuscula)
    setEscolha('')
    inputRef.current?.focus();
  }

  return (
    <>
    <h2 className={styles.info}>Digite ao menos 3 opções para iniciar !</h2>
    <form onSubmit={adicionarEscolha} className={styles.formulario}>      
      <input
        ref={inputRef}
        required
        type='text'
        placeholder='Insira o nome da opção'
        value={escolha}
        onChange={event => setEscolha(event.target.value)}
      />
      <button 
        disabled={!escolha}
        className={escolha ? styles.ativo : ''}
      >Cadastrar</button>      
    </form>
    {errorMenssage && <p role='alert' className={styles.alert} >{errorMenssage}</p>}
    </>
  )
}
