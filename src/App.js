import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import Router from './routes/Router';
import GlobalStyles from './GlobalStyles/GlobalStyles'

const App = () => {
  return (
    <ChakraProvider>
      <Router />
      <GlobalStyles />
    </ChakraProvider>
  );
}

export default App;
