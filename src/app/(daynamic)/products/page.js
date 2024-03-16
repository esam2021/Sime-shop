import Image from "next/image";
import Link from "next/link";
import styles from "./products.module.css";

export const metadata = {
  title: "Alsamara | Products",
  description: "Geting All Products From API ",
};

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Products = async () => {
  const data = await getData();
  console.log(data);

  const productsJSX = data.map((product) => (
    <>
      <div className={styles.product}>
        <div className={styles.product_discount}>
          {/* <Image
            src=""
            width={200}
            height={200}
            className={styles.product_image}
            alt=""
          /> */}
          <sup className={styles.discount}> {product.id} %</sup>
        </div>
        <h2 className={styles.product_title}>
          <Link href={`/products/${product.id}`}>
            {product.title.length > 10
              ? product.title.slice(1, 10) + "..."
              : ""}
          </Link>
        </h2>
        <p className={styles.product_description}>{product.body}</p>
        {/* <p className={styles.product_price}>
          <span className={styles.price_word}> Price : </span>
          <span className={styles.price}> 200 </span>
        </p> */}
      </div>
    </>
  ));

  return (
    <div className={styles.page_container}>
      <div className={styles.products}>{productsJSX}</div>
    </div>
  );
};

export default Products;
