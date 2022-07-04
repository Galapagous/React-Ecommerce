import { PropaneSharp } from "@mui/icons-material"
import styled from "styled-components"
import CategoryItem from "./Data"
import Diamond from "../Images/diamond.jpg"

const Container = styled.div`
  width: auto;
  height: auto;
  position: relative;
  margin: 100px 0px;
  padding: 10px;
`
const Items = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Images = styled.img`
  width: 400px;
  height: 450px;
`
const Heading = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 600;
`
const Button = styled.button`
  padding: 20px;
  background-color: white;
  font-size: 800;
  width: auto;
  height: 50px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
`

export const Category = (items) => {
  return (
    <Container>
      <Images src={items.url} alt="A category image" />
      <Items>
        <Heading>{items.title}</Heading>
        <Button>Shop Now</Button>
      </Items>
    </Container>
  )
}
