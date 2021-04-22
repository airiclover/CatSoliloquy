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

// axios
//   .get(process.env.BASE_URL + "/rcms-api/1/blog")
//   .then(function (response) {
//     console.log(response);
//   });

// https://jsonplaceholder.typicode.com/posts/1
// export async function getStaticProps() {
//   const res = await fetch(process.env.BASE_URL + "/rcms-api/1/blog");
//   const posts = await res.json();
//   console.log(posts);
//   return { props: { posts } };
// }

export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_URL}/rcms-api/1/blog`);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
    revalidate: 60 * 60,
  };
}

export default function Blog(props) {
  console.log(props);
  // const { lists } = props;

  return (
    <div>
      {/* {console.log(props.data)} */}
      {/* <Link href={}></Link> */}
      <div>blog</div>
      {props.data.list[0].ymd}
      <br />
      {props.data.list[0].subject}
      <br />
      {props.data.list[0].contents}
    </div>
  );
}
