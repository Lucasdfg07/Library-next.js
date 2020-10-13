import Layout from "../../components/Layout";

import { useDispatch, useSelector } from 'react-redux';

import * as CartActions from '../../store/modules/cart/actions';

import { FiPlusCircle, FiMinusCircle, FiXCircle } from 'react-icons/fi';

import styles from '../../styles/cart.module.css';

export default function Cart() {
    const cart = useSelector(state =>
        state.cart.map(book => ({
          ...book,
          subtotal: book.price * book.amount,
        }))
    );

    const total = useSelector(state =>
        state.cart.reduce((totalSum, product) => {
          return totalSum + product.price * product.amount;
        }, 0)
    );

    const dispatch = useDispatch();
 
    function increment(book) {
        dispatch(CartActions.updateAmount({
            id: book.id,
            amount: book.amount + 1,
        }));
    }
    
    function decrement(book) {
        dispatch(CartActions.updateAmount({
            id: book.id,
            amount: book.amount - 1,
        }));
    }
      

    return(
        <Layout>
            <div className="text-center">
                <h3>Carrinho de Compras</h3>

                <hr />
                
                <table className="table">
                    <thead className={styles.section}>
                        <tr>
                            <th />
                            <th>Livro</th>
                            <th>Quantidade</th>
                            <th>Subtotal</th>
                            <th />
                        </tr>
                    </thead>

                    <tbody>
                        {cart.map(book => (
                            <tr key={book.id} className={styles.section}>
                                <td>
                                    <img src={book.photo} alt={book.title} className={styles.image} />
                                </td>

                                <td>
                                    <strong>{book.title}</strong> <br />
                                    <span>R$ {book.price}</span>
                                </td>

                                <td>
                                    <div>
                                        <button type="button" onClick={() => decrement(book)}>
                                            <FiMinusCircle size={20} color="#33BFCB" />
                                        </button>

                                        <input type="number" readOnly value={book.amount} />

                                        <button type="button" onClick={() => increment(book)}>
                                            <FiPlusCircle size={20} color="#33BFCB" />
                                        </button>
                                    </div>
                                </td>

                                <td>
                                    <strong>R$ {book.subtotal.toFixed(3).slice(0,-1)}</strong>
                                </td>

                                <td>
                                    <button
                                        type="button"
                                        onClick={() => dispatch(CartActions.removeFromCart(book.id))}
                                    >
                                        <FiXCircle size={20} color="#33BFCB" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}