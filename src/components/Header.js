import {useSelector} from 'react-redux'

const Header = () => {
    const result = useSelector((state)=>state.cartData)
    console.log("reduc data in header", result)
  return (
    <div className="header">
      <div className="cart-div">
        <div className="cart-no-container">{result.length}</div>
        <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt=""/>
      </div>
    </div>
  );
};

export default Header;
