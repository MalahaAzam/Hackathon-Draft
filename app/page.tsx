import Emailsignup from "./Homepage/emailsignup";
import Features from "./Homepage/features";
import Herosection from "./Homepage/herosection";
import Landingpage from "./Homepage/landingpage";
import Listing from "./Homepage/listing";
import Listings from "./Homepage/listings";
import ProductCards from "./products/page";


export default function Home (){
  return (
    <main>
      <Herosection/>
      <br />
      <Features/>
      <br />
      <Listings/>
      <br />
      <Listing/>
      <br />
      <Emailsignup/>
      <br />
      <Landingpage/>
      <br />
      <ProductCards/>
    </main>
  )
  
}