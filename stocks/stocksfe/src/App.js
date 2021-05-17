import React, { Component } from 'react'
import axios from 'axios'
import {Button} from 'react-bootstrap'
import Welcome from './components/Welcome'


class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      name : "",
      stocksList: []
    }
  }

  componentDidMount() {
    this.refreshStockList();
  }

  refreshStockList = () =>{
    axios
    // .get('http://localhost:8000/stocks/tlsa')
    .get('http://inpera-dev-05:8000/health')
    .then(res => {  
                  // console.log(res.data);
                  this.setState({stocksList : res.data})
                })
    // .then(res => {console.log(res.data)})
    .catch(err => console.log(err))
  };

  createStock = () =>{
    this.refreshStockList()
    const tickers = this.state.stocksList 
    console.log(tickers)
    return tickers
  };

  render(){
    return(
      <div className="App">
      <header className="App-header">
        <Welcome />
        <Button variant="primary" onClick={this.createStock}>{this.state.stocksList.cluster} Win</Button>
        {/* <h1>{this.state.stocksList.map}</h1> */}
      </header>
    </div>
    )
  }
}

export default App;
