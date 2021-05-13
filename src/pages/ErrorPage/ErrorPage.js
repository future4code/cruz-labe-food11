import React from 'react';
import { Header,  ContainerImg, LogoChef, ContainerButtons, ContainerTexto } from './styled'
import { gotoSignUpPage, goToLoginPage } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';
import {LoadingLogo} from '../../components/TelaInicial/styled'
const ErrorPage = () => {
    const history = useHistory()
    return (
        <div>
            <Header>
                <LoadingLogo/>
                <ContainerButtons>
                    <button onClick={() => gotoSignUpPage(history)}>Sign Up</button>
                    <button onClick={() => goToLoginPage(history)}>Login</button>
                </ContainerButtons>
            </Header>
            <ContainerImg>
                <LogoChef src='https://image.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg' />

                <ContainerTexto>
                    <h1>Page not found</h1>
                </ContainerTexto>


            </ContainerImg>

        </div>

    )

}

export default ErrorPage;

