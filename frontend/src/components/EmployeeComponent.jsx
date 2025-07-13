import React, { useEffect, useState } from 'react';
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService';
import { getAllDepartments } from '../services/DepartmentService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [departments, setDepartments] = useState([]);

  const { id } = useParams();
  const navigator = useNavigate();

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    departmentId: ''
  });

  useEffect(() => {
    if (id) {
      getEmployee(id).then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
        setDepartmentId(response.data.departmentId);
      }).catch(error => {
        console.error("Failed to fetch employee:", error);
      });
    }

    getAllDepartments().then((response) => {
      setDepartments(response.data);
    }).catch(error => {
      console.error("Failed to fetch departments:", error);
    });
  }, [id]);

  function saveOrUpdateEmployee(e) {
    e.preventDefault();

    if (validateForm()) {
      const employee = {
        firstName,
        lastName,
        email,
        departmentId: parseInt(departmentId) // ensure it's a number
      };
      console.log("Sending employee data:", employee);

      if (id) {
        updateEmployee(id, employee).then(() => {
          navigator('/employees');
        }).catch(console.error);
      } else {
        createEmployee(employee).then(() => {
          navigator('/employees');
        }).catch(console.error);
      }
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (!firstName.trim()) {
      errorsCopy.firstName = 'First Name is required';
      valid = false;
    } else {
      errorsCopy.firstName = '';
    }

    if (!lastName.trim()) {
      errorsCopy.lastName = 'Last Name is required';
      valid = false;
    } else {
      errorsCopy.lastName = '';
    }

    if (!email.trim()) {
      errorsCopy.email = 'Email is required';
      valid = false;
    } else {
      errorsCopy.email = '';
    }

    if (!departmentId) {
      errorsCopy.departmentId = 'Please select a department';
      valid = false;
    } else {
      errorsCopy.departmentId = '';
    }

    setErrors(errorsCopy);
    return valid;
  }

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card p-4" style={{ width: '100%', maxWidth: '500px' }}>
        <h2 className="text-center mb-4">{id ? 'Update Employee' : 'Add Employee'}</h2>
        <form>
          <div className="form-group mb-3">
            <label>First Name:</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
          </div>

          <div className="form-group mb-3">
            <label>Last Name:</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
          </div>

          <div className="form-group mb-3">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter Email Address"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="form-group mb-3">
            <label>Department:</label>
            <select
              className={`form-control ${errors.departmentId ? 'is-invalid' : ''}`}
              value={departmentId}
              onChange={(e) => setDepartmentId(e.target.value)}
            >
              <option value="">-- Select Department --</option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>{dept.departmentName}</option>
              ))}
            </select>
            {errors.departmentId && <div className="invalid-feedback">{errors.departmentId}</div>}
          </div>

          <div className="text-center">
            <button className="btn btn-success" onClick={saveOrUpdateEmployee}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeComponent;
