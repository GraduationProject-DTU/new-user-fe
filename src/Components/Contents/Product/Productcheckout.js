import { useState,useContext, useEffect, } from "react"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"
import { UserContext } from "../../../UserContext";
function Productcheckout(){
    const [getItem, setItem] = useState("")
    const getdataCartItem = JSON.parse(localStorage.getItem("CartItem"))
    const { gettotalorder,settotalorder } = useContext(UserContext)
    const [inputs, setInputs] = useState({
      firstname: "",
      lastname: "",
      street: "",
      city: "",
      phone: "",
      email: "",
      note: ""
    })
    var gettong1= 0
    var gettong2= 0
    useEffect(() => {
      axios.get("http://localhost:8000/products")
        .then(response => {
          setItem(response.data.mess)
        })
        .catch(function (error) {
          console.log(error)
        })
    }, [])
    function fetchData() {
      if (getItem.length > 0) {
        return getItem.map((value, key) => {
          if (getdataCartItem != null) {
            return Object.keys(getdataCartItem).map((key1, index) => {
              if (value._id == key1) {
                const gettong = parseInt(getdataCartItem[key1] * value.price)
                gettong1 += gettong
                gettong2 = gettong1+2000
                return(
                  <tr className="cart-item">
                  <td className="product-name">{value.title} <span className="product-quantity">× {getdataCartItem[key1]}</span></td>
                  <td className="product-total">{Intl.NumberFormat().format(gettong)}</td>
                </tr>
                )
              }
            })
          }
        })
      }
    }
    function handleSubmit(e){
      console.log(gettotalorder)
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      let flag = true
      let errorSubmit = {}
      if (inputs.email == "") {
        errorSubmit.email = "Vui long nhap email"
        flag = false
        toast.error(""+errorSubmit.email);
    } else {
        if (!regex.test(inputs.email)) {
            errorSubmit.email = "Nhap dung dinh dang"
        }
    }
      if (inputs.street == "") {
        errorSubmit.street = "Nhap street"
        flag = false
        toast.error(""+errorSubmit.street);
      }
      if (inputs.city == "") {
        errorSubmit.city = "Nhap city"
        flag = false
        toast.error(""+errorSubmit.city);
      }
      if (inputs.phone == "") {
          errorSubmit.phone = "Nhap phone"
          flag = false
          toast.error(""+errorSubmit.phone);
      }
      if (inputs.firstname == "") {
        errorSubmit.firstname = "Nhap firstname"
        flag = false
        toast.error(""+errorSubmit.firstname);
      }
      if (inputs.lastname == "") {
        errorSubmit.lastname = "Nhap lastname"
        flag = false
        toast.error(""+errorSubmit.lastname);
      }
    }
    const handleInput = (e) => {
      const nameInput = e.target.name
      const value = e.target.value
      setInputs(state => ({ ...state, [nameInput]: value }))
    }
    return(
        <>
        {/*== Start Page Header Area Wrapper ==*/}
        <nav aria-label="breadcrumb" className="breadcrumb-style1">
          <div className="container">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Checkout</li>
            </ol>
          </div>
        </nav>
        {/*== End Page Header Area Wrapper ==*/}
        {/*== Start Shopping Checkout Area Wrapper ==*/}
        <section className="shopping-checkout-wrap section-space">
          <div className="container">
            <div className="checkout-page-coupon-wrap">
              {/*== Start Checkout Coupon Accordion ==*/}
              <div className="coupon-accordion" id="CouponAccordion">
                <div className="card">
                  <h3>
                    <i className="fa fa-info-circle" />
                    Have a Coupon?
                    <a href="#/" data-bs-toggle="collapse" data-bs-target="#couponaccordion">Click here to enter your code</a>
                  </h3>
                  <div id="couponaccordion" className="collapse" data-bs-parent="#CouponAccordion">
                    <div className="card-body">
                      <div className="apply-coupon-wrap">
                        <p>If you have a coupon code, please apply it below.</p>
                        <form action="#" method="post">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <input className="form-control" type="text"  placeholder="Coupon code" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <button type="button" className="btn-coupon">Apply coupon</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*== End Checkout Coupon Accordion ==*/}
            </div>
            <div className="row">
              <div className="col-lg-6">
                {/*== Start Billing Accordion ==*/}
                <div className="checkout-billing-details-wrap">
                  <h2 className="title">Billing details</h2>
                  <div className="billing-form-wrap">
                    <form action="#" method="post">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="f_name">First name <abbr className="required" title="required">*</abbr></label>
                            <input id="f_name" type="text" className="form-control" name="firstname"  onChange={handleInput} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="l_name">Last name <abbr className="required" title="required">*</abbr></label>
                            <input id="l_name" type="text" className="form-control" name="lastname"  onChange={handleInput} />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="street-address">Street address <abbr className="required" title="required">*</abbr></label>
                            <input id="street-address" type="text" className="form-control" placeholder="House number and street name"  name="street" onChange={handleInput} />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="town">Town / City <abbr className="required" title="required">*</abbr></label>
                            <input id="town" type="text" className="form-control" name="city" onChange={handleInput} />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="phone">Phone <abbr className="required" title="required">*</abbr></label>
                            <input id="phone" type="text" className="form-control" name="phone"   onChange={handleInput}/>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="email">Email address <abbr className="required" title="required">*</abbr></label>
                            <input id="email" type="text" className="form-control" name="email"  onChange={handleInput} />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group mb-0">
                            <label htmlFor="order-notes">Order notes (optional)</label>
                            <textarea id="order-notes" className="form-control" placeholder="Notes about your order, e.g. special notes for delivery." defaultValue={""} name="note" onChange={handleInput} />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/*== End Billing Accordion ==*/}
              </div>
              <div className="col-lg-6">
                {/*== Start Order Details Accordion ==*/}
                <div className="checkout-order-details-wrap">
                  <div className="order-details-table-wrap table-responsive">
                    <h2 className="title mb-25">Your order</h2>
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-name">Product</th>
                          <th className="product-total">Total</th>
                        </tr>
                      </thead>
                      <tbody className="table-body">
                          {fetchData()}
                      </tbody>
                      <tfoot className="table-foot">
                        <tr className="cart-subtotal">
                          <th>Subtotal</th>
                          <td>{Intl.NumberFormat().format(gettong1)}</td>
                        </tr>
                        <tr className="shipping">
                          <th>Shipping</th>
                          <td>{Intl.NumberFormat().format(2000)}</td>
                        </tr>
                        <tr className="order-total">
                          <th>Total </th>
                          <td>{Intl.NumberFormat().format(gettong2)}</td>
                        </tr>
                      </tfoot>
                    </table>
                    <div className="shop-payment-method">
                      <div id="PaymentMethodAccordion">
                        <div className="card">
                          <div className="card-header" id="check_payments">
                            <h5 className="title" data-bs-toggle="collapse" data-bs-target="#itemOne" aria-controls="itemOne" aria-expanded="true">Direct bank transfer</h5>
                          </div>
                          <div id="itemOne" className="collapse show" aria-labelledby="check_payments" data-bs-parent="#PaymentMethodAccordion">
                            <div className="card-body">
                              <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                            </div>
                          </div>
                        </div>
                        {/* <div className="card">
                          <div className="card-header" id="check_payments2">
                            <h5 className="title" data-bs-toggle="collapse" data-bs-target="#itemTwo" aria-controls="itemTwo" aria-expanded="false">Check payments</h5>
                          </div>
                          <div id="itemTwo" className="collapse" aria-labelledby="check_payments2" data-bs-parent="#PaymentMethodAccordion">
                            <div className="card-body">
                              <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                            </div>
                          </div>
                        </div> */}
                        {/* <div className="card">
                          <div className="card-header" id="check_payments3">
                            <h5 className="title" data-bs-toggle="collapse" data-bs-target="#itemThree" aria-controls="itemTwo" aria-expanded="false">Cash on delivery</h5>
                          </div>
                          <div id="itemThree" className="collapse" aria-labelledby="check_payments3" data-bs-parent="#PaymentMethodAccordion">
                            <div className="card-body">
                              <p>Pay with cash upon delivery.</p>
                            </div>
                          </div>
                        </div> */}
                        <div className="card">
                          <div className="card-header" id="check_payments4">
                            <h5 className="title" data-bs-toggle="collapse" data-bs-target="#itemFour" aria-controls="itemTwo" aria-expanded="false">COD</h5>
                          </div>
                          <div id="itemFour" className="collapse" aria-labelledby="check_payments4" data-bs-parent="#PaymentMethodAccordion">
                            <div className="card-body">
                              <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="p-text">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#/">privacy policy.</a></p>
                      <div className="agree-policy">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" id="privacy" className="custom-control-input visually-hidden" />
                          <label htmlFor="privacy" className="custom-control-label">I have read and agree to the website terms and conditions <span className="required">*</span></label>
                        </div>
                      </div>
                      <a className="btn-place-order" onClick={handleSubmit} type="submit">Place order</a>
                    </div>
                  </div>
                </div>
                {/*== End Order Details Accordion ==*/}
              </div>
            </div>
          </div>
        </section>
        {/*== End Shopping Checkout Area Wrapper ==*/}
        </>
    )
}
export default Productcheckout