import Image from 'next/image'
import styles from './Header.module.scss'

export default function Header() {
    return (
        <section className={styles.header}>
            <Image
                src="/favicon.png"
                width={160}
                height={160}
                alt="Party Buddy Logo"
            />
            <h1>Bar Buddy</h1>
        </section>
    )
}


