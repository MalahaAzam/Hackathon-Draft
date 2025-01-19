import Link from "next/link"
import Image from "next/image"

export default function Navbar(){
    return(
        <main className=" flex justify-around 
        md:pt-8 md:pl-12 md:pr-12 md:text-base
        lg:pt-12 lg:pl-24 lg:pr-20 lg:text-xl border-b-2 pb-4">
            <div className="md:w-14 lg:w-20 md:pt-1">
                <Image src="/Avion.png" alt="exclusive" width={118} height={24} />
            </div>
            <div className="flex text-[#2A254B]
            md:gap-4 md:text-sm
            lg:gap-8  lg:text-base">
                <p><Link href= "#" >Plant pots</Link></p>
                <p><Link href= "#">Ceramics</Link></p>
                <p><Link href= "#">Tables</Link></p>
                <p><Link href= "#">Chairs</Link></p>
                <p><Link href= "#">Crockery</Link></p>
                <p><Link href= "#">Tableware</Link></p>
                <p><Link href= "#">Cutlery</Link></p>
            </div>
            <div className="flex 
            lg:gap-2
            md:gap-1 md:w-6 lg:w-6">

                <Image src="/Vector.png" alt="vector" width={305} height={375}/>
                
                <Image src="/Cart.png" alt="Cart1" width={305} height={375}/> 
              
                <Image src="/Useravatar.png" alt="Wishlist" width={305} height={375} />
            
            </div>
        </main>
    )
}
