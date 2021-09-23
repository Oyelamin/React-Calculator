import React, {Component} from 'react';

class OutputResult extends Component{


    render() {
        let previous = this.props.previous;

        return (
            <section className="resultSection">
                {previous.length > 0 ? 
                    <div className="floaty-last">
                        {previous[previous.length - 1]}
                    </div>
                : null }
                <input className="results" type="text" value={this.props.current}/>
            </section>
        );
    }
}

export default OutputResult;