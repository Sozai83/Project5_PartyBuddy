import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import styles from './Result.module.scss'
import Image from 'next/image'

export default function Result({ result, setResult }: any) {
    const drinkImg = result.strDrinkThumb || "/img/cocktail/sample_cocktail.jpg";
    const drinkName = result.strDrink || "Sample Cocktail";
    const resetResult = () => setResult(false);
    return (
        <section className={styles.resultWrapper}>
            <figure className={styles.resultImg}>
                <Image
                    src={drinkImg}
                    width={400}
                    height={400}
                    alt={drinkName}
                />
            </figure>
            <section className={styles.resultDesc}>
                <h1>{drinkName}</h1>
                <section className={styles.buttons}>
                    <button className={styles.seeRecipe}>See Recipe</button>
                    <button className={styles.tryAgain} onClick={resetResult}>
                        <FontAwesomeIcon icon={faRotateRight} />
                    </button>
                </section>
            </section>
        </section>
    )
}