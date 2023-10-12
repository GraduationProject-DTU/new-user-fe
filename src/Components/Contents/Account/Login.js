import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
function Login(){
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({})
    const handleInput = (e) => {
        const nameInput = e.target.name
        const value = e.target.value
        setInputs(state => ({ ...state, [nameInput]: value }))
    }
    function renderError() {
        if (Object.keys(errors).length > 0) {
            return Object.keys(errors).map((key, index) => {
                return (
                    <p key={index}>{errors[key]}</p>
                )
            })
        }
    }
    function handleSubmit(e) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        e.preventDefault()
        let errorSubmit = {}
        let flag = true
        if (inputs.email == "") {
            errorSubmit.email = "Vui long nhap email"
            flag = false
        }
        if (inputs.password == "") {
            errorSubmit.pass = "Vui long nhap pass"
            flag = false
        }
        if (!flag) {
            setErrors(errorSubmit)
        }
        if (flag) {
            const data = {
                email: inputs.email,
                password: inputs.password
            }
                axios.post("http://localhost:8000/auth/login",data)
                .then((res)=>{
                  console.log(res)
                })
                .catch((res)=>{   
                    console.log(res)
                })
        }
    }
    return(
        <div className="my-account-form">
        <form action="#" method="post" onSubmit={handleSubmit}>
          <div className="form-group mb-6">
            <label htmlFor="login_username">Email Address <sup>*</sup></label>
            <input type="email" id="login_username" name="email" onChange={handleInput} />
            {errors.email}
          </div>
          <div className="form-group mb-6">
            <label htmlFor="login_pwsd">Password <sup>*</sup></label>
            <input type="password" id="login_pwsd" name="password" onChange={handleInput} />
            {errors.pass}
          </div>
          <div className="form-group d-flex align-items-center mb-14">
            <button className="btn">Login</button>
            <div className="form-check ms-3">
              <input type="checkbox" className="form-check-input" id="remember_pwsd" />
              <label className="form-check-label" htmlFor="remember_pwsd">Remember Me</label>
            </div>
          </div>
          <a className="lost-password" href="my-account.html">Lost your Password?</a>
        </form>
      </div>
    )
}
export default Login