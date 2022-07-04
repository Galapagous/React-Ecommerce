import styled from "styled-components"
import blog from "../Images/blog.jpg"
import blog5 from "../Images/blog5.jpg"
import blog4 from "../Images/blog4.jpg"
import { SliderImage } from "../Component/SliderImage"
import { ArrowBackIos, ArrowBackSharp, ArrowForwardIos } from "@material-ui/icons"
import { useState } from "react"

const Container = styled.div`
  width: auto;
  height: 100vh;
  position: relative;
  overflow: hidden;
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  cursor: pointer;
  margin: auto;
  left: ${(props) => props.location === "left" && "10px"};
  right: ${(props) => props.location === "right" && "10px"};
  opacity: 0.8;
`
const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}%);
  transition: 1.5s all ease;
`
const Sliding = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  /* padding: 50px; */
  background-color: ${(props) => props.bg};
  color: white;
`

const ImgContainer = styled.div`
  width: 50vw;
  /* flex: 1; */
  height: auto;
  padding: 15px;
`

const InfoContainer = styled.div`
  width: 50vw;
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
`
const Image = styled.img`
  width: 100%;
  height: 400%;
  border-radius: 10px;
`
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`
const Paragraph = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  margin: 20px;
`
const Button = styled.button`
  font-size: 1.5rem;
  border: 2px solid white;
  background-color: ${(props) => props.bg};
  color: white;
  font-weight: 700;
  padding: 10px;
  border-radius: 20px;
`

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (drctin) => {
    console.log("hello")
    if (drctin === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }
  return (
    <Container>
      <Arrow
        location="left"
        onClick={() => {
          handleClick("left")
        }}
      >
        <ArrowBackIos />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {SliderImage.map((item) => {
          return (
            <Sliding bg={item.bg}>
              <ImgContainer>
                <Image src={item.image} alt="sample Image" />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Paragraph>{item.desc}</Paragraph>
                <Button bg={item.bg}>{item.button}</Button>
              </InfoContainer>
            </Sliding>
          )
        })}
      </Wrapper>
      <Arrow
        location="right"
        onClick={() => {
          handleClick("right")
        }}
      >
        <ArrowForwardIos />
      </Arrow>
    </Container>
  )
}

export default Slider
