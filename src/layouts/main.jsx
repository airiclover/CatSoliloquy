import { Header } from "src/components/header";
import { FooterNav } from "src/components/footerNav";

export function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="text-gray-900 pb-14 lg:pb-0 dark:text-white">
        {children}
      </main>
      <FooterNav />
    </>
  );
}
