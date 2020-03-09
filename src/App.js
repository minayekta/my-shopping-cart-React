import React from 'react'
import './App.css'
import Product from './component/Product'
import './component/Product.css'
import Cart from './component/Cart'
import './component/Cart.css'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { products: [] 
    , cartItem :[] }
    
  }

  componentWillMount() {
    fetch("http://localhost:3002/products")
      .then(res => res.json())
      .then(data => this.setState({products: data}))
      }
  
  

  render() {
    console.log("Test", this.state.products)
    return (
      <div className="container text-center">
     
          <div className="col-md-12">
          
            <Product 
              products = {this.state.products}   />
              
         
          
          
      </div>
      <div className="container text-center">
      <div className="col-md-10">
            <Cart cartItem= {this.state.cartItem}/>
        </div>
        </div>
         </div>
        
          
            
    )
  }
}

export default App;