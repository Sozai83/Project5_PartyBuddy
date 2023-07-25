import styles from './Product.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'

export default function Product() {
    return (
        <section className={styles.productsWrapper}>
            <figure className={styles.productWrapper}>
                <Link href="https://shiori-portfolio.vercel.app/contact">
                    <Image
                        src="/img/liquor/sample_liquor.jpg"
                        width={70}
                        height={120}
                        alt="Sample Cocktail"
                    />
                </Link>
                <h3>Bacardi Rum</h3>
                <h3>$ 20<span>.00</span></h3>
            </figure>
            <figure className={styles.productWrapper}>
                <Link href="https://shiori-portfolio.vercel.app/contact">
                    <Image
                        src="/img/liquor/sample_liquor.jpg"
                        width={70}
                        height={120}
                        alt="Sample Cocktail"
                    />
                    <h3>Bacardi Rum</h3>
                    <h3>$ 20<span>.00</span></h3>
                </Link>

            </figure>
            <figure className={styles.productWrapper}>
                <Link href="https://shiori-portfolio.vercel.app/contact">
                    <Image
                        src="/img/liquor/sample_liquor.jpg"
                        width={70}
                        height={120}
                        alt="Sample Cocktail"
                    />
                    <h3>Bacardi Rum</h3>
                    <h3>$ 20<span>.00</span></h3>
                </Link>
            </figure>
        </section>
    )
}