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
      <main className="text-gray-900 pb-14 lg:pb-0">{children}</main>
      <FooterNav />
    </>
  );
}
