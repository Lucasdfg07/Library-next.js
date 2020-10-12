import styles from '../../../styles/shared/header.module.css';
import BookImage from '../../../public/coffee.png';

import Link from 'next/link';

export default function Header() {
    return(
        <header className={styles.header}>
            <img src={BookImage} className={styles.img} />
            
            <div className={styles.cart_phrase}>
                <Link href="/">Home</Link> | <Link href="/">Carrinho</Link>
            </div>
        </header>
    )
}