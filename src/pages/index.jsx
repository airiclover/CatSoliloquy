import { Card } from "src/components/card";
import { MainLayout } from "src/layouts/main";
import { BlogLayout } from "src/layouts/blog";

export default function Home() {
  return (
    <>
      <MainLayout>
        <BlogLayout>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </BlogLayout>
      </MainLayout>
    </>
  );
}
