import React from 'react';

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id={'quote-box'}>
                <div id={'text'}></div>
                <div id={'author'}></div>
                <div id={'buttons'}>
                    <a className="button" id="tweet-quote" title="Tweet this quote!" target="_blank">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <button id={'new-quote'}>New quote</button>
                </div>
            </div>
        );
    }
}

export default QuoteBox;