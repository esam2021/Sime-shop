import Image from "next/image"
import styles from "./Footer.module.css"
import { social_media } from "./social_media";
const Footer = () => {
  return (
    <div className="container">
    <footer className={styles.footer}>
      <p>&copy; 2024 Alsamara. all rights reserved. </p>
      <div className={styles.social_media}>
        {social_media.map((media,key)=>(
          <Image src={`/images/social/${media.image}`} width={30} height={30} className={styles.social} alt={media.name} key={key}/>
        ))}
      </div>
    </footer>
    </div>
  )
}

export default Footer