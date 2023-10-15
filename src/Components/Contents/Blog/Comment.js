import { useState } from "react"
import axios from "axios"
function Comment(props){
    const [comment, setcomment] = useState("")
    const getDataUser = JSON.parse(localStorage.getItem("User"))
    function handleContent(e) {
        setcomment(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault(e)
        let errorsubmit = {}
        console.log(props.idBlog)
        let flag = true
        if (!getDataUser) {
            alert("Must login")
            flag = false
        } else if (comment == "") {
            alert("Must comment")
            flag = false
        } else if (comment){
            console.log(getDataUser.token)
            let url = "http://localhost:8000/blogs/comment-blog"
            let accessToken = getDataUser.token
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + accessToken,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                }
            }
            const formData = new FormData()
            formData.append("bid", props.idBlog)
            formData.append("comment",comment)
            axios.post(url, formData, config)
                .then(response => {
                    console.log(response)
                })
        }
    }
    return(
        <>
            <div className="comment_wrapper">
                <div className="container">
                    <h2 className="head_text">Recent Comment</h2>
                    <div className="comment_box">
                        <img className="media_man" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png" alt="" />
                        <div className="media-body">
                        <div className="custom_flex">
                            <h5 className="custom_para">Diego Fou | <span>jan 06 2020</span></h5>
                            <a className="reply_text" href="#"><i className="fa fa-reply" /></a>
                        </div>
                        <p className="blog_details_para">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utx gh labore et dolor magna ali Ut enim ad minim veniam, quis nostrud exercitation .</p>
                        <div className="comment_box">
                            <img className="media_man" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png" alt="" />
                            <div className="media_body">
                            <div className="custom_flex">
                                <h5 className="custom_para">Diego Fou | <span>jan 06 2020</span></h5>
                                <a className="reply_text" href="#"><i className="fa fa-reply" /></a>
                            </div>
                            <p className="blog_details_para">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utx gh labore et dolor magna ali Ut enim ad minim veniam, quis nostrud exercitation .</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="comment_box">
                        <img className="media_man" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png" alt="" />
                        <div className="media-body">
                        <div className="custom_flex">
                            <h5 className="custom_para">Diego Fou | <span>jan 06 2020</span></h5>
                            <a className="reply_text" href="#"><i className="fa fa-reply" /></a>
                        </div>
                        <p className="blog_details_para">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utx gh labore et dolor magna ali Ut enim ad minim veniam, quis nostrud exercitation .</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="leave_comment">
                <h3>leave a comment</h3>
                <form onSubmit={handleSubmit}>
                    <textarea name="" id="area_comment" cols="30" rows="11" onChange={handleContent}></textarea>
                    <button type="submit" className="btn">Post comment</button>
                </form>
            </div>
        </>
    )
}
export default Comment
