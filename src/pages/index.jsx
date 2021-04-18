import { Header } from "src/components/header";
import { Footer } from "src/components/footer";
import Head from "next/head";

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
      <Footer />
    </>
  );
}
