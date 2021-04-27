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

      <div className="relative">
        <Header />
        <main className="min-h-screen pt-14 pb-8 text-gray-900">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
