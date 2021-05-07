import React from 'react';
import { Header, Logo, ContainerImg, LogoChef, ContainerButtons } from './styled'
import logo_img from '../../assets/logo-future-eats.png';

const ErrorPage = () => {
    return (
        <div>
            <Header>
                <Logo src={logo_img} />
                <ContainerButtons>
                    <button>Restaurants</button>
                    <button>Login</button>
                </ContainerButtons>
            </Header>
            <ContainerImg>
                <LogoChef src='https://image.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg' />
            </ContainerImg>

            <h1>Page not found</h1>

        </div>

    )

}

export default ErrorPage;

