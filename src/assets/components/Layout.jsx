import { Outlet, Link  } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DashBoard from "./dashboardss";
import AddProducts from "./AddProducts";
//import { RttOutlined } from "@mui/icons-material";
//importmport Home from "./Home";

const Layout = () => {
  return (
    <>
    
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
          <li className="nav-item">
          <Link to ="/Blogs">Blogs</Link>
          </li>
          <li className="nav-item">
          <Link to ="/dashboardss">dashboard</Link>
        
          </li>
          <li className="nav-item">
          <Link to ="/addproducts">products</Link>
          </li>
         
        </ul>
        </div>
      </nav> 
    {/* <Tab1/> */}
      <Outlet />
     
    </>
  )
 
};


export const  Tab1=() => {
 
  return (
    
    
 
    <>
    <div>
       <Tabs direction={"rtl"}>
    <TabList>
      <Tab>dashboard</Tab>
      <Tab>addproducts</Tab>
    </TabList>

    <TabPanel>
      <h2>
        <DashBoard/>
      </h2>
    </TabPanel>
    <TabPanel>
      <h2><AddProducts/></h2>
    </TabPanel>
  </Tabs>
  </div>
  </>
  );
  }
export default Layout;
