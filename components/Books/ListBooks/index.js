import React, {useEffect} from 'react';

import styles from '../../../styles/list_books.module.css';

export default function ListBooks(props) {
    useEffect(() => {
        console.log(props);
    });

    return (
        <div className="col-md-4 text-center">
            <div className={styles.box}>
                <img src={props.book.photo} />
            
                {props.book.title}

                <hr />
                
                <h4>R$ {props.book.price}</h4>
                <small>Por Unidade</small>

                <br />

                <button className="btn btn-primary mt-2">Comprar</button>
            </div>
        </div>
    )
}