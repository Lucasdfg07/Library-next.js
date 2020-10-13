import { useSelector } from 'react-redux';

import styles from '../../../styles/shared/header.module.css';
import BookImage from '../../../public/coffee.png';

import Link from 'next/link';

export default function Header() {
    const cartSize = useSelector(state =>
        state.cart.reduce((countProducts, product) => {
          return countProducts + product.amount;
        }, 0)
    );

    const total = useSelector(state =>
        state.cart.reduce((totalSum, product) => {
          return totalSum + product.price * product.amount;
        }, 0)
    );

    return(
        <header className={styles.header}>
            <img src={BookImage} className={styles.img} />
            
            <div className={styles.cart_phrase}>
                <Link href="/">Home</Link> | <Link href="/cart">Carrinho</Link> <strong>{cartSize}</strong> livros | <strong>R$ { total.toFixed(3).slice(0,-1) }</strong>
            </div>
        </header>
    )
}