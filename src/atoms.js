import { atomFamily } from "recoil";
import { TODOS } from "./todo";


export const todoAtomFamily = atomFamily({
    key:"todoAtomFamily",
    default: id => {
        return TODOS.find(x => x.id === id)
    },
})
//in atomFamily the default value isnt a value ...its a function





















