import Image from "next/image";
import Link from "next/link";
import styles from "../products.module.css"


// export const metadata = {
//   title: "Alsamara | Products",
//   description: "Geting All Products From API ",
// };

export async function generateMetadata({ params}) {
  const id = params.productId
 
  // fetch data
  const product = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((res) => res.json());
 
 
  return {
    title: product.title,
  }
}
 

const getData = async(id)=>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if(!res.ok){
    throw new Error("Failed to fetch data");
  } 
  return res.json();
}

const Product = async ({params}) => {
  const productId = params.productId
  const product = await getData(productId);
  

  return (
    <div className="container">
      <div className={styles.product}>
        <div className={styles.product_discount}>
          <Image
            src={product.thumbnail}
            width={200}
            height={200}
            className={styles.product_image}
            alt={product.title}
          />
          <sup className={styles.discount}> {product.category} </sup>
        </div>
        <h2 className={styles.product_title}>{product.title}</h2>
        <p className={styles.product_description}>{product.description}</p>
        <p className={styles.product_price}>
          <span className={styles.price_word}> Price : </span>
          <span className={styles.price}> {product.price} </span>
        </p>
      </div>
    </div>
  );
}

export default Product