import React, { Component } from 'react';
import Items from './Items';

export class Api extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }

    async Data() {

        let url = 'https://jsonplaceholder.typicode.com/photos';
        let data = await fetch(url);
        let parsed = await data.json();
        console.log(parsed);
        this.setState({
            articles: parsed
        })
    }

    async componentDidMount() {
        this.Data()
    }

    render() {
        return (
            <>
                <div className="container my-3">
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" >
                                <Items title={element.title} />
                            </div>
                        })}
                    </div>
                </div>

            </>
        )
    }
}

export default Api