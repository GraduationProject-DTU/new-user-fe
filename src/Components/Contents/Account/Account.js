import { useState } from "react"
import axios from "axios"
import Register from "./Register"
function Account(){
    return(
        <>
        {/*== Start Page Header Area Wrapper ==*/}
        <section className="page-header-area pt-10 pb-9" data-bg-color="#FFF3DA">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="page-header-st3-content text-center text-md-start">
                  <ol className="breadcrumb justify-content-center justify-content-md-start">
                    <li className="breadcrumb-item"><a className="text-dark" href="index.html">Home</a></li>
                    <li className="breadcrumb-item active text-dark" aria-current="page">Account</li>
                  </ol>
                  <h2 className="page-header-title">Account</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*== End Page Header Area Wrapper ==*/}
        {/*== Start Account Area Wrapper ==*/}
        <section className="section-space">
          <div className="container">
            <div className="row mb-n8">
              <div className="col-lg-6 mb-8">
                {/*== Start Login Area Wrapper ==*/}
                <div className="my-account-item-wrap">
                  <h3 className="title">Login</h3>
                  <div className="my-account-form">
                    <form action="#" method="post">
                      <div className="form-group mb-6">
                        <label htmlFor="login_username">Username or Email Address <sup>*</sup></label>
                        <input type="email" id="login_username" />
                      </div>
                      <div className="form-group mb-6">
                        <label htmlFor="login_pwsd">Password <sup>*</sup></label>
                        <input type="password" id="login_pwsd" />
                      </div>
                      <div className="form-group d-flex align-items-center mb-14">
                        <a className="btn" href="my-account.html">Login</a>
                        <div className="form-check ms-3">
                          <input type="checkbox" className="form-check-input" id="remember_pwsd" />
                          <label className="form-check-label" htmlFor="remember_pwsd">Remember Me</label>
                        </div>
                      </div>
                      <a className="lost-password" href="my-account.html">Lost your Password?</a>
                    </form>
                  </div>
                </div>
                {/*== End Login Area Wrapper ==*/}
              </div>
              <div className="col-lg-6 mb-8">
                {/*== Start Register Area Wrapper ==*/}
                    {Register()}
                {/*== End Register Area Wrapper ==*/}
              </div>
            </div>
          </div>
        </section>
        {/*== End Account Area Wrapper ==*/}
        </>
    )
}
export default Account