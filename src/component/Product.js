import React from  'react';



class Product extends React.Component{
    render(){
      const productItems = this.props.products.map(product =>
            <div className="col-md-4 text-center product" key={product.id}>
            
              <div>
                <img src={`/products/0${product.id}.jpg`} alt={product.id} />
              </div>
              <div>
                <p className="title">
                  {product.title}
                </p>
                <p className="price">
                T  {product.price} 
                </p>
                <button className="btn btn-primary button" >
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
              )
          return (
            <div className="row">
              {productItems}
              
            </div>
          );
    }
}

export default Product;
