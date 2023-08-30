import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../redux/productAction";

function Main() {
  const dispatch = useDispatch();
  const product={
    id:1,
    name:'I-phone',
    type:'mobile',
    price: 10000, 
    color:'red'
  }

  const data = useSelector((state)=>state.productData)
  console.log("dta in main copo", data)
  return (
    <div className="main-container">
     
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      <button onClick={() => dispatch(removeFromCart(product.id))}>Remove from Cart</button>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      <button onClick={() => dispatch(productList())}> Get product List</button>


    </div>
  );
}

export default Main;
