import React, { useState } from 'react'
import { useResultado } from 'state/hooks/useResultado';
import { useSorteador } from 'state/hooks/useSorteador';
import { GiPerspectiveDiceSixFacesFive } from 'react-icons/gi'
import styles from './Sorteio.module.scss';


export default function PaginaSorteio() {
  const [repeticao, setRepeticao] = useState(0);
  const sorteador = useSorteador();
  const resultado = useResultado();

  const maisUmaVez = () => {
    let inputNumber = repeticao + 1;
    setRepeticao(inputNumber)
  }


  const sorteando = () => {
    sorteador();
    maisUmaVez();
  }

  console.log(repeticao)

  return (
    <div className={styles.sorteio}>
      <button
        onClick={sorteando}
      >
        <GiPerspectiveDiceSixFacesFive />
        Sortear
      </button>
      {repeticao > 2 && <h2>Sabemos que é um momento dificil, mas ja tentaram {repeticao} vezes!</h2>}
      {repeticao > 4 && <h2 className={styles.sorteio__desistir}>Acho melhor desistir!!</h2>}
      {repeticao > 0 && <div className={styles.sorteio__resultado}>{resultado}</div>}
    </div>
  )
}
