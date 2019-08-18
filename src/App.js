import React from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox'

class App extends React.Component {
    render() {
        return (
            <div id={'wrapper'} className={'container'}>
                <div className={'row'}>
                    <QuoteBox quote={this.props.quote} author={this.props.author} loadNewQuote={this.props.loadNewQuote}/>
                </div>
                <div id={'sign'} className={'text-center'}>by saltowl</div>
            </div>
        );
    };
}

export default App;
