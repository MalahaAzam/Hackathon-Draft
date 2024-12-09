import Image from "next/image"
export default function Features(){
    return(
        <main className="pt-5 md:pt-8 lg:pt-10 text-[#2A254B] px-8">
            <div className="text-center text-lg">
               <h1 >What makes our brand different</h1>
            </div>
            <div className="md:flex justify-around py-5 md:py-8 lg:py-10 ">
                <div>
                <Image src="/truck.png" alt="truck" width={20} height={20} />
                <h1 className="text-xs md:text-sm lg:text-base font-medium">Next day as standard</h1>
                <h2 className="text-xs md:text-sm lg:text-base ">Order before 3pm and get your order <br /> the next day as standard</h2>

                </div>
<br />
                <div>
                <Image src="/check.png" alt="check" width={20} height={20} />
                <h1 className="text-xs md:text-sm lg:text-base font-medium">Made by true artisans</h1>
                <h2 className="text-xs md:text-sm lg:text-base ">Handmade crafted goods made with <br />real passion and craftmanship</h2>

                </div>
<br />
                <div>
                <Image src="/purchase.png" alt="purchase" width={20} height={20} />
                <h1 className="text-xs md:text-sm lg:text-base font-medium">Unbeatable prices</h1>
                <h2 className="text-xs md:text-sm lg:text-base ">For our materials and quality you <br /> wont find better prices anywhere</h2>

                </div>
<br />
                <div>
                <Image src="/Sprout.png" alt="sprout" width={20} height={20} />
                <h1 className="text-xs md:text-sm lg:text-base font-medium">Recycled packaging</h1>
                <h2 className="text-xs md:text-sm lg:text-base ">We use 100% recycled packaging to <br /> ensure our footprint is manageable</h2>

                </div>
            </div>

        </main>
    )
}