import { Header } from "src/components/header";
import Head from "next/head";
import { FooterNav } from "src/components/footerNav";

export function MainLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/img/favicon.ico" />
        <title>Cat's Soliloquy</title>
      </Head>

      <Header />
      <main className="pb-14 text-gray-900">{children}</main>
      <FooterNav />
    </>
  );
}
