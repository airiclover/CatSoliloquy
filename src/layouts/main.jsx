import { Header } from "src/components/header";
import { FooterNav } from "src/components/footerNav";
import { useEffect, useState } from "react";

export function MainLayout({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

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
