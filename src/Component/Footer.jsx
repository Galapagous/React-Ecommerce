import { AddIcCall, Facebook, Instagram, LocationOn, MailOutline, Twitter, WhatsApp } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  margin-top: 100px;
  align-items: left;
  justify-content: space-between;
  padding: 20px;
`
const Left = styled.div`
  width: 30%;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
`
const Logo = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`
const LinkWrapper = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
`
const Desc = styled.p`
  text-align: center;
  font-size: 1.2rem;
  text-align: left;
`
const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const SocialItem = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.bg};
  color: white;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-top: 20px;
`
const Center = styled.div`
  width: 30%;
  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: left;
`
const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 20px;
  margin-left: 38px;
`
const ListItem = styled.ul`
  list-style: none;
  font-size: 1.2rem;
`
const LinkItems = styled.li`
  text-decoration: none;
  margin-bottom: 10px;
  cursor: pointer;
`
const Right = styled.div`
  width: 30%;
  text-align: left;
`
const ContactTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 20px;
`

const ContactItems = styled.div`
  width: 100%;
  display: flex;
  align-items: left;
  flex-direction: column;
  text-align: left;
`
const ContactInfo = styled.h5`
  display: flex;
  align-items: left;
  font-size: 1.2rem;
  margin-bottom: 10px;
`
const ContactInfos = styled.div`
  display: flex;
  align-items: left;
`

const Payment = styled.img`
  margin-top: 10px;
  cursor: pointer;
`

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Musa</Logo>
        <Desc>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections by H. Rackham.</Desc>
        <Social>
          <SocialItem bg="#4267B2">
            <Facebook />
          </SocialItem>
          <SocialItem bg="#08a0e9">
            <Twitter />
          </SocialItem>
          <SocialItem bg="red">
            <Instagram />
          </SocialItem>
          <SocialItem bg="#25d366">
            <WhatsApp />
          </SocialItem>
        </Social>
      </Left>
      <Center>
        <Title>Usefull Links</Title>
        <LinkWrapper>
          <ListItem>
            <LinkItems>Home</LinkItems>
            <LinkItems>Man Fashion</LinkItems>
            <LinkItems>Assesories</LinkItems>
            <LinkItems>Order Tracking</LinkItems>
            <LinkItems>Wishlist</LinkItems>
          </ListItem>
          <ListItem>
            <LinkItems>Cart</LinkItems>
            <LinkItems>Woman Fashion</LinkItems>
            <LinkItems>My Account</LinkItems>
            <LinkItems>Wishlist</LinkItems>
            <LinkItems>Terms</LinkItems>
          </ListItem>
        </LinkWrapper>
      </Center>
      <Right>
        <ContactTitle>Contact</ContactTitle>
        <ContactItems>
          <ContactInfos>
            <LocationOn style={{ marginRight: "10px" }} />
            <ContactInfo>Plot 12b industrial Estate Ota.</ContactInfo>
          </ContactInfos>
          <ContactInfos>
            <AddIcCall style={{ marginRight: "10px" }} />
            <ContactInfo>+234 8123280394</ContactInfo>
          </ContactInfos>
          <ContactInfos>
            <MailOutline style={{ marginRight: "10px" }} />
            <ContactInfo>galapagous09@gmail.com</ContactInfo>
          </ContactInfos>
        </ContactItems>
        <Payment src="http://i.ibb.co/Qfvn4z6/payment.png" alt="payment cards" />
      </Right>
    </Container>
  )
}
