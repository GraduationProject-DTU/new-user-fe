import { useState } from "react"
import axios from "axios"
import Listcomment from "./Listcomment"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Comment(props) {
    const [comment, setcomment] = useState("")
    const getDataUser = JSON.parse(localStorage.getItem("User"))
    function handleContent(e) {
        setcomment(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        let errorsubmit = {}
        // console.log(props.idBlog)
        console.log(props)
        let flag = true
        if (!getDataUser) {
            toast.error("Bạn phải đăng nhập trước")
            flag = false
        } else if (comment == "") {
            toast.error("Vui lòng nhập comment")
            flag = false
        } else if (comment) {
            // console.log(getDataUser.token)
            let url = "http://localhost:8000/blogs/comment-blog"
            let accessToken = getDataUser.token
            let config = {
                headers: {
                    'token': 'Bearer ' + accessToken,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                }
            }
            const data = {
                "bid": props.idBlog,
                "comment": comment
            }
            axios.post(url, data, config)
                .then(response => {
                    console.log(response.data)
                    props.getcmt("ok")
                    setcomment('')
                    toast.success("Comment thành công", {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                })

        }
    }
    return (
        <>
            <div className="comment_wrapper">
                <div className="container">
                    <h2 className="head_text">Recent Comment</h2>
                </div>
            </div>
            <div class="leave_comment">
                <h3>leave a comment</h3>
                <form onSubmit={handleSubmit}>
                    <textarea name="" value={comment} id="area_comment" cols="30" rows="11" onChange={handleContent}></textarea>
                    <button type="submit" className="btn">Post comment</button>
                </form>
                <ToastContainer />
            </div>
        </>
    )
}
export default Comment
