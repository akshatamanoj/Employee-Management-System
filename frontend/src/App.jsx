import './App.css'; 
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeComponent from './components/EmployeeComponent';

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
            
        </Routes>
       
        <FooterComponent/>
      </BrowserRouter>
      

    </>
  )
}

export default App
