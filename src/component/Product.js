import React from  'react';
import {
Card,
CardImg,
CardBody,
CardTitle,
CardSubtitle,
Button
       
} from 'reactstrap';


class Product extends React.Component{
    render(){
      const productItems = this.props.products.map(product =>
            <div className="col-md-4 text-center product" key={product.id}>
            {/* <Card> 
              <CardImg  top width="100%" src={`/products/0${product.id}.jpg`} alt={product.id} />
              <CardBody>
              <CardTitle> {product.title} </CardTitle>
              <CardSubtitle> T  {product.price} </CardSubtitle>
              <Button color="primary">افزودن به سبد خرید</Button>
            </CardBody>
          </Card> */}
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
