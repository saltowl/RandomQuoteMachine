import React from 'react';

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);

        this.getQuote = this.getQuote.bind(this);
        this.parseQuote = this.parseQuote.bind(this);

        this.getQuote();
    }
    getQuote() {
        let url = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=' + Math.floor((Math.random() * 20) + 1);
        const callback = this.parseQuote;

        let request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState === 4 && request.status === 200) {
                callback(request.response); // Another callback here
            }
        };
        request.open('GET', url);
        request.withCredentials = true;
        request.send();
    };
    parseQuote(data) {
        let post = JSON.parse(data)[0];
        this.props.loadNewQuote(post.content, post.title);
    }
    render() {
        return (
            <div id={'quote-box'} className={'card card-light'}>
                <div id={'text'} dangerouslySetInnerHTML={{ __html: this.props.quote }} />
                <div id={'author'}>{this.props.author}</div>
                <div id={'buttons'} className={'btn-toolbar'}>
                    <a className="button" id="tweet-quote" title="Tweet this quote!" target="_blank" href="twitter.com/intent/tweet">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <button id={'new-quote'} onClick={this.getQuote}>New quote</button>
                </div>
            </div>
        );
    }
}

export default QuoteBox;