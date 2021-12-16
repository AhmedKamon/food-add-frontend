import styles from '../styles/pizzaList.module.css'
import PizzaCard from './PizzaCard'

function PizzaList() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>GRATEST PIZZA EVER</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore omnis quia, possimus quas soluta facilis exercitationem expedita fugiat asperiores inventore.</p>
            <div className={styles.wrapper}>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
            </div>
        </div>
    )
}

export default PizzaList
