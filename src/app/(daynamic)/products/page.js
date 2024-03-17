import Image from "next/image";
import Link from "next/link";
import styles from "./products.module.css";

export const metadata = {
  title: "Alsamara | Products",
  description: "Geting All Products From API ",
};

  async function getData() {
    const res = await fetch("https://dummyjson.com/products");
      if(!res.ok){
        return new Error("Failed to fetch Data")
      }
      return res.json();
  }

const Products = async () => {
  const products = await getData();


  const productsJSX = products.products.map((product) => (
    <>
      <div className={styles.product}>
        <div className={styles.product_discount}>
          <Image
            src={product.thumbnail}
            className={styles.product_image}
            alt=""
          />
          <sup className={styles.discount}> {product.category}</sup>
        </div>
        <h2 className={styles.product_title}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </h2>
        <p className={styles.product_description}>
          {product.description.length > 20
            ? product.description.slice(1, 60) + "..."
            : ""}
        </p>
        <p className={styles.product_price}>
          <span className={styles.price_word}> Price : </span>
          <span className={styles.price}> {product.price} </span>
        </p>
      </div>
    </>
  ));

  return (
    <div className={styles.page_container}>
      <div className={styles.products}>
        {productsJSX}
      </div>
    </div>
  );
};

export default Products;
