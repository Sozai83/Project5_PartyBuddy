import { pickCocktail, getFilteredCocktail } from '@/app/api/api';
import styles from './Lottery.module.scss'
import Image from 'next/image'
import { useState } from 'react';
import Filtering from '../filtering/Filtering';
import { NodeBuilderFlags } from 'typescript';

export default function Lottery({ setResult }: any) {
    const [filtering, setFiltering] = useState(false);
    const [filteredAlcohol, setFilteredAlcohol] = useState(null);
    return (
        <section className={styles.optionWrapper}>
            <h1>Let us decide what you're gonna have tonight!</h1>
            {filteredAlcohol &&
                <h2>Filtering with: {filteredAlcohol}</h2>}
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
                <button className={styles.filtering}
                    onClick={() => setFiltering(true)}>
                    Filtering
                </button>
                <button className={styles.lottery}
                    onClick={() => filteredAlcohol ? getFilteredCocktail(filteredAlcohol, setResult) : pickCocktail(setResult)}>
                    Pick Cocktail
                </button>
            </section>
            {filtering && <Filtering
                setFilteredAlcohol={setFilteredAlcohol}
                setFiltering={setFiltering}
            />}
        </section>
    )
}