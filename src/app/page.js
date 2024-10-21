import Image from "next/image";
import Homepage from "./component/Home/Homepage";
import Head from "next/head";

export default function Home() {
  return (
    <>
     <Head>
        <title>{"Best Haircut Salon in the City"}</title>
        <link rel="canonical" href={``} />
        <meta property="og:type" content="Home" />
        <meta property="og:title" content={"Barbex"} />
      </Head>
    <div className='text-5xl'>
      <Homepage/>
    </div>
    </>
  );
}
