import styles from './Recipe.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Product from './product/Product'

interface props {
    result: any
}

export default function Recipe(props: props) {
    const { result } = props;
    const drinkImg = result?.strDrinkThumb || "/img/cocktail/sample_cocktail.jpg";
    const cocktailName = result?.strDrink || 'SAMPLE COCKTAIL NAME';
    const cocktailRecipe = result?.strInstructions || 'SAMPLE RECEPE';

    //Split recipe into array > jsx
    const recipeSteps = cocktailRecipe
        .replaceAll("!", ".")
        .split(".")
        .filter((item: string) => item.length > 0);

    const recipeStepsHtml = recipeSteps.map((step: string, key: number) => {
        if (step.length > 0) {
            return (<li key={key + 1}>Step {key + 1}: {step}</li>);
        }
    })

    //Extract ingredients and the mesurements
    const ingredients = Object.keys(result)
        .filter((id: string) => id.includes("strIngredient"))
        .reduce((cur: string, id: string | number) => { return Object.assign(cur, { [id]: result[id] }) }, {});

    const ingredientsHtml = Object.keys(ingredients).map((item: any) => {
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
                        src={drinkImg}
                        width={300}
                        height={300}
                        alt={cocktailName}
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