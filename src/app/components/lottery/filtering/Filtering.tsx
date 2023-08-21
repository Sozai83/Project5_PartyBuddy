import styles from './Filtering.module.scss'
import Image from 'next/image'

export default function Filtering({ setFilteredAlcohol, setFiltering }: any) {
    const setSelectedAlcohol = () => {
        const selectedEl = document.querySelector("input[type='radio'][name=alcohol]:checked");
        if (selectedEl) {
            const filtering = selectedEl.value;
            setFilteredAlcohol(filtering);
        }
    }
    const clearFiltering = (e: any) => {
        e.preventDefault();
        const els = document.querySelectorAll("input[type='radio'][name=alcohol]");
        if (els) {
            els.forEach(el => el.checked = false);
        }
        setFilteredAlcohol(null);
    }

    const closeFiltering = (e: any) => {
        e.preventDefault();
        setFiltering(false);
    }

    return (
        <section className={styles.filteringWrapper}>
            <div className={styles.inner}>
                <form onChange={setSelectedAlcohol}>
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
                <div className={styles.clearFiltering}>
                    <button onClick={clearFiltering}>Clear filtering</button>  
                </div>
                <button className={styles.close}
                    onClick={closeFiltering}></button>
            </div>

        </section>
    )
}