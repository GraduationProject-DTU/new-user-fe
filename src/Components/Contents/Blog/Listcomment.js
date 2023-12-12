import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
function Listcomment(props) {
    const getDataUser = JSON.parse(localStorage.getItem("User"))
    function fetchData() {
        const getComment = props.getComment
        if (getComment.length > 0) {
            return getComment.map((value, key) => {
                console.log({ value })
                return (
                    <div className="comment_box" style={{ marginBottom: '32px' }}>
                        <img className="media_man" src={value?.userId?.avatar} alt="" />
                        <div className="media-body">
                            <div className="custom_flex">
                                <h5 className="custom_para">{value?.userId?.firstname} {value?.userId?.lastname} <span>{value.date}</span></h5>
                                {/* <a className="reply_text" href="#"><i className="fa fa-reply" /></a> */}
                            </div>
                            <p className="blog_details_para">{value.content}</p>
                        </div>
                    </div>
                )
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
            {fetchData()}
        </>
    )
}
export default Listcomment