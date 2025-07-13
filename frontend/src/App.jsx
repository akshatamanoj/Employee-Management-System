import './App.css'; 
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeComponent from './components/EmployeeComponent';
import ListDepartmentComponents from './components/ListDepartmentComponents';
import DepartmentComponent from './components/DepartmentComponent';

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          {/* // http://localhost:3003 */}
              <Route path="/" element = { <ListEmployeeComponent/>}></Route>

          {/* // http://localhost:3003/employees    */}
           <Route path="/employees" element = { <ListEmployeeComponent/>}></Route>

          {/* // http://localhost:3003/add-employee*/}
           <Route path="/add-employee" element = { <EmployeeComponent />}></Route>

          {/* // http://localhost:3003/edit-employee/1 */} 
            <Route path="/edit-employee/:id" element = { <EmployeeComponent />}></Route>
            
          {/* // http://localhost:3003/departments*/}  
            <Route path="/departments" element={ <ListDepartmentComponents/>}></Route>  

          {/* // http://localhost:3003/add-departments*/}  
            <Route path="/add-departments" element={ <DepartmentComponent/>}></Route>    

          {/* // http://localhost:3003/edit-department/:id*/}  
            <Route path="/edit-department/:id" element={ <DepartmentComponent/>}></Route>      
        </Routes>
       
        <FooterComponent/>
      </BrowserRouter>
      

    </>
  )
}

export default App
