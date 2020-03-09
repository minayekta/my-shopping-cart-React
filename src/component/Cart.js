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
          </div>
        )
      }
}




export default Cart;