import Slider from "../Component/Slider"
import React from "react"
import Announcement from "../Component/Announcement"
import Navbar from "../Component/Navbar"
import { Categories } from "../Component/Categories"
import { Products } from "../Component/Products"
import { Newsletter } from "../Component/Newsletter"
import { Footer } from "../Component/Footer"

function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
