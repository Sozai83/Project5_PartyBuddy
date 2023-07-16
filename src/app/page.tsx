import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.logo}>
        <Image 
          src="/favicon.png"
          width={500}
          height={500}
          alt="Party Buddy Logo"
        />
        <h1>Bar Buddy</h1>
        <h2>We help you pick a cocktail tonight</h2>
      </section>
    </main>
  )
}
