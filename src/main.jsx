import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import App1 from './APP1.JSX'
import "bootstrap/dist/css/bootstrap.min.css";
import MiniDrawer from './assets/components/Sidebar';
///import './APP.css'
//import './index.css'
//import MainPage from './assets/components/Home.jsx';
import DashBoard from './assets/components/dashboardss.jsx';
import AddProducts from './assets/components/AddProducts.jsx';
import Layout from './assets/components/Layout.jsx';
import Blogs from './assets/components/Blogs.jsx'; 
 ///const route1= 
const  App1=()=> {
  return (
    <>
   
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Layout />}>
          
         <Route path="/blogs" element={<Blogs />} />
          <Route path="/dashboardss" element={<DashBoard />} />
          <Route path="/Addproducts" element={<AddProducts />} />
           
         </Route>
       </Routes>
     </BrowserRouter>

</>  
  );
}
export default App1;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App1/>
  </React.StrictMode>,
)
