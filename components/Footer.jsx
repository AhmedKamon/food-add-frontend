import Image from 'next/image'
import styles from '../styles/footer.module.css'

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src='/img/bg.png' layout='fill' alt='' objectFit='cover' />
            </div>
            <div className={styles.item}>
            <div className={styles.card}>
                <h2 className={styles.moto}>Lets Trust In Test</h2>
            </div>
            <div className={styles.card}>
                <h1 className={styles.title}>FIND OUR RESTURENT</h1>
                <p className={styles.text}>Banarupa Rangamati, Bangladesh
                <br /> Bangladesh, 1971
                <br /> 01878278574
                </p>
                <p className={styles.text}>Banarupa Rangamati, Bangladesh
                <br /> Bangladesh, 1971
                <br /> 01878278574
                </p>
                <p className={styles.text}>Banarupa Rangamati, Bangladesh
                <br /> Bangladesh, 1971
                <br /> 01878278574
                </p>
                <p className={styles.text}>Banarupa Rangamati, Bangladesh
                <br /> Bangladesh, 1971
                <br /> 01878278574
                </p>
            </div>
            <div className={styles.card}>
            <h1 className={styles.title}>WORKING HOURS</h1>
            <p className={styles.text}>
                MONDAY UNTIL FRIDAY
                <br />12:00 - 24:00
            </p>
            <p className={styles.text}>
                SATURDAY UNTIL SUNDAY
                <br />12:00 - 24:00
            </p>
            </div>
            </div>
        </div>
    )
}

export default Footer
