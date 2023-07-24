import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import styles from './Result.module.scss'
import Image from 'next/image'

export default function Result() {
    return (
        <section className={styles.resultWrapper}>
            <figure className={styles.resultImg}>
                <Image
                    src="/img/cocktail/sample_cocktail.jpg"
                    width={400}
                    height={400}
                    alt="Sample Cocktail"
                />
            </figure>
            <section className={styles.resultDesc}>
                <h1>Cocktail Name</h1>
                <p>Description</p>
                <section className={styles.buttons}>
                    <button className={styles.seeRecipe}>See Recipe</button>
                    <button className={styles.tryAgain}>
                        <FontAwesomeIcon icon={faRotateRight} />
                    </button>
                </section>
            </section>
        </section>
    )
}