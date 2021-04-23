import { Footer } from "src/components/footer";
import { Header } from "src/components/header";
import Head from "next/head";

export function MainLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/img/favicon.ico" />
        <title>Cat's Soliloquy</title>
      </Head>

      <Header />
      <main className="mx-6 min-h-full pt-14 text-gray-900">{children}</main>
      <Footer />
    </>
  );
}
