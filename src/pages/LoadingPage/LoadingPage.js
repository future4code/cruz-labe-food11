import {useHistory} from 'react-router-dom'
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader'
import '../../App.css';



const LoadingPage = () => {
    const history = useHistory()
    const token = localStorage.getItem("token");
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            token ? history.push("/homePage") : history.push("/login")
        }, 8000)
    }, [])

   // setLoading(false)

    return (

        <div  className= 'lily'>
             <Logo src='../../assets/logo-future-eats.png'/>
          
              

                    <
                 
                        PacmanLoader
                        size={65}
                        color={'#D01802'}
                    />

                   
         

        </div>
    );
}

export default LoadingPage;


const Logo = styled.div`

`
