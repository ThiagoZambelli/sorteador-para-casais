import { useListaDeEscolhas } from "state/hooks/useListaDeEscolhas"
import styles from './ListaDeEscolhas.module.scss';


const ListaDeEscolhas = () => {
  const lista: string[] = useListaDeEscolhas();

  console.log(lista)

  return (
    <ul className={styles.lista}>
      {lista.map( item => <li key={item}>{item}</li>)}
    </ul>
  )
}

export default ListaDeEscolhas