import Image from 'next/image'
import { useState } from 'react'
import styles from '../../styles/product.module.css'

function Product() {
    const [size,setSize] = useState(0)
    const pizza = {
        id: 1,
        img: '/img/pizza.png',
        name: 'CAMPAGNOLA',
        price: [19.9, 23.9, 27.9],
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ab?'
    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imageContainer}>
                    <Image src={pizza.img} alt='' objectFit='contain' layout='fill'/>
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.name}</h1>
                <span className={styles.price} >$ {pizza.price[0]}</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h3 className={styles.choose}>Chose your size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size}>
                        <Image src='/img/size.png' alt='' layout='fill'  />
                        <span className={styles.number}>small</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
