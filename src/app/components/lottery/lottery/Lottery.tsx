import { pickCocktail } from '@/app/api/api';
import styles from './Lottery.module.scss'
import Image from 'next/image'
import { useState } from 'react';
import Filtering from '../filtering/Filtering';

export default function Lottery({ setResult }: any) {
    const [filtering, setFiltering] = useState(true);
    return (
        <section className={styles.optionWrapper}>
            <h1>Let us decide what you're gonna have tonight!</h1>
            <figure>
                <Image
                    src="/bartender.jpg"
                    width={400}
                    height={400}
                    alt="Party Buddy Logo"
                />
                <sup><a href="https://www.freepik.com/free-vector/cocktail-bartender-concept-illustration_25026369.htm#query=illustrations%20bartender&position=1&from_view=search&track=ais">Image by storyset</a> on Freepik</sup>
            </figure>
            <section className={styles.buttons}>
                <button className={styles.filtering}>Filtering</button>
                <button className={styles.lottery} onClick={() => pickCocktail(setResult)}>Pick Cocktail</button>
            </section>
            {filtering && <Filtering />}
        </section>
    )
}