import axios from "axios"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
function Productcart(){
  const [getItem, setItem] = useState("")
  const getCart = JSON.parse(localStorage.getItem("CartItem"))
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
      }, [])
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
                    <tr className="tbody-item">
                      <td className="product-remove">
                        <a className="remove" href="javascript:void(0)">×</a>
                      </td>
                      <td className="product-thumbnail">
                        <div className="thumb">
                          <a href="single-product.html">
                            <img src="assets/images/shop/cart1.webp" width={68} height={84} alt="Image-HasTech" />
                          </a>
                        </div>
                      </td>
                      <td className="product-name">
                        <a className="title" href="single-product.html">Condimentum posuere consectetur urna</a>
                      </td>
                      <td className="product-price">
                        <span className="price">$115.00</span>
                      </td>
                      <td className="product-quantity">
                        <div className="pro-qty">
                          <input type="text" className="quantity" title="Quantity" defaultValue={1} />
                        </div>
                      </td>
                      <td className="product-subtotal">
                        <span className="price">$115.00</span>
                      </td>
                    </tr>
                    <tr className="tbody-item">
                      <td className="product-remove">
                        <a className="remove" href="javascript:void(0)">×</a>
                      </td>
                      <td className="product-thumbnail">
                        <div className="thumb">
                          <a href="single-product.html">
                            <img src="assets/images/shop/cart2.webp" width={68} height={84} alt="Image-HasTech" />
                          </a>
                        </div>
                      </td>
                      <td className="product-name">
                        <a className="title" href="single-product.html">Kaoreet lobortis sagittis laoreet</a>
                      </td>
                      <td className="product-price">
                        <span className="price">$95.00</span>
                      </td>
                      <td className="product-quantity">
                        <div className="pro-qty">
                          <input type="text" className="quantity" title="Quantity" defaultValue={1} />
                        </div>
                      </td>
                      <td className="product-subtotal">
                        <span className="price">$95.00</span>
                      </td>
                    </tr>
                    <tr className="tbody-item">
                      <td className="product-remove">
                        <a className="remove" href="javascript:void(0)">×</a>
                      </td>
                      <td className="product-thumbnail">
                        <div className="thumb">
                          <a href="single-product.html">
                            <img src="assets/images/shop/cart3.webp" width={68} height={84} alt="Image-HasTech" />
                          </a>
                        </div>
                      </td>
                      <td className="product-name">
                        <a className="title" href="single-product.html">Nostrum exercitationem itae ipsum</a>
                      </td>
                      <td className="product-price">
                        <span className="price">$79.00</span>
                      </td>
                      <td className="product-quantity">
                        <div className="pro-qty">
                          <input type="text" className="quantity" title="Quantity" defaultValue={1} />
                        </div>
                      </td>
                      <td className="product-subtotal">
                        <span className="price">$79.00</span>
                      </td>
                    </tr>
                    <tr className="tbody-item-actions">
                      <td colSpan={6}>
                        <button type="submit" className="btn-update-cart disabled" disabled>Update cart</button>
                      </td>
                    </tr>
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
                          <span className="amount">$499.00</span>
                        </td>
                      </tr>
                      <tr className="shipping-totals">
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
                      </tr>
                      <tr className="order-total">
                        <th>Total</th>
                        <td>
                          <span className="amount">$504.00</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="text-end">
                    <a href="shop-checkout.html" className="checkout-button">Proceed to checkout</a>
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