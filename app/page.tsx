import Emailsignup from "./Components/emailsignup";
import Features from "./Components/features";
import Herosection from "./Components/herosection";
import Landingpage from "./Components/landingpage";
import Listing from "./Components/listing";
import Listings from "./Components/listings";
import Productlisting from "./Routes/ProductListing/page";
import Shoppingcart from "./Routes/ShoppingCart/page";


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
      <Landingpage/>
      <br />
      <Emailsignup/>
      <br />
      <Productlisting/>
      <br />
      <Shoppingcart/>
    </main>
  )
  
}