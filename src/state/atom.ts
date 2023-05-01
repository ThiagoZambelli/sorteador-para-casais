import {atom} from 'recoil';

export const listaDeEscolhas = atom<string[]>({
    key: 'listaDeEscolhas',
    default: []
})