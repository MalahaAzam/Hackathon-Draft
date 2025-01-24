import ProductCards from "app/products/page";
import Emailsignup from "./emailsignup";
import Features from "./features";
import Herosection from "./herosection";
import Landingpage from "./landingpage";
import Listing from "./listing";
import Listings from "./listings";
import Productlisting from "app/Components/productlistingone";

export default function HomePage (){
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
      <Productlisting/>
    </main>
  )
  
}