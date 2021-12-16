import Image from 'next/image';
import styles from '../styles/pizzaCard.module.css'

function PizzaCard() {
    return (
        <div className={styles.container}>
            <Image src='/img/pizza.png' width={500} height={500} alt='' />
            <h1 className={styles.title} >FIORI DI ZUCCA</h1>
            <span className={styles.price}>$19.90</span>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, accusantium.</p>
        </div>
    )
}

export default PizzaCard;