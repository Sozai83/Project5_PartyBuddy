import Image from 'next/image'
import styles from './LoadingImage.module.scss'

export default function LoadingImage() {
  return (
    <section className={styles.logo}>
      <Image
        src="/favicon.png"
        width={400}
        height={400}
        alt="Party Buddy Logo"
      />
      <h1>Bar Buddy</h1>
      <h2>We help you pick a cocktail tonight</h2>
    </section>
  )
}


