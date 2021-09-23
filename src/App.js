import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import React, {Component} from 'react';
import OutputResult from './Components/OutputResult';
import Header from './Components/Header';
import ButtonSections from './Components/ButtonSections';

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      current: "0",
      previous: [],
      flaggedSymbol: false,
      currentSymbol: "",
      currentCalculator: 0
    }
  }
  //Reset
  reset = () => {
    this.setState({current: '0', previous: [], flaggedSymbol: false})
  }

  addToCurrent = (symbol) => {
    let uniqueSymbols = ["/", "-", "+", "*"];
  
    if(uniqueSymbols.indexOf(symbol) > -1){
        let {previous} = this.state;
        previous.push(this.state.current+ ` ` + symbol);
        this.setState({previous: previous, flaggedSymbol: true, currentSymbol: symbol, currentCalculator: this.state.current})


    }else {
      if((this.state.current === "0" && symbol !== '.') || this.state.flaggedSymbol){
          this.setState({current: symbol, flaggedSymbol: false})
      }else {
        this.setState({current: this.state.current + symbol});

      }
    }
  }

  calculate = (symbol) => {
    let {current, previous} = this.state;

    if(previous.length > 0) {
      current = eval(String(previous[previous.length - 1] + current));
      this.setState({current, previous: [], flaggedSymbol: true});
    }
  }
  render() {

    const buttons = [
        {symbol: 'C', cols: 3, action: this.reset},
        {symbol: '/', cols: 1, action: this.addToCurrent},
        {symbol: '7', cols: 1, action: this.addToCurrent},
        {symbol: '8', cols: 1, action: this.addToCurrent},
        {symbol: '9', cols: 1, action: this.addToCurrent},
        {symbol: '*', cols: 1, action: this.addToCurrent},
        {symbol: '4', cols: 1, action: this.addToCurrent},
        {symbol: '5', cols: 1, action: this.addToCurrent},
        {symbol: '6', cols: 1, action: this.addToCurrent},
        {symbol: '-', cols: 1, action: this.addToCurrent},
        {symbol: '1', cols: 1, action: this.addToCurrent},
        {symbol: '2', cols: 1, action: this.addToCurrent},
        {symbol: '3', cols: 1, action: this.addToCurrent},
        {symbol: '+', cols: 1, action: this.addToCurrent},
        {symbol: '0', cols: 2, action: this.addToCurrent},
        {symbol: '.', cols: 1, action: this.addToCurrent},
        {symbol: '=', cols: 1, action: this.calculate}

    ];
    return (
      <div className="app">
        
        <Header/>
        <OutputResult current={this.state.current} previous={this.state.previous}/>
        <ButtonSections buttons={buttons}/>
      </div>
    );
  }
}

export default App;
