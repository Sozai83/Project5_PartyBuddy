import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import styles from './Result.module.scss'
import Image from 'next/image'
import { useRef, useState } from 'react';


interface Obj {
    strDrinkThumb: string;
    strDrink: string;
}

interface Props {
    result: Obj | boolean;
    setResult: any;
    setShowRecipe: any;
}


export default function Result(props: Props) {
    const { result, setResult, setShowRecipe } = props;
    const drinkImg = (result as Obj).strDrinkThumb || "/img/cocktail/sample_cocktail.jpg";
    const drinkName = (result as Obj).strDrink || "Sample Cocktail";
    const [loading, setLoading] = useState('loading');
    const counter = useRef(0);
    const imageLoaded = () => {
        setTimeout(() => setLoading('loaded'), 1000);
    }
    const resetResult = () => {
        setResult(false);
        setShowRecipe(false);
    }
    const showRecipe = () => setShowRecipe(true);
    return (
        <>
            <figure
                className={`${styles.loadingImg} ${styles[loading]}`}>
                <Image
                    src="/bartender.jpg"
                    width={400}
                    height={400}
                    alt="Party Buddy Logo"
                />
            </figure>
            <section className={`${styles.resultWrapper} ${styles[loading]}`}>
                <figure
                    className={styles.resultImg}>
                    <img
                        src={drinkImg}
                        alt={drinkName}
                        onLoad={imageLoaded}
                />
            </figure>
            <section className={styles.resultDesc}>
                <h1>{drinkName}</h1>
                <section className={styles.buttons}>
                        <button className={styles.seeRecipe} onClick={showRecipe}>
                            See Recipe
                        </button>
                    <button className={styles.tryAgain} onClick={resetResult}>
                        <FontAwesomeIcon icon={faRotateRight} />
                    </button>
                </section>
            </section>
        </section>
        </>
    )
}