import { useDispatch, useSelector } from "react-redux"
import { addItem, removeItem } from "./redux/slice"
import { useEffect } from "react"
import { fetchProducts } from './redux/productslice'
const Product = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    const productselector = useSelector((state) => state.products.items)
    console.log(productselector)
    const cartselector = useSelector((state) => state.cart.items)
    console.log(cartselector.length)
    return (
        <div className="grid">
            {productselector.length > 0 &&
                productselector.map((item) => (
                    <div className="card" key={item.id}>
                        <img src={item.thumbnail} alt={item.title} width="100" />
                        <h3 className="title">{item.title}</h3>
                        <p className="price">Price: ${item.price}</p>
                        <h3 className="rating">Rating:{item.rating}</h3>
                        {
                            cartselector.find(cartItem => cartItem.id === item.id) ?
                                <button onClick={() => dispatch(removeItem(item))} className="add-btn remove-btn">Remove From Cart</button> :
                                <button onClick={() => dispatch(addItem(item))} className="add-btn">Add To Cart</button>
                        }
                    </div>
                ))}
        </div>
    )
}
export default Product





// previous code
// import { useDispatch, useSelector } from "react-redux"
// import { addItem, removeItem } from "./redux/slice"
// import { useEffect } from "react"
// import {fetchProducts} from './redux/productslice'
// const Product = () => {
//     const dispatch = useDispatch()
//     useEffect(()=>{
//         dispatch(fetchProducts())
//     },[])
//     const selector=useSelector((state)=>state.products.items)
//     console.log(selector)
//     return (
//         <div className="product">


//             <img
//                 src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700"
//                 alt="Wireless headphones"
//             />

//             <div className="details">
//                 <h1>Wireless Headphones</h1>

//                 <p className="rating">★★★★★ (4.5/5)</p>

//                 <p className="price">₹1,499</p>

//                 <p className="description">
//                     Enjoy high-quality sound with these wireless headphones.
//                     They feature a comfortable design, clear audio,
//                     and a long-lasting battery for everyday use.
//                 </p>

//                 <p><strong>Availability:</strong> In Stock</p>
//                 <br />
//                 <button
//                     className="add-btn"
//                     onClick={() => dispatch(addItem(1))}
//                 >
//                     Add to Cart
//                 </button>

//                 <button
//                     className="remove-btn"
//                     onClick={() => dispatch(removeItem(-1))}
//                 >
//                     Remove from Cart
//                 </button>

//             </div>

//         </div>
//     )
// }
// export default Product