import React, { useContext } from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { PetContext } from '../Context/Context';
import { Input } from '../Components/Input';
import { axios } from '../Utils/Axios';
import Button from '../Components/Button';
import toast from 'react-hot-toast';

function Login() {
  const navigate = useNavigate();
  const { setLoginStatus } = useContext(PetContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value.toLowerCase();
    console.log(email);
    const password = e.target.password.value;
    const loginData = { email, password };
    //const adminEmail = process.env.REACT_APP_ADMIN_EMAIL;
    const adminEmail = 'admin@admin.com';

    if (!email || !password) {
      return toast.error('Enter All the Inputs');
    }

    const endpoint = (email === adminEmail ? '/api/admin/login' : '/api/users/login');
//changes
    //const endpoint = '/api/admin/login';
    email === adminEmail
        ? localStorage.setItem('role', 'admin')
        : localStorage.setItem('userID', 'null');


        try {
          const response = await axios.post(endpoint, loginData);
          localStorage.setItem('name', response.data.data.name);
          localStorage.setItem('jwt_token', response.data.data.jwt_token);
          toast.success(response.data.message);
          setLoginStatus(true);
          navigate(email === adminEmail ? '/dashboard' : '/');
        } catch (error) {
          console.error('Login Error:', error.response?.data || error.message);
          toast.error(error.response?.data?.message || 'An error occurred');
        }
  };
  /*const handleSubmit = async (e) => {
    e.preventDefault();
  
    const email = e.target.email.value.toLowerCase();
    const password = e.target.password.value;
    const loginData = { email, password };
    const adminEmail = 'admin@admin.com';
  
    if (!email || !password) {
      return toast.error('Enter All the Inputs');
    }
  
    const endpoint = email === adminEmail ? '/api/admin/login' : '/api/users/login';
  
    try {
      const response = await axios.post(endpoint, loginData);
      localStorage.setItem('name', response.data.data.name);
      localStorage.setItem('jwt_token', response.data.data.jwt_token);
  
      // Set userID for non-admin users
      if (email !== adminEmail) {
        localStorage.setItem('userID', response.data.data.userID);
      }
  
      toast.success(response.data.message);
      setLoginStatus(true);
      navigate(email === adminEmail ? '/dashboard' : '/');
    } catch (error) {
      console.error('Login Error:', error.response?.data || error.message);
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };*/

  return (
    <MDBContainer className="form-container">
      <form onSubmit={handleSubmit}>
        <h1 className="mb-3 text-black">Welcome back</h1>

        <Input type="email" label="Email Address" name="email" />
        <Input type="password" label="Password" name="password" />

        <Button type="submit" className="mb-4 w-100" color="black">
          Log in
        </Button>

        <div className="pointer text-center">
          <p>
            Don't have an account?{' '}
            <span className="text-black fw-bold" onClick={() => navigate('/registration')}>
              Register
            </span>
          </p>
        </div>
      </form>
    </MDBContainer>
  );
}

export default Login;
