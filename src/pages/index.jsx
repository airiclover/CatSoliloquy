import { Card } from "src/components/card";
import { MainLayout } from "src/layouts/main";
import { BlogLayout } from "src/layouts/blog";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MainLayout>
        <BlogLayout></BlogLayout>
      </MainLayout>
    </>
  );
}
