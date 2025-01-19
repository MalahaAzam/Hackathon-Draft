import Image from "next/image"


export default function Productlisting(){
    return(
        <main>

        <div className="flex flex-col md:flex-row"> 
            <div className="w-full md:w-1/2">
                <Image src="/DandyChair.png" alt="Dandy Chair" width={1440} height={1440} className="w-full h-auto md:w-[768px] md:h-[579px] lg:h-[787px]" />
            </div>
            <div className="p-6 md:p-[51px] w-full md:w-1/2 md:mt-6">

                  <h2 className="md:font-normal text-lg md:text-3xl">The Dandy Chair</h2>
                  <h3 className="md:font-normal mb-[13px] text-2xl md:text-3xl">$250</h3>

                  <div className="pt-10 pb-10 gap-4">
                      <p className="font-normal text-base md:text-lg mb-4">Description</p>
                      <p className="font-normal text-base md:text-lg mb-4">A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
                      <p className="font-normal text-base md:text-lg ">
                         .  Premium material <br />
                         .  Handmade upholstery <br />
                         .  Quality timeless classic
                      </p>
                  </div>
                  <div className="pt-5 gap-7">
                       <p className="font-normal text-base md:text-lg mb-7">Dimensions</p>
                      <div className="space-y-3 mb-5">
                            <div className="flex gap-4 md:gap-8">
                                 <p>Height</p>
                                <p>Width</p>
                                <p>Depth</p>
                            </div>

                             <div className="flex gap-4 md:gap-8">
                                <p>110cm</p>
                                <p>75cm</p>
                                <p>50cm</p>
                            </div>
                     </div>
                  </div>

              <div className="flex items-center pt-[27px] justify-between" >
                    <div className="flex gap-4 md:gap-12">
                        <p className="text-left">Amount:</p>
                        <p className="text-right">1</p>
                    </div>
                    <div>
                        <button className="bg-[#2A254B] text-white py-4 px-8">Add to cart</button>
                    </div>
              </div>

            </div>
            
        </div>

        <div className="px-8">
            <div>
                <h1 className="lg:text-2xl md:text-lg text-base"> New ceramics  </h1>
            </div>
            <br />
            <div className="md:flex justify-around">
                <div className="lg:text-l md:text-base text-sm">
                <Image src="/DandyCera.png" alt="image" width={305} height={375}></Image>
                <br />
                <h2>The Dandy chair</h2>
                
                <h2>£250</h2>
                </div>
<br />
                <div className="lg:text-l md:text-base text-sm">
                <Image src="/photo.png" alt="image" width={305} height={375}></Image>
                <br />
                <h2>Rustic Vase Set</h2>
                
                <h2>£155</h2>
                </div>
<br />
                <div className="lg:text-l md:text-base text-sm">
                <Image src="/silky.png" alt="image" width={305} height={375}></Image>
                <br />
                <h2>The Silky Vase</h2>
                
                <h2>£125</h2>
                </div>
<br />
                <div className="lg:text-l md:text-base text-sm">
                <Image src="/lucy.png" alt="image" width={305} height={375}></Image>
                <br />
                <h2>The Lucy Lamp</h2>

                <h2>£399</h2>
                </div>
            </div>
            <div className="text-center p-6 md:p-12">
            <button className=" font-light text-sm bg-slate-700 rounded bg-opacity-15 py-2 px-3 lg:py-4 lg:px-6 ">View collection</button>
            </div>

        </div>

        <div className="pt-5 md:pt-8 lg:pt-10 text-[#2A254B] px-8">
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

        </div>

        <div className="text-center">
        <div className="text-[#2A254B]">
            <h1 className="text-xl md:text-2xl">Join the club and get the benefits</h1>
            <br />
            <h2>Sign up for our newsletter and receive exclusive offers on new <br />ranges, sales, pop up stores and more</h2>
        </div>

        <div className="py-10">
                    <input type="email" className="border-b-gray-300 border-b-2 text-sm lg:text-base bg-gray-300 bg-opacity-15
                    py-3 px-4
                    lg:py-5 lg:pr-72" placeholder="your@email.com"/>
                    <button className="text-white bg-[#2A254B] py-3 px-4 lg:py-5 lg:px-8">Sign up</button>
                    </div>

    </div>
        

        </main>


    )
}