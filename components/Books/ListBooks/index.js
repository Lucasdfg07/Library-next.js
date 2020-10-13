import React from 'react';
import { useDispatch } from 'react-redux';

import styles from '../../../styles/list_books.module.css';

import * as CartActions from '../../../store/modules/cart/actions';

export default function ListBooks(props) {
    const dispatch = useDispatch();

    function handleAddProduct(book) {
        dispatch(CartActions.addToCart(book));
    }

    return (
        <div className="col-md-4 text-center">
            <div className={styles.box}>
                <img src={props.book.photo} />
            
                {props.book.title}

                <hr />
                
                <h4>R$ {props.book.price}</h4>
                <small>Por Unidade</small>

                <br />

                <button className="btn btn-primary mt-2" 
                        onClick={() => handleAddProduct(props.book)}>
                    Comprar
                </button>
            </div>
        </div>
    )
}