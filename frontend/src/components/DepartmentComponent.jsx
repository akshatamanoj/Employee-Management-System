import React, { useState,useEffect } from 'react';
import { createDepartment, getDepartmentById, updateDepartment } from '../services/DepartmentService';
import { useNavigate, useParams } from 'react-router-dom';

const DepartmentComponent = () => {
  const [departmentName, setDepartmentName] = useState('');
  const [department_description, setDepartment_Description] = useState('');

  const {id} = useParams();

  const navigator = useNavigate();

  useEffect(() => {
    getDepartmentById(id).then((response) => {
        setDepartmentName(response.data.departmentName);
        setDepartment_Description(response.data.department_description);

    }).catch(error => {
        console.error(error);
    })

  }, [id])

  function saveOrUpdateDepartment(e) {
    e.preventDefault(); // prevent page reload
    const department = { departmentName, department_description };
    console.log(department); 

    if(id){
        updateDepartment(id, department).then((response) => {
            console.log(response.data);
            navigator('/departments');

        }).catch(error => {
            console.error(error);
        })
    }else{
        createDepartment(department).then((response) => {
        console.log(response.data);
        navigator('/departments')
         }).catch(error => {
        console.error(error);
         })
    }
    }


  function pageTitle(){
    if(id){
        return <h2 className='text-center'>Update Department</h2>
    }else{
        return <h2 className='text-center'>Add Department</h2>
    }
  }
  return (
    <div className='container'><br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {
            pageTitle()
          }
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>Department Name:</label>
                <input
                  type='text'
                  name='departmentName'
                  placeholder='Enter Department Name'
                  value={departmentName}
                  onChange={(e) => setDepartmentName(e.target.value)}
                  className='form-control'
                />
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Department Description:</label>
                <input
                  type='text'
                  name='department_description'
                  placeholder='Enter Department Description'
                  value={department_description}
                  onChange={(e) => setDepartment_Description(e.target.value)}
                  className='form-control'
                />
              </div>

              <button className='btn btn-success mb-2' onClick={saveOrUpdateDepartment}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentComponent;
