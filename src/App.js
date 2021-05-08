import React, { useState, useEffect } from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import Router from './routes/Router';
import GlobalStyles from './GlobalStyles/GlobalStyles'
import PacmanLoader from 'react-spinners/PacmanLoader'


const App = () => {
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 8000)
    }, [])


    return (

        <div className='Principal'>
            {
                loading ?

                    <
                        PacmanLoader
                        size={150}
                        color={'#D01802'}
                    />

                    :


                    <ChakraProvider >

                        <Router />

                        <GlobalStyles />

                    </ChakraProvider>
            }

        </div>
    );
}

export default App;