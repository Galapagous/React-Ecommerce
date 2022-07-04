import { Badge } from "@material-ui/core"
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 80px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
// beginning of left bar left

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;
`
const SearchWrapper = styled.div`
  border: 2px solid grey;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
`
const Input = styled.input`
  border: none;
`
// End of top bar left  ................................

// Top bar center begins here ............................
const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
  font-size: 32px;
  font-weight: bold;
`
// beginning of right side ...............................
const Right = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const MenuItems = styled.div`
  margin-left: 30px;
  cursor: pointer;
  font-weight: 400;
`

function Navbar() {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Language> EN </Language>
            <SearchWrapper>
              <Input placeholder="Search Product"></Input>
              <Search style={{ color: "grey", fontSize: 16 }} />
            </SearchWrapper>
          </Left>
          <Center>
            <Logo>Musa.</Logo>
          </Center>
          <Right>
            <MenuItems>Register</MenuItems>
            <MenuItems>Login</MenuItems>
            <MenuItems>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItems>
          </Right>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Navbar
