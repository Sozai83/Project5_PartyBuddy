import styles from './Lottery.module.scss'
import Image from 'next/image'

export default function Lottery() {
    return (
        <section className={styles.optionWrapper}>
            <h1>Let us decide what you're gonna have tonight!</h1>
            <figure>
                <Image
                    src="/bartender.jpg"
                    width={500}
                    height={500}
                    alt="Party Buddy Logo"
                />
                <sup><a href="https://www.freepik.com/free-vector/cocktail-bartender-concept-illustration_25026369.htm#query=illustrations%20bartender&position=1&from_view=search&track=ais">Image by storyset</a> on Freepik</sup>
            </figure>
            <section className={styles.buttons}>
                <button className={styles.filtering}>Filtering</button>
                <button className={styles.lottery}>Pick Cocktail</button>
            </section>
        </section>
    )
}