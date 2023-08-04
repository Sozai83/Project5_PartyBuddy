import { pickCocktail } from '@/app/api/api';
import styles from './Filtering.module.scss'
import Image from 'next/image'

export default function Filtering({ setResult }: any) {
    return (
        <section className={styles.filteringWrapper}>
            <form>
                <div className={styles.radio}>
                    <input type="radio" id="gin" name="alcohol" value="Gin" />
                    <label htmlFor="gin">Gin</label>
                </div>
                <div className={styles.radio}>
                    <input type="radio" id="vodka" name="alcohol" value="Vodka" />
                    <label htmlFor="vodka">Vodka</label>
                </div>
                <div className={styles.radio}>
                    <input type="radio" id="tequila" name="alcohol" value="Tequila" />
                    <label htmlFor="tequila">Tequila</label>
                </div>
                <div className={styles.radio}>
                    <input type="radio" id="whiskey" name="alcohol" value="Whiskey" />
                    <label htmlFor="whiskey">Whiskey</label>
                </div>
                <div className={styles.radio}>
                    <input type="radio" id="rum" name="alcohol" value="Rum" />
                    <label htmlFor="rum">Rum</label>
                </div>
                <div className={styles.radio}>
                    <input type="radio" id="bourbon" name="alcohol" value="Bourbon" />
                    <label htmlFor="bourbon">Bourbon</label>
                </div>
                <div className={styles.radio}>
                    <input type="radio" id="scotch" name="alcohol" value="Scotch" />
                    <label htmlFor="scotch">Scotch</label>
                </div>
            </form>
        </section>
    )
}