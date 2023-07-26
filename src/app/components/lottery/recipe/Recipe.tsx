import styles from './Recipe.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Product from './product/Product'

export default function Recipe({ result }: any) {
    return (
        <section className={styles.recipeWrapper}>
            <section className={styles.top}>
                <h1>Cocktail Name</h1>
            </section>
            <section className={styles.ingredients}>
                <figure className={styles.resultImg}>
                    <Image
                        src="/img/cocktail/sample_cocktail.jpg"
                        width={300}
                        height={300}
                        alt="Sample Cocktail"
                    />
                </figure>
                <section className={styles.ingredientsDesc}>
                    <h2>Ingredients <span>Serving: X</span></h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Vodka</td>
                                <td>1 oz</td>
                            </tr>
                            <tr>
                                <td>Vodka</td>
                                <td>1 oz</td>
                            </tr>
                            <tr>
                                <td>Vodka</td>
                                <td>1 oz</td>
                            </tr>
                            <tr>
                                <td>Vodka</td>
                                <td>1 oz</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </section>


            <section className={styles.recipe}>
                <ul>
                    <li>
                        step1
                    </li>
                    <li>
                        step2
                    </li>
                    <li>
                        step3
                    </li>
                    <li>
                        step1
                    </li>
                    <li>
                        step2
                    </li>
                    <li>
                        step3
                    </li>
                    <li>
                        step1
                    </li>
                    <li>
                        step2
                    </li>
                    <li>
                        step3
                    </li>
                    <li>
                        step1
                    </li>
                    <li>
                        step2
                    </li>
                    <li>
                        step3
                    </li>
                </ul>
            </section>
            <Product />
        </section>
    )
}