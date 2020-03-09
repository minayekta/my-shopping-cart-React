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
    this.handleAddToCart = this.handleAddToCart.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  componentWillMount() {
    fetch("http://localhost:3002/products")
      .then(res => res.json())
      .then(data => this.setState({products: data}))
      
      if (localStorage.getItem('cartItem')) {
        this.setState({
          cartItem: JSON.parse(localStorage.getItem('cartItem'))
        })
      }
  }



  handleAddToCart(e, product) {
    this.setState(state => {
      const cartItem = state.cartItem
      let productExists = false
      cartItem.forEach(item => {
        if (item.id === product.id) {
          productExists = true
          item.count++
        }
      })
      if (!productExists) {
        cartItem.push({ ...product, count: 1 })
      }
      localStorage.setItem('cartItem', JSON.stringify(cartItem))
      return cartItem
    })
  }

  handleRemove(e, item) {
    this.setState(state => {
      const cartItem = state.cartItem.filter(p => p.id !== item.id)
      localStorage.setItem('cartItems', cartItem)
      return {cartItem}
    })
  }
  

  render() {
    console.log("Test", this.state.products)
    return (
      <div className="container text-center">
     
          <div className="col-md-12">
          
            <Product 
              products = {this.state.products} 
              handleAddToCart = {this.handleAddToCart}
                />
              
         
          
          
      </div>
      <div className="container text-center">
      <div className="col-md-10">
            <Cart cartItem= {this.state.cartItem}
             handleRemove = {this.handleRemove}/>
        </div>
        </div>
         </div>
        
          
            
    )
  }
}

export default App;