import AddToCart from "./AddToCart"
import { Link } from "react-router-dom"
const Header = () => {
    return (
        <header className="header">
            <h2 className="logo">ShopEase</h2>

            <nav>
                <Link to="/">Home</Link>
                <a href="#">Products</a>
                <a href="#">About</a>
            </nav>
            <AddToCart/>
        </header>
    )
}
export default Header