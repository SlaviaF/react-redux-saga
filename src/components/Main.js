import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { useDispatch } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  const product={
    id:1,
    name:'I-phone',
    type:'mobile',
    price: 10000, 
    color:'red'
  }
  return (
    <div className="main-container">
     
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      <button onClick={() => dispatch(removeFromCart(product.id))}>Remove from Cart</button>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>

    </div>
  );
}

export default Main;
