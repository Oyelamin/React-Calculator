import React, {Component} from 'react';

class Buttons extends Component{
    render() {
        let symbol = this.props.Symbol;
        return (
            <section className={`btnSection column-${this.props.cols}`}>
                <button onClick={() => this.props.action(symbol)}>{symbol}</button>
            </section>
        );
    }
}

export default Buttons;