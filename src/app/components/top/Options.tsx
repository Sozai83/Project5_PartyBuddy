import styles from './Options.module.scss'
import Image from 'next/image'

export default function Options() {
    return (
      <section className={styles.optionWrapper}>
        <h1>How can we help?</h1>
        <figure>
            <Image 
            src="/bartender.jpg"
            width={200}
            height={200}
            alt="Party Buddy Logo"
            />
            <sup><a href="https://www.freepik.com/free-vector/cocktail-bartender-concept-illustration_25026369.htm#query=illustrations%20bartender&position=1&from_view=search&track=ais">Image by storyset</a> on Freepik</sup>
        </figure>
        
      </section>
    )
  }