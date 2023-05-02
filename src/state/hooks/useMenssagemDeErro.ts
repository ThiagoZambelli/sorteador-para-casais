import { useRecoilValue } from "recoil"
import { erroState } from "state/atom"

export const useMessagemDeErro = () =>{
    const messagem = useRecoilValue(erroState);
    return messagem;
}