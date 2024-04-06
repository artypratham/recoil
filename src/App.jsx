import {RecoilRoot,useRecoilValue} from 'recoil'
import './App.css'
import { todoAtomFamily } from './atoms'




function App() {
  return (
    <RecoilRoot>
      <Todo id={1}/>
      <Todo id={2}/>

    </RecoilRoot>
  )
}




function Todo({id}){
  const currentTodo = useRecoilValue(todoAtomFamily(id))
  return(
    <>
      {currentTodo.title}<br/>
      {currentTodo.description}
      <br/>
      <br/>
    </>
  )
}




export default App
