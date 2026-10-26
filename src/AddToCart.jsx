import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const AddToCart = () => {
    const cartselector = useSelector((state) => state.cart.items)
    console.log(cartselector.length)
    return (
        <div className="cart">
            <Link to="/cart">
                <span className="cart-icon">🛒</span>
            </Link>
            <span className="cart-count">{cartselector.length ? cartselector.length : 0}</span>
        </div>
    )
}
export default AddToCart