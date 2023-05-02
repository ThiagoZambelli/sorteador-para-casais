import { useSetRecoilState, useRecoilValue } from 'recoil'
import { erroState, listaDeEscolhas } from '../atom'

export const useAdicionaEscolha = () => {
    const setEscolhas = useSetRecoilState(listaDeEscolhas);
    const list = useRecoilValue(listaDeEscolhas);
    const setErro = useSetRecoilState(erroState);

    return (nomeDaEscolha: string) => {
        if (list.includes(nomeDaEscolha)){
            setErro('Esse programa ja foi adicionado');
            setTimeout(() =>{
                setErro('')
            },5000);

            return
        }

        return setEscolhas(escolhasAtuais => [...escolhasAtuais, nomeDaEscolha])
    }
}