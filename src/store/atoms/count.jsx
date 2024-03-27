import {atom} from "recoil";


export const countAtom = atom({
    key: "countAtom",//helps to uniquely identify the count atom, the key has to be different for every different atom
    default: 0,//the default value of the atom
});


 