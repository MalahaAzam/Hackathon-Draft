import Image from "next/image"
export default function Landingpage(){
    return(
        <main className="md:flex">
            <div className="p-6 lg:pt-28">
                <h1 className="font-semibold text-lg md:text-xl lg:text-2xl">From a studio in London to a global brand with <br />
                over 400 outlets</h1>
                <br />
                <br />

                <h2>
                    When we started Avion, the idea was simple. Make high quality furniture <br />affordable and available for the mass market. <br /> <br /> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
                </h2>
            </div>
            <div>
            <Image src="/furniture.png" alt="image" width={1380} height={603}></Image>
            </div>
        </main>

    )

    
}