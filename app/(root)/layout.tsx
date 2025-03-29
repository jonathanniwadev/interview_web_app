import  { ReactNode } from 'react'
import Link from "next/link";
import Image from "next/image";
import {text} from "node:stream/consumers";
import {isAuthenticated} from "@/lib/actions/auth.action";
import {redirect} from "next/navigation";

const RootLayout = async ( { children }: {children: ReactNode}) => {
     const isUserAuthenticated  = await  isAuthenticated();

     if(!isUserAuthenticated) redirect('/sign-in');
    return (
        <div className="root-layout">
            <nav>
              {/*  logo design below*/}
              <Link href="/" className="felx items-center gap-2 ">
                  <Image src="/logo.svg" alt="logo" width={38}
                         height={32} />

                  <h2 className="text-primary-100">Rehearsa</h2>
              </Link>
            </nav>
            {children}

        </div>
    )
}
export default RootLayout
