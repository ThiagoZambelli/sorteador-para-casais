import { useRecoilValue } from "recoil"
import { listaDeEscolhas } from "../atom"

export const useListaDeEscolhas = () => {
    return useRecoilValue(listaDeEscolhas)
}