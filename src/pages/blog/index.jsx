import Link from "next/link";

// export const getStaticProps = async () => {
//   try {
//     const res = await fetch(`${process.env.BASE_URL}/rcms-api/1/blog`);
//     const data = await res.json();
//     console.log(data);

//     return {
//       props: { data }
//     }
//   } catch (e) {
//     console.log(e.message);
//   }
// };

import axios from "axios";

axios
  .get(process.env.BASE_URL + "/rcms-api/1/blog")
  // .get("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    console.log(response);
  });

// https://jsonplaceholder.typicode.com/posts
// export async function getServerSideProps() {
//   const res = await fetch(process.env.BASE_URL + "/rcms-api/1/blog");
//   const posts = await res.json();
//   console.log(posts);
//   return { props: { posts } };
// }

export default function Blog(props) {
  return (
    <div>
      {/* {console.log(props.data)} */}
      {/* <Link href={}></Link> */}
      <div>blog</div>
      {/* {props.post} */}
    </div>
  );
}
