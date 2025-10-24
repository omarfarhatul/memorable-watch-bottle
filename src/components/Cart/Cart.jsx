import Bottle from "../Bottle/Bottle";

const Cart = ({cart}) => {
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div>
                {cart.map(bottle=><img src={bottle.img}></img>)}
            </div>
        </div>
    );
};

export default Cart;