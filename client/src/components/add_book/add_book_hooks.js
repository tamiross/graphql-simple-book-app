import React, { useState } from 'react'
import { useQuery, useMutation } from 'react-apollo';
import { GET_AUTHORS, ADD_BOOK } from 'queries/queries';


const onBookNameInputChange = (e, cb) => {
    console.log('book name')
    // return cb()
}

const onGenreInputChange = e => {
    //
}

const onSubmitForm = e => {
    e.preventDefault();
    console.log('SUBMIT FORM: ', e)

}

const renderAuthorsList = authors => {
    if (!authors || authors == false)
        return <option disabled>Cannot Load Authors List...</option>

    return authors.map(author => {
        const id = author.id
        const props = {
            key: id,
            value: id
        }
        return <option {...props}>{author.name}</option>
    })
}

const AddBook = () => {
    let input;
    const { loading, data } = useQuery(GET_AUTHORS);
    const [addBook, { data2 }] = useMutation(ADD_BOOK)
    console.log('data2: ', data2)
    const [book, setBook] = useState({
        name: '',
        genre: '',
        authorId: ''
    })


    if (loading)
        return null;

    const authors = data.authors

    return (
        <div>
            <form id="add-book" onSubmit={e => {
                e.preventDefault();
                addBook({
                    variables: { name: book.name }
                });
                input.value = '';
            }}>
                <h1>Add Book:</h1>
                <div className="wrapper" style={{ padding: 24, border: '1px solid rgba(0,0,0,0.1)' }}>

                    <div className="field">
                        <label>Book name:</label>
                        <input type="text" onChange={e => setBook({ ...book, name: e.target.value })} />
                    </div>
                    <div className="field">
                        <label>Genre:</label>
                        <input type="text" onChange={e => setBook({ ...book, genre: e.target.value })} />
                    </div>
                    <div className="field">
                        <label>Author:</label>
                        <select>
                            {renderAuthorsList(authors)}
                        </select>
                    </div>

                    <button onClick={() => onSubmitForm()}>Add Book!</button>
                </div>
            </form>
        </div>
    )
}

export default AddBook