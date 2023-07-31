import styles from './Recipe.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Product from './product/Product'

interface props {
    result: {
        strDrink: string,
        strInstructions: string,
        [key: string]: string,
    }
}

export default function Recipe(props: props) {
    const { result } = props;
    const cocktailName = result?.strDrink || 'SAMPLE COCKTAIL NAME';
    const cocktailRecipe = result?.strInstructions || 'SAMPLE RECEPE';

    //Split recipe into array > jsx
    const recipeSteps = cocktailRecipe
        .replaceAll("!", ".")
        .split(".")
        .filter((item) => item.length > 0);

    const recipeStepsHtml = recipeSteps.map((step: string, key: number) => {
        if (step.length > 0) {
            return (<li key={key + 1}>Step {key + 1}: {step}</li>);
        }
    })

    //Extract ingredients and the mesurements
    const ingredients = Object.keys(result)
        .filter((key) => key.includes("strIngredient"))
        .reduce((cur, key) => { return Object.assign(cur, { [key]: result[key] }) }, {});

    const ingredientsHtml = Object.keys(ingredients).map((item) => {
        if (ingredients[item]) {
            let ingredientsKey = 'strMeasure' + item.split("strIngredient")[1];
            let amount = result[ingredientsKey];
            return (
                <tr>
                    <td>{ingredients[item]}</td>
                    <td>{amount}</td>
                </tr>
            )
        }
    })

    return (
        <section className={styles.recipeWrapper}>
            <section className={styles.top}>
                <h1>{cocktailName}</h1>
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
                    <h2>Ingredients</h2>
                    <table>
                        <tbody>
                            {ingredientsHtml}
                        </tbody>
                    </table>
                </section>
            </section>


            <section className={styles.recipe}>
                <ul>
                    {recipeStepsHtml}
                </ul>
            </section>
            <Product />
        </section>
    )
}