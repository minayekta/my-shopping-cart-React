import React from 'react'
import './App.css'
import Product from './component/Product'
import './component/Product.css'
import Cart from './component/Cart'
import './component/Cart.css'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { products: [] }
    
  }

  componentWillMount() {
    fetch("http://localhost:8000/products")
      .then(res => res.json())
      .then(data => this.setState({products: data}))
      }
  
  

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Product 
              products = {this.state.products}   />
              
         
          </div>  
          <div className="col-md-4">
            <Cart />
        </div>
      </div>
         </div>
        
          
            
    )
  }
}

export default App