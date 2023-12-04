import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../../UserContext";
import { useState,useContext, useEffect, } from "react"
import axios from "axios";
function Myaccount(){
useEffect(() =>{
  const getDataUser = JSON.parse(localStorage.getItem("User"))
      setInputs({
      email: getDataUser?.user?.email,
      firstname: getDataUser?.user?.firstname,
      lastname: getDataUser?.user?.lastname,
      phone: getDataUser?.user?.phone
  })
},[])
  const {getvalueaorefresh,setvalueaorefresh} = useContext(UserContext)
  const navigate = useNavigate()
  let getDataUser = JSON.parse(localStorage.getItem("User"))
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    phone: "",
    firstname:"",
    lastname: ""
  })
  const handleSaveChange = (e) =>{
    e.preventDefault()
    console.log(inputs.firstname)
    let url = "http://localhost:8000/users/update-user"
    let accessToken = getDataUser?.token
    let config = {
        headers: {
            'token': 'baerer ' + accessToken,
        }
    }
    const data = {
      email: inputs.email,
      firstname: inputs.firstname,
      lastname: inputs.lastname,
      phone:inputs.phone
    }
    axios.put(url, data, config)
        .then(response => {
            console.log(response)
            toast.success("Update thông tin thành công", {
                position: toast.POSITION.TOP_RIGHT,
            });
        })
        .catch(function (error) {
          console.log(error)
        })
  }
  const handleInput = (e) => {
    const nameInput = e.target.name
    const value = e.target.value
    setInputs(state => ({ ...state, [nameInput]: value }))
}
    const logout =(e) =>{
      if(getDataUser != null){
        localStorage.clear()
        toast.success("Logout thành công")
        navigate("/")
        // window.location.reload()
        setvalueaorefresh("ok1")
      }else{
        toast.error("Bạn phải đăng nhập trước");
        navigate("/account")
      }
    }
    return(
        <>
        <ToastContainer />
        {/*== Start Page Header Area Wrapper ==*/}
        <section className="page-header-area pt-10 pb-9" data-bg-color="#FFF3DA">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="page-header-st3-content text-center text-md-start">
                  <ol className="breadcrumb justify-content-center justify-content-md-start">
                    <li className="breadcrumb-item"><a className="text-dark" href="index.html">Home</a></li>
                    <li className="breadcrumb-item active text-dark" aria-current="page">My Account</li>
                  </ol>
                  <h2 className="page-header-title">My Account</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*== End Page Header Area Wrapper ==*/}
        {/*== Start My Account Area Wrapper ==*/}
        <section className="my-account-area section-space">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="my-account-tab-menu nav nav-tabs" id="nav-tab" role="tablist">
                  <button className="nav-link active" id="dashboad-tab" data-bs-toggle="tab" data-bs-target="#dashboad" type="button" role="tab" aria-controls="dashboad" aria-selected="true">Dashboard</button>
                  <button className="nav-link" id="orders-tab" data-bs-toggle="tab" data-bs-target="#orders" type="button" role="tab" aria-controls="orders" aria-selected="false"> Orders</button>
                  {/* <button className="nav-link" id="address-edit-tab" data-bs-toggle="tab" data-bs-target="#address-edit" type="button" role="tab" aria-controls="address-edit" aria-selected="false">Password Change</button> */}
                  <button className="nav-link" id="account-info-tab" data-bs-toggle="tab" data-bs-target="#account-info" type="button" role="tab" aria-controls="account-info" aria-selected="false">Account Details</button>
                  <button className="nav-link" onClick={logout} type="button">Logout</button>
                </div>
              </div>
              <div className="col-lg-9 col-md-8">
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="dashboad" role="tabpanel" aria-labelledby="dashboad-tab">
                    <div className="myaccount-content">
                      <h3>Dashboard</h3>
                      <div className="welcome">
                        <p>Hello, <strong>{getDataUser?.user.firstname} {getDataUser?.user?.lastname}</strong> (If Not <strong>{getDataUser?.user.firstname} {getDataUser?.user.lastname} !</strong><a onClick={logout} className="logout"> Logout</a>)</p>
                      </div>
                      <p>From your account dashboard. you can easily check &amp; view your recent orders, manage your shipping and billing addresses and edit your password and account details.</p>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                    <div className="myaccount-content">
                      <h3>Orders</h3>
                      <div className="myaccount-table table-responsive text-center">
                        <table className="table table-bordered">
                          <thead className="thead-light">
                            <tr>
                              <th>Order</th>
                              <th>Date</th>
                              <th>Status</th>
                              <th>Total</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Aug 22, 2018</td>
                              <td>Pending</td>
                              <td>$3000</td>
                              <td><a href="shop-cart.html" className="check-btn sqr-btn ">View</a></td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>July 22, 2018</td>
                              <td>Approved</td>
                              <td>$200</td>
                              <td><a href="shop-cart.html" className="check-btn sqr-btn ">View</a></td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>June 12, 2017</td>
                              <td>On Hold</td>
                              <td>$990</td>
                              <td><a href="shop-cart.html" className="check-btn sqr-btn ">View</a></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="download" role="tabpanel" aria-labelledby="download-tab">
                    <div className="myaccount-content">
                      <h3>Downloads</h3>
                      <div className="myaccount-table table-responsive text-center">
                        <table className="table table-bordered">
                          <thead className="thead-light">
                            <tr>
                              <th>Product</th>
                              <th>Date</th>
                              <th>Expire</th>
                              <th>Download</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Haven - Free Real Estate PSD Template</td>
                              <td>Aug 22, 2018</td>
                              <td>Yes</td>
                              <td><a href="#/" className="check-btn sqr-btn"><i className="fa fa-cloud-download" /> Download File</a></td>
                            </tr>
                            <tr>
                              <td>HasTech - Profolio Business Template</td>
                              <td>Sep 12, 2018</td>
                              <td>Never</td>
                              <td><a href="#/" className="check-btn sqr-btn"><i className="fa fa-cloud-download" /> Download File</a></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="payment-method" role="tabpanel" aria-labelledby="payment-method-tab">
                    <div className="myaccount-content">
                      <h3>Payment Method</h3>
                      <p className="saved-message">You Can't Saved Your Payment Method yet.</p>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="address-edit" role="tabpanel" aria-labelledby="address-edit-tab">
                  <div className="myaccount-content">
                      <h3>Account Details</h3>
                      <div className="account-details-form">
                        <form action="#">
                          <div className="row">
                            <div className="col-lg-6">
                            <div className="single-input-item">
                                <label htmlFor="first-name" className="required">Remain password</label>
                                <input type="password" id="remain-password" onChange={handleInput} />
                              </div>
                              <div className="single-input-item">
                                <label htmlFor="first-name" className="required">New password</label>
                                <input type="password" id="password" onChange={handleInput} />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="single-input-item">
                                <label htmlFor="last-name" className="required">Confirm password</label>
                                <input type="password" id="confirm-password" onChange={handleInput}  />
                              </div>
                            </div>
                          </div>
                          <div className="single-input-item">
                            <button className="check-btn sqr-btn">Save Changes</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="account-info" role="tabpanel" aria-labelledby="account-info-tab">
                    <div className="myaccount-content">
                      <h3>Account Details</h3>
                      <div className="account-details-form">
                        <form action="#">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="single-input-item">
                                <label htmlFor="first-name" className="required">First Name</label>
                                <input type="text" name="firstname" id="first-name" defaultValue={inputs.firstname} onChange={handleInput} />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="single-input-item">
                                <label htmlFor="last-name" className="required">Last Name</label>
                                <input type="text" name="lastname" id="last-name" defaultValue={inputs.lastname} onChange={handleInput}  />
                              </div>
                            </div>
                          </div>
                          <div className="single-input-item">
                            <label htmlFor="display-name" className="required">Display Name</label>
                            <input type="text" id="display-name" defaultValue= {getDataUser?.user.firstname + " " + getDataUser?.user.lastname} readOnly></input>
                          </div>
                          <div className="single-input-item">
                            <label htmlFor="email" className="required">Email Addres</label>
                            <input type="email" id="email" value={inputs.email} readOnly />
                          </div>
                          <div className="single-input-item">
                            <label htmlFor="email" className="required">Phone</label>
                            <input type="number" name="phone" id="phone" value={inputs.phone} onChange={handleInput} />
                          </div>
                          <div className="single-input-item">
                            <button className="check-btn sqr-btn"  onClick={handleSaveChange}>Save Changes</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*== End My Account Area Wrapper ==*/}
        </>
    )
}
export default Myaccount