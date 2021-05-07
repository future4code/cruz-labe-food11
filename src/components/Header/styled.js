import styled from 'styled-components'
import backIcon from '../../assets/back.svg'


export const Container = styled.div`
width: 22.5rem;
height: 4rem;
margin: 0 0 1.5rem;
padding: 0 0 0.625rem;
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(10px);
box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
background-color: #ffffff;
display:flex;

`
export const GoBackIcon = styled.button`
background-image:url(${backIcon});
width:1.5rem;
height:1.44rem;
margin:1.85rem 0 0.625rem 1rem;

`

export const TitleHeader = styled.div`
  height: 2.75rem;
  margin: 2rem 6rem 0rem 5rem; 
  padding: 0.813rem 2.844rem 0.75rem;
`