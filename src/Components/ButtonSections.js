import React, {Component} from 'react';
import Buttons from './Buttons';

class ButtonSections extends Component{
    render() {
        let buttons = this.props.buttons;
        return (
            <section>
                {buttons.map((btn, i) => {
                    return <Buttons key={i} Symbol={btn.symbol} cols={btn.cols} action={(symbol) => btn.action(symbol)}/>;
                })
                }
            </section>
            
        );
    };
}

export default ButtonSections;

