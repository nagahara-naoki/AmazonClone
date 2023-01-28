import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { ProductFeed } from "@/components/ProductFeed";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>AmazonCloneApplication</title>
      </Head>
      <Header />
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch("https://fakestoreapi.com/products/");
  const products = await res.json();
  // const products = await fetch("https://fakestoreapi.com/products/").then((res) => res.json());
  console.log(products);
  return {
    props: {
      products,
    },
  };
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://.../data`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }

// export default Page
