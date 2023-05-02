import { useRecoilValue } from "recoil"
import { resultadoSorteio } from "state/atom"

export const useResultado = () => {
    return useRecoilValue(resultadoSorteio)
}