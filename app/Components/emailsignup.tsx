export default function Emailsignup(){
    return(
        <main className="text-center">
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
    
        </main>
    )
    }