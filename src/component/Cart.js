import React, { useImperativeHandle } from  'react';

class Cart extends React.Component {
    render() {
        const {cartItem} = this.props;
        return (
          <div className="cart">
            <h2> سبد خرید </h2>
            {
              cartItem.length === 0 ? "سبد خرید خالی است" : 
              <div>
                تعداد محصولات سبد خرید : {cartItem.length}
              </div>
            }
             {
              cartItem.length > 0 &&
              <div>
                <ul>
                  {cartItem.map(item => 
                    <div>

                      {item.title}

                      <div>
                      <button 
                        className="btn btn-danger delete"
                        onClick={(e) => this.props.handleRemove(e, item)}
                      >
                        حذف محصول
                      </button>
                      </div>
                    </div>
                  )}
                </ul>
                <p>
                  مجموع: {cartItem.reduce((a, b) => a + b.price * b.count, 0)} تومان
                </p>
              </div>
            }
          
      
          </div>
        )
      }
      
}




export default Cart;