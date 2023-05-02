import { useSetRecoilState } from 'recoil'
import { listaDeEscolhas } from '../atom'

export const useLimparLista = () => {
    const setEscolhas = useSetRecoilState(listaDeEscolhas);    

    return () => {        

        return setEscolhas(() => [])
    }
}