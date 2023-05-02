import { useRecoilValue, useSetRecoilState } from "recoil"
import { listaDeEscolhas, resultadoSorteio } from "state/atom"

export const useSorteador = () => {
    const lista = useRecoilValue(listaDeEscolhas);
    const setResultado = useSetRecoilState(resultadoSorteio);
    

    return () => {
        const indicieAleatorio = Math.floor(Math.random() * lista.length)
        const escolhaSorteada = lista[indicieAleatorio];
        setResultado(escolhaSorteada);
    } 
}