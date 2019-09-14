import React from 'react';
import request from 'request';

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);

        this.getQuote = this.getQuote.bind(this);
        this.parseQuote = this.parseQuote.bind(this);

        this.getQuote();
    }
    getQuote() {
        request('https://quotesondesign.com/wp-json/wp/v2/posts?orderby=rand&' + Math.floor((Math.random() * 20) + 1), (err, res, body) => {
            if (err) { return console.log(err); }
            this.parseQuote(body);
        });
    };
    parseQuote(data) {
        let post = JSON.parse(data)[0];
        this.props.loadNewQuote(post.content.rendered, post.title.rendered);
    }
    render() {
        return (
            <div id={'quote-box'} className={'card card-light w-75'}>
                <div id={'buttons'}>
                    <a className="btn btn-secondary" id="tweet-quote" title="Tweet this quote!" target="_blank" href="https://twitter.com/intent/tweet" rel="noopener noreferrer ">
                        <i className="fa fa-twitter" />
                    </a>
                    <button id={'new-quote'} className={'btn btn-secondary'} onClick={this.getQuote}>New quote</button>
                </div>
                <div id={'text'} dangerouslySetInnerHTML={{ __html: this.props.quote }} />
                <div id={'author'} className={'card-text text-right font-italic'} dangerouslySetInnerHTML={{ __html: this.props.author }} />
            </div>
        );
    }
}

export default QuoteBox;