import { useState } from "react"
import axios from "axios"
function Comment(){
    const [comment, setcomment] = useState("")
    const getDataUser = JSON.parse(localStorage.getItem("User"))
    function handleContent(e) {
        setcomment(e.target.value)
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
                <textarea name="" id="area_comment" cols="30" rows="11"></textarea>
                <a href="">post comment</a>
            </div>
        </>
    )
}
export default Comment
