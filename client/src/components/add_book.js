import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import { GET_AUTHORS } from '../queries/queries';


class AddBook extends Component {
    onAddBookClick = e => {
        e.preventDefault();
    }

    renderAuthorsList = () => {
        const { data } = this.props;

        if (data.loading)
            return <option disabled>Loading Authors List...</option>

        return data.authors.map(author => {
            const id = author.id
            const props = {
                key: id,
                value: id
            }
            return <option {...props}>{author.name}</option>
        })
    }

    render() {
        return (
            <div>
                <form id="add-book">
                    <div className="field">
                        <label>Book name:</label>
                        <input type="text" />
                    </div>
                    <div className="field">
                        <label>Genre:</label>
                        <input type="text" />
                    </div>
                    <div className="field">
                        <label>Author:</label>
                        <select>
                           {this.renderAuthorsList()}
                        </select>
                    </div>

                    <button onClick={this.onAddBookClick}> + </button>
                </form>
            </div>
        )
    }
}

export default graphql(GET_AUTHORS)(AddBook);