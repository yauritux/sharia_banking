import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const loggedIn = { 
        $id: '1', 
        userId: '1', 
        name: 'yauritux',
        firstName: 'Yauri', lastName: 'Attamimi', 
        address1: 'Kalibata',
        city: 'Jakarta',
        postalCode: '12750',
        state: 'DKI Jakarta',
        dateOfBirth: '1982-01-18',
        ssn: '123456789',
        email: 'yaurigneel@gmail.com',
        dwollaCustomerUrl: 'https://yauritux.link',
        dwollaCustomerId: '12345678',
     };

    return (
        <main className="flex h-screen w-full font-inter">
            <Sidebar user={loggedIn} />

            <div className="flex size-full flex-col">
                <div className="root-layout">
                    <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
                    <div>
                        <MobileNav user={loggedIn} />
                    </div>
                </div>

                {children}                
            </div>            
        </main>
    );
}