import React, { useEffect, useState } from 'react';
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const { id } = useParams();
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email); // <-- fixed from emailName to email
        })
        .catch((error) => {
          console.error("Failed to fetch employee:", error);
        });
    }
  }, [id]);

  function saveOrUpdateEmployee(e) {
    e.preventDefault();

    if (validateForm()) {
      const employee = { firstName, lastName, email };
      console.log("Saving Employee:", employee);

        if(id){
            updateEmployee(id,employee).then((response) => {
                console.log(response.data);
                navigator('/employees');
            }).catch(error => {
                console.error(error);
            })
        }else{
             createEmployee(employee).then((response) => {
             console.log(response.data);
             navigator('/employees');

        }).catch(error => {
             console.error(error);
        })
        }
    
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (firstName.trim()) {
      errorsCopy.firstName = '';
    } else {
      errorsCopy.firstName = 'First Name is Required';
      valid = false;
    }

    if (lastName.trim()) {
      errorsCopy.lastName = '';
    } else {
      errorsCopy.lastName = 'Last Name is Required';
      valid = false;
    }

    if (email.trim()) {
      errorsCopy.email = '';
    } else {
      errorsCopy.email = 'Email is Required';
      valid = false; // <-- added missing line
    }

    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle() {
    return (
      <h2 className="text-center mb-4">
        {id ? 'Update Employee' : 'Add Employee'}
      </h2>
    );
  }

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card p-4" style={{ width: '100%', maxWidth: '500px' }}>
        {pageTitle()}
        <div className="card-body">
          <form>
            <div className="form-group mb-3">
              <label className="form-label">First Name:</label>
              <input
                type="text"
                placeholder="Enter Employee First Name"
                name="firstName"
                value={firstName}
                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
            </div>

            <div className="form-group mb-3">
              <label className="form-label">Last Name:</label>
              <input
                type="text"
                placeholder="Enter Employee Last Name"
                name="lastName"
                value={lastName}
                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
            </div>

            <div className="form-group mb-4">
              <label className="form-label">Email:</label>
              <input
                type="email"
                placeholder="Enter Employee Email"
                name="email"
                value={email}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
            </div>

            <div className="text-center">
              <button className="btn btn-success" onClick={saveOrUpdateEmployee}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
