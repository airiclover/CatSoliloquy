import Head from "next/head";
import { Header } from "../components/header";
import { Footer } from "../components/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cat's Soliloquy</title>
      </Head>

      <Header />
      <div className="m-20">cat</div>
      <div className="m-20">cat</div>
      <div className="m-20">cat</div>
      <div className="m-20">cat</div>
      <div className="m-20">cat</div>
      <div className="m-20">cat</div>
      <div className="m-20">cat</div>
      <div className="m-20">cat</div>
      {/* <Footer /> */}
    </>
  );
}
