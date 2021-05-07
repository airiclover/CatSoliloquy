// import Head from "next/head";
// import { Card } from "src/components/card";
// import { MainLayout } from "src/layouts/main";
// import { BlogLayout } from "src/layouts/blog";
// import { Profile } from "src/components/profile";
// import { Footer } from "src/components/footer";
// import { Top } from "src/components/top";

// export async function getStaticProps() {
//   const res = await fetch(`${process.env.BASE_URL}/rcms-api/1/blog`);
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//     revalidate: 60 * 60,
//   };
// }

// export default function Home(props) {
//   return (
//     <>
//       <Head>
//         <title>Cat's Soliloquy</title>
//       </Head>

//       <MainLayout>
//         <Top />
//         <BlogLayout>
//           <Card pass="blog" data={props.data} />
//         </BlogLayout>
//         <Profile />
//         <Footer />
//       </MainLayout>
//     </>
//   );
// }

import Head from "next/head";
import { Card } from "src/components/card";
import { MainLayout } from "src/layouts/main";
import { BlogLayout } from "src/layouts/blog";
import { Profile } from "src/components/profile";
import { Footer } from "src/components/footer";
import { Top } from "src/components/top";
import { ThemaButton } from "src/components/themaButton";

export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_URL}/rcms-api/1/blog`);
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 60 * 60,
  };
}

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Cat's Soliloquy</title>
      </Head>

      <MainLayout>
        {/* <ThemaButton /> */}
        <Top />
        <BlogLayout>
          <Card pass="blog" data={props.data} />
        </BlogLayout>
        <Profile />
        <Footer />
      </MainLayout>
    </>
  );
}
