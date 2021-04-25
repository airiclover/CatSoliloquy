import { Card } from "src/components/card";
import { MainLayout } from "src/layouts/main";
import { BlogLayout } from "src/layouts/blog";
import { Profile } from "src/components/profile";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_URL}/rcms-api/1/blog`);
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}

export default function Home(props) {
  // console.log(props);
  return (
    <>
      <MainLayout>
        <BlogLayout>
          <Card pass="blog" data={props.data} />
        </BlogLayout>
        <Profile />
      </MainLayout>
    </>
  );
}
