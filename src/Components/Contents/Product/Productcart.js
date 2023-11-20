import axios from "axios"
import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../UserContext"
function Productcart(){
  const [getItem, setItem] = useState("")
  const getdataCartItem = JSON.parse(localStorage.getItem("CartItem"))
  const [valueao,setvalueao] = useState("valueao")
  const {getCart,setCart} = useContext(UserContext)
  var gettong1 = 0
      useEffect(() => {
    axios.get("http://localhost:8000/products")
        .then(response => {
            setItem(response.data.mess)
            // console.log(response.data.mess)
        })
        .catch(function (error) {
            console.log(error)
        })
      }, [valueao])
      const increaseqty = (e) =>{
        if (Object.keys(getdataCartItem).length>0){
          return Object.keys(getdataCartItem).map((value,key)=>{
            if(e.target.id == value){          
              getdataCartItem[value]++
              localStorage.setItem("CartItem",JSON.stringify(getdataCartItem))
              setvalueao(getdataCartItem)
            }
          })
        }
      }
      const decreaseqty = (e) =>{
        if (Object.keys(getdataCartItem).length>0){
          return Object.keys(getdataCartItem).map((value,key)=>{
            if(e.target.id == value){     
              getdataCartItem[value]--
              localStorage.setItem("CartItem",JSON.stringify(getdataCartItem))
              setvalueao(getdataCartItem)
              if(getdataCartItem[value] == 0){
                delete getdataCartItem[value]
                localStorage.setItem("CartItem",JSON.stringify(getdataCartItem))
                setvalueao(getdataCartItem)
              }
            }
          })
        }
      }
      function fetchData(){
          if(getItem.length>0){
            return getItem.map((value,key)=>{
              if (getdataCartItem != null){
                return Object.keys(getdataCartItem).map((key1,index)=>{
                  if(value._id == key1){
                    const gettong = parseInt(getdataCartItem[key1] * value.price)
                    gettong1 += gettong
                      return(
                              <tr className="tbody-item" key={key}>
                                          <td className="product-remove">
                                            <a className="remove" href="javascript:void(0)">×</a>
                                          </td>
                                          <td className="product-thumbnail">
                                            <div className="thumb">
                                              <Link to={"/product-details/" + value._id}>
                                              <a>
                                                <img src={""+value.image} style={{width:"68px",height:"84px"}} width={68} height={84} alt="Image-HasTech" />
                                              </a>
                                              </Link>                                              
                                            </div>
                                          </td>
                                          <td className="product-name">
                                            <Link to={"/product-details/" + value._id}>
                                            <a className="title">{value.title}</a>
                                            </Link>
                                          </td>
                                          <td className="product-price">
                                            <span className="price">{value.price}</span>
                                          </td>
                                          <td className="product-quantity">
                                            <div className="pro-qty">
                                              <a onClick={decreaseqty} id={value._id} className="cart_quantity_up" href> - </a>
                                              <input style={{width:"50%"}} type="text" className="quantity" title="Quantity" value={getdataCartItem[key1]}/>
                                              <a onClick={increaseqty} id={value._id} className="cart_quantity_up" href> + </a>
                                            </div>
                                          </td>
                                          <td className="product-subtotal">
                                            <span className="price">{gettong} VNĐ</span>
                                          </td>
                                </tr>
                        )
                  }
                })
              }
            })
          }
      }
    return(
        <>
        {/*== Start Page Header Area Wrapper ==*/}
        <nav aria-label="breadcrumb" className="breadcrumb-style1">
          <div className="container">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Cart</li>
            </ol>
          </div>
        </nav>
        {/*== End Page Header Area Wrapper ==*/}
        {/*== Start Product Area Wrapper ==*/}
        <section className="section-space">
          <div className="container">
            <div className="shopping-cart-form table-responsive">
              <form action="#" method="post">
                <table className="table text-center">
                  <thead>
                    <tr>
                      <th className="product-remove">&nbsp;</th>
                      <th className="product-thumbnail">&nbsp;</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-subtotal">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fetchData()}
                  </tbody>
                </table>
              </form>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="coupon-wrap">
                  <h4 className="title">Coupon</h4>
                  <p className="desc">Enter your coupon code if you have one.</p>
                  <input type="text" className="form-control" placeholder="Coupon code" />
                  <button type="button" className="btn-coupon">Apply coupon</button>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="cart-totals-wrap">
                  <h2 className="title">Cart totals</h2>
                  <table>
                    <tbody>
                      <tr className="cart-subtotal">
                        <th>Subtotal</th>
                        <td>
                          <span className="amount">{gettong1} VNĐ</span>
                        </td>
                      </tr>
                      {/* <tr className="shipping-totals">
                        <th>Shipping</th>
                        <td>
                          <ul className="shipping-list">
                            <li className="radio">
                              <input type="radio" name="shipping" id="radio1" defaultChecked />
                              <label htmlFor="radio1">Flat rate: <span>$3.00</span></label>
                            </li>
                            <li className="radio">
                              <input type="radio" name="shipping" id="radio2" />
                              <label htmlFor="radio2">Free shipping</label>
                            </li>
                            <li className="radio">
                              <input type="radio" name="shipping" id="radio3" />
                              <label htmlFor="radio3">Local pickup</label>
                            </li>
                          </ul>
                          <p className="destination">Shipping to <strong>USA</strong>.</p>
                          <a href="javascript:void(0)" className="btn-shipping-address">Change address</a>
                        </td>
                      </tr> */}
                      <tr className="order-total">
                        <th>Total</th>
                        <td>
                          <span className="amount">{gettong1} VNĐ</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="text-end">
                    <a href="/productcheckout" className="checkout-button">Proceed to checkout</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*== End Product Area Wrapper ==*/}
        </>
    )
}
export default Productcart