

// //increase decrease counter with Context API
// import { useContext, useState } from "react";
// import { CountContext } from "./context";

import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";

// function App(){
//     const [count,setCount] = useState(0);
//     return(
       
//         <div>
            
//             <CountContext.Provider value ={count}>
//                 <Count setCount={setCount} />
//             </CountContext.Provider>
//         </div>
//     )
// }


// function Count({setCount}) {
//     return(
//         <div>
//             <CountRenderer/>
//             <Buttons setCount={setCount}/>
//         </div>
//     )
// }

// function CountRenderer() {
//     const count = useContext(CountContext)
//     return(
//         <div>
//             {count}
//         </div>
//     )
    
// }

// function Buttons({setCount}){
//     const count = useContext(CountContext)
//     return(
//         <div>
//             <button onClick={()=>{
//                 setCount(count+1)
//             }}>Increase</button>

//             <button onClick={()=>{
//                 setCount(count-1)
//             }}>Decrease</button>
//         </div>
//     )
// }



// export default App;











//ContextAPI only helps to write a clean syntax 
//ContextAPI doesnt solve the problem of unnecessary re-renders
//thats where the state management libraries like recoil
//comes in picture, to solve the problem of unnecessary re-renders



function App() {


  return(
    <>
    <RecoilRoot>
        <Count/>  
    </RecoilRoot>
       
    </>
  )
}


function Count() {
  return(
    <>
      <CountRenderer />
      <Buttons/>
    </>
  )
}


function CountRenderer() {
  const count = useRecoilValue(countAtom)
  return(
    <div>
    
      {count}
    </div>
  )
}



function Buttons() {
  const [count,setCount] = useRecoilState(countAtom);
  return(
    <>
        <button onClick={()=>{
               setCount(count+1)
             }}>Increase</button>

         <button onClick={()=>{
             setCount(count-1)
            }}>Decrease</button>
     
    </>
  )
}










export default App;
















































































