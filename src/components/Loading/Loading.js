import React from 'react'
import { Spinner } from "@chakra-ui/react"
import { Container } from './styled'

function Loading() {
  return <Container>
    <Spinner
      thickness="5px"
      speed="0.65s"
      emptyColor="gray.200"
      color="#e8222f"
      size="xl"
    /></Container>
}

export default Loading