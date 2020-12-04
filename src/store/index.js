import {atom} from 'recoil';

export const language = atom({
    key: 'language',
    default: localStorage.getItem('language') || "TH",
  });