import styled from 'styled-components';


export const Header = styled.div`
    height: 10vh;
    background: red;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    color: white;
    position: relative;

`

export const LogoChef = styled.img`

`

export const ContainerImg = styled.div`
position: center;
`

export const Logo = styled.img`
@media (max-width: 600px)
{
    margin-top: 0.3rem;
    margin-right: 25%;
    width: 6.5rem;
   }
   margin-top: 0.3rem;
   margin-right: 75%;
   float: left;
   width: 6.5rem;
  `

  export const ContainerTexto = styled.h1`
  
  font-size: 35px;
  padding-left:15%;
  `


export const ContainerButtons = styled.div`
   button { 
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 0 10px;
    margin-left: 18px;
    font-size: 16px;
    border: 1px solid white;
    background-color: white;
    color: red;
    width: 70px;
    height: 35px;
    border-radius: 6px;
   }
  `
  //export const ContainerTexto = styled.div`
  //h1{
  //    float: right;
  //    padding-right: 100px;
  //    font-size: 35px;
  //    margin-top: 3px;
  //}
  //`


