import Head from "next/head";
import Image from "next/image";
import Header from "./Header";

const Layout = ({children, title, isPokemon}) => {

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            
            <Header isPokemon={isPokemon}/>

            <main className="container mx-auto flex flex-col justify-center items-center">
                {children}
            </main>

            <footer className="flex justify-center items-center mt-10">
                {/* <a
                    className="flex flex-col"
                    href="https://domthedev.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <Image src="/domthedev.png" alt="Dom the dev Logo" width={72} height={72}/>
                </a> */}
            </footer>
        </div>
    );
};

export default Layout;