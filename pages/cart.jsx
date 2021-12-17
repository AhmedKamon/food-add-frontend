import Image from 'next/image'
import styles from '../styles/cart.module.css'

function Cart() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr className={styles.tr}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quabtity</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image src='/img/pizza.png' alt='' layout='fill' objectFit='cover' />
                            </div>
                        </td>
                        <td>
                           <span className={styles.name}>CORALZO</span>
                        </td>
                        <td>
                           <span className={styles.extras}>Doboul ingridents, spice sauce</span>
                        </td>
                        <td>
                           <span className={styles.price}>$19.90</span>
                        </td>
                        <td>
                           <span className={styles.quabtity}>2</span>
                        </td>
                        <td>
                           <span className={styles.total}>$19.90</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image src='/img/pizza.png' alt='' layout='fill' objectFit='cover' />
                            </div>
                        </td>
                        <td>
                           <span className={styles.name}>CORALZO</span>
                        </td>
                        <td>
                           <span className={styles.extras}>Doboul ingridents, spice sauce</span>
                        </td>
                        <td>
                           <span className={styles.price}>$19.90</span>
                        </td>
                        <td>
                           <span className={styles.quabtity}>2</span>
                        </td>
                        <td>
                           <span className={styles.total}>$19.90</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>Cart Total</h2>
                        <div className={styles.totalText}>
                            <b className={styles.totalTextTitle}> Subtotal:</b> $79.60
                        </div>
                        <div className={styles.totalText}>
                            <b className={styles.totalTextTitle}> Discount:</b> $0.00
                        </div>
                        <div className={styles.totalText}>
                            <b className={styles.totalTextTitle}> Total:</b> $79.60
                        </div>
                        <button className={styles.button}>CHECKOUT NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
