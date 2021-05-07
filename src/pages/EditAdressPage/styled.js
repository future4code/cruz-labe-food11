import { Box } from '@chakra-ui/react'
import styled from 'styled-components'



export const PageDiv = styled(Box)`
  width: 100%;
  height: 6.375rem;
  margin: 0.438rem 0 0;
  border-radius: 8px;
  border: solid 1px var(--greyish);
`

export const HeaderDiv = styled(Box)`
  width: 100%;
  height: 4rem;
  padding-top: 20px;
  text-align: center;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
`

export const HeaderText = styled.h2`
  width: auto;
  height: 2rem;
  margin-left:auto;
  margin-top: 1rem;
  padding: 0rem 1.344rem 0rem;
  `


export const StyledBackButton = styled(Box)`
display: flex;
position: absolute;
margin-bottom: 20px;
margin-left: .5rem;



`