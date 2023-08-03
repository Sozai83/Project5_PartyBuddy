import { pickCocktail } from '@/app/api/api';
import styles from './Filtering.module.scss'
import Image from 'next/image'

export default function Filtering({ setResult }: any) {
    return (
        <section className={styles.filteringWrapper}>
            <form>
                <div className={styles.radio}>
                    <input type="radio" id="html" name="alcohol" value="HTML" />
                    <label htmlFor="html">HTML</label>
                </div>
                <div className={styles.radio}>
                    <input type="radio" id="gin" name="alcohol" value="gin" />
                    <label htmlFor="gin">Gin</label>
                </div>
                <div className={styles.radio}>
                    <input type="radio" id="vodka" name="alcohol" value="vodka" />
                    <label htmlFor="vodka">Vodka</label>
                </div>
            </form>
        </section>
    )
}