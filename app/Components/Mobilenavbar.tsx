import Image from 'next/image';
import Link from 'next/link';
import { AlignJustify } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "components/ui/sheet";

export default function Mobilenavbar() {
  return (
    <main>
      <Sheet>
        <SheetTrigger className="absolute top-6 left-6 my-1.5">
          <div>
            <AlignJustify />
          </div>
        </SheetTrigger>
        <SheetContent side={'right'}>
          <SheetHeader>
            <SheetTitle className='w-20'>
              <Image src="/Avion.png" alt="avion" width={118} height={24} />
            </SheetTitle>
            <SheetDescription>
              {/* Mobile icons section */}
              <div className='flex justify-around pt-4 w-full gap-3'>
                <Image src="/Vector.png" alt="vector" width={16} height={11} />
                <Image src="/Cart.png" alt="Cart" width={32} height={32} />
                <Image src="/Useravatar.png" alt="Wishlist" width={32} height={32} />
              </div>

              {/* Mobile Links Section */}
              <div className='pt-4 text-xs'>
                <p><Link href="/products?category=plant pots">Plant pots</Link></p>
                <p><Link href="/products?category=ceramics">Ceramics</Link></p>
                <p><Link href="/products?category=tables">Tables</Link></p>
                <p><Link href="/products?category=chairs">Chairs</Link></p>
                <p><Link href="/products?category=crockery">Crockery</Link></p>
                <p><Link href="/products?category=tableware">Tableware</Link></p>
                <p><Link href="/products?category=cutlery">Cutlery</Link></p>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </main>
  );
}
