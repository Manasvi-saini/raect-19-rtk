import Header from "./header"
import './App.css'
import Product from "./Product"
import { useDispatch } from "react-redux"
import { clearAllItem } from "./redux/slice"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CartList from "./CartList"
function App(){
  const dispatch=useDispatch()
  return (
    <>
      <BrowserRouter>
      <Header/>
      {/* <h1>React REdux Toolkit TuT</h1>
      <button onClick={()=>dispatch(clearAllItem())} className="add-btn">Clear Cart</button> */}
      <Routes>
        <Route path="/" element={<Product/>}></Route>
        <Route path="/cart" element={<CartList/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
