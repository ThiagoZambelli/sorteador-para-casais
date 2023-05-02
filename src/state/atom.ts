import { atom } from 'recoil';

export const listaDeEscolhas = atom<string[]>({
    key: 'listaDeEscolhas',
    default: []
});
export const darkMode = atom<boolean>({
    key: 'darkMode',
    default: false
});
export const erroState = atom<string>({
    key: 'erroState',
    default: ''
});

export const resultadoSorteio = atom<string>({
    key: 'resultadoSorteio',
    default: ''
})