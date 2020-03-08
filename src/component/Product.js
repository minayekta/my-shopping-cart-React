import React from  'react';



class Product extends React.Component{
    render(){
        const productItems = this.props.products.map(p =>
            <div className="col-md-4 text-center product" key={p.id}>
              <div>
                <img src={`/products/0${p.id}.jpg`} alt={p.id} ></img>
              </div>
              <div>
                <p>
                  {p.title}
                </p>
                <p className="price">
                  {p.price} 
                </p>
                <button className="btn btn-primary" >
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          )
          return (
            <div className="row">
              {productItems}
              محصولات
            </div>
          );
    }
}

export default Product;
