import React, { useEffect, useState } from 'react';

import ListBooks from './ListBooks';
import Api from '../../services/api.js';

export default function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    }, []);

    async function loadBooks() {
        const response = await Api.get('/books');
        setBooks(response.data);
    }

    return (
        <div className="home container text-center">
            <h3>Encontre os livros mais Destacados</h3>

            <hr />

            <div className="row">
                {
                    books.map(book => (
                        <ListBooks book={book} />
                    ))
                } 
            </div>
        </div>
    )
}