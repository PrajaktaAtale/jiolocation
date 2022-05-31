import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom"

const Home = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem("token")){
      navigate('/')
    }
    else{
      navigate('/login')
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div>
     <input type="file"/>
    </div>
  );
}

export default Home;
