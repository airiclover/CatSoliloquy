import { Card } from "src/components/card";
import { BlogLayout } from "src/layouts/blog";
import { MainLayout } from "src/layouts/main";

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

export default function Blog(props) {
  return (
    <>
      <MainLayout>
        <BlogLayout>
          {/* <Card data={props.data} /> */}
          <Card pass="blog" data={props.data} />
        </BlogLayout>
      </MainLayout>
    </>
  );
}

// import { Card } from "src/components/card";
// import { BlogLayout } from "src/layouts/blog";
// import { MainLayout } from "src/layouts/main";

// export async function getStaticProps() {
//   const res = await fetch(`${process.env.BASE_URL}/rcms-api/1/blog`);
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//     revalidate: 60,
//   };
// }

// export default function Blog(props) {
//   return (
//     <>
//       <MainLayout>
//         <BlogLayout>
//           {/* <Card data={props.data} /> */}
//           <Card pass="blog" data={props.data} />
//         </BlogLayout>
//       </MainLayout>
//     </>
//   );
// }
