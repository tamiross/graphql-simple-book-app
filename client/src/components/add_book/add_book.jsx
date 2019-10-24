import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import { compose } from 'recompose'
import { GET_AUTHORS_QUERY, ADD_BOOK_MUTATION, GET_BOOKS_QUERY } from 'queries/queries';

// Using Classes...
class AddBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            genre: '',
            authorrId: ''
        }
    }


    onBookNameInputChange = e => {
        this.setState({
            name: e.target.value
        })
    }

    onGenreInputChange = e => {
        this.setState({
            genre: e.target.value
        })
    }

    onAuthorSelect = e => {
        this.setState({
            authorId: e.target.value
        })
    }

    onSubmitForm = e => {
        e.preventDefault();
        console.log('state: ', this.state)
        // Call the mutation
        this.props.ADD_BOOK_MUTATION({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            },
            refetchQueries: [
                // Refreshes the client after a mutation has been made
                { query: GET_BOOKS_QUERY }
            ]
        })
    }

    renderAuthorsList = () => {
        const { GET_AUTHORS_QUERY } = this.props;
        const loading = GET_AUTHORS_QUERY.loading;

        if (loading)
            return <option disabled>Loading Authors List...</option>

        return GET_AUTHORS_QUERY.authors.map(author => {
            const id = author.id
            const props = {
                key: id,
                value: id
            }
            return <option {...props} onClick={this.onAuthorSelect}>{author.name}</option>
        })
    }

    render() {
        return (
            <div>
                <form id="add-book" onSubmit={this.onSubmitForm}>
                    <div className="field">
                        <label>Book name:</label>
                        <input type="text" onChange={this.onBookNameInputChange} />
                    </div>
                    <div className="field">
                        <label>Genre:</label>
                        <input type="text" onChange={this.onGenreInputChange} />
                    </div>
                    <div className="field">
                        <label>Author:</label>
                        <select onChange={this.onAuthorSelect}>
                            {this.renderAuthorsList()}
                        </select>
                    </div>

                    <button onClick={this.onSubmitForm}> + </button>
                </form>
            </div>
        )
    }
}

// Todo: Convert to Hooks component
// and remove compose

export default compose(
    graphql(GET_AUTHORS_QUERY, { name: 'GET_AUTHORS_QUERY' }),
    graphql(ADD_BOOK_MUTATION, { name: 'ADD_BOOK_MUTATION' })
)(AddBook);