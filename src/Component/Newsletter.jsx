import { Send } from "@mui/icons-material"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`

const Desc = styled.p`
  text-align: left;
  padding: 10px;
`
const InputContainer = styled.form`
  width: auto;
`
const Input = styled.input`
  width: 600px;
  height: 50px;
  padding: 5px;
  border: 1px solid lightskyblue;
  font-size: 1.5rem;
  font-weight: 500;
  /* border-radius: 10px; */
  margin-right: 10px;
`
const Button = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  cursor: pointer;

  background-color: deepskyblue;
  font-size: 2rem;
  font-weight: 500;
`

export const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely update from your favorite store</Desc>
      <InputContainer action="#">
        <Input type="text" placeholder="Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}
