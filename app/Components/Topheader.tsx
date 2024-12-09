import Image from "next/image"
export default function Topheader(){
    return(
       <main>
<div className="flex justify-center items-center bg-[#2A254B] text-[#FAFAFA] h-7 text-[9px] w-screen  pl-4 md:gap-20 md:text-sm md:h-15 lg:gap-36 lg:pl-40 xl:gap-[231px] xl:pl-80" >

<div className="flex gap-3">
    <h1 className="flex items-center gap-2">
    <Image src="/delivery.png" alt="delivery" width={20} height={20} />
        <div>Free delivery on all orders over £50 with code easter checkout</div>
    </h1>
</div>


<div className="">
        <p className="flex items-center pl-36">
        <Image src="/close.png" alt="close" width={20} height={20} />
        </p>
</div>
</div>
       </main> 
    )
}