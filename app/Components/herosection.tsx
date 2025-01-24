import Image from "next/image"
import Link from "next/link"

export default function Herosection(){
    return(
        <main className="md:px-10 py-6">
            <div className="md:flex">
            <div className="bg-[#2A254B] text-white pt-8 pl-5 lg:pt-16 lg:pl-10 lg:w-[900px] lg:h-[584px]">
                <h1 className="lg:text-3xl">The furniture brand for the <br /> future with timeless designs</h1>
                <br />
                <br />
                <Link href = "/products">
                <button className=" font-light text-sm bg-white bg-opacity-15 py-2 px-3 lg:py-4 lg:px-6">View Collection</button>
                </Link>

                <h3 className="pt-28 lg:pt-56 pr-7 font-light text-sm md:text-base lg:text-xl">A new era in eco friendly furniture with Avelon the French luxury retail brand with nice fonts tasteful colors and a beautiful way to display things digitally 
                using modern web technologies.</h3>

            </div>
             <div className="hidden md:block ">
             <Image src="/DandyCera.png" alt="avion" width={520} height={780} className="md:h-[584px]"></Image>
             </div>


            </div>

        </main>
        
    )
}