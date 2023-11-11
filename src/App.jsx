// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import MiniDrawer from './assets/components/Sidebar'
//import LineChart from './assets/components/linechart'
import {counter}from './assets/components/signals'
//import {ff} from './assets/components/Sidebar'
import LineDataset from './assets/components/linecharttotal'
import Layout from './assets/components/Layout'
//import Home  from './assets/components/Home'
//import { cr } from './assets/components/Sidebar'

function App() {

 
 
   
  return(
    <>
   
     
   
  
     <div>

      <button   onClick={()=>

        

        
        counter.value++} >{counter}</button>
      <button onClick={()=>{
        if(counter==0)
        counter.value=0;
      else
      
        counter.value--}} >{counter}</button>
     </div>
     <div>
      {counter}
     </div>

    </>
  )
      }
      
    

export default App;
