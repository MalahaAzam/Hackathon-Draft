

"use client";

import Herosection from "./Routes/herosection/page"
import Features from "../app/Components/features"
import Listing from "./Routes/productlistone/page"
import Emailsignup from "../app/Components/emailsignup"
import HomeProductPreview from "../app/Components/HomeProductPreview"

export default function HomePage (){
  return (
    <main>
      <Herosection />
      <Features />
      <Listing />
      <Emailsignup />
      <HomeProductPreview />
    </main>
  )
  
}
