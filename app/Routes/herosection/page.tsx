import Image from "next/image"
import Link from "next/link"

export default function Herosection(){
    return(
        <main className="md:px-10 py-6">
            <div className="md:flex ">
                <div className="bg-[#2A254B] text-white pt-8 lg:pt-16 pl-5 md:pl-0 flex-1">
                    <h1 className="lg:text-3xl pl-5">The furniture brand for the <br /> future with timeless designs</h1>
                    <br />
                    <br />
                    <Link href = "/products">
                        <button className=" font-light text-sm bg-white bg-opacity-15 py-2 px-5 ml-5 lg:py-4 lg:px-6">View Collection</button>
                    </Link>

                    <h3 className="pt-20 md:pt-56 lg:pt-52 pl-5 pr-7 font-light text-sm md:text-base lg:text-xl">A new era in eco friendly furniture with Avelon the French luxury retail brand with nice fonts tasteful colors and a beautiful way to display things digitally 
                    using modern web technologies.</h3>
                </div>
                <div className="hidden md:flex flex-1 h-full relative" style={{minHeight: '584px'}}>
                    <Image src="/DandyCera.png" alt="avion" fill style={{objectFit: 'cover'}} className="max-w-full h-full" />
                </div>
            </div>
        </main>
    )
}
