import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
function Listcomment(props){
    // const [getdata1, setdata1] = useState("")
    // let params = useParams()
    // const [check,setCheck] = useState("checked")
    // useEffect(() => {
    //     axios.get("http://localhost:8000/blogs/get-view/" + params.id)
    //         .then(response => {
    //             setdata1(response.data.blog)
    //             console.log(response.data.blog)
    //         })
    //         .catch(function (error) {
    //             console.log(error)
    //         })
    // }, [])
    function fetchData() {
        console.log(props.getComment)
         const getComment = props.getComment
         console.log(getComment)
         if(getComment.length>0){
            return getComment.map((value,key)=>{
                return(
                    <div className="comment_box">
                     <img className="media_man" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png" alt="" />
                     <div className="media-body">
                     <div className="custom_flex">
                         <h5 className="custom_para">{value.userId.firstname} {value.userId.lastname} <span>{value.date}</span></h5>
                         <a className="reply_text" href="#"><i className="fa fa-reply" /></a>
                     </div>
                     <p className="blog_details_para">{value.content}</p>
                     </div>
                 </div>
                )
            })
         }
        // if (Object.keys(getComment).length > 0) {
        //     return getComment.comments.map((value,key)=>{
        //     return(
        //             <div className="comment_box">
        //             <img className="media_man" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png" alt="" />
        //             <div className="media-body">
        //             <div className="custom_flex">
        //                 <h5 className="custom_para">{value.userId.firstname} {value.userId.lastname} <span>{value.date}</span></h5>
        //                 <a className="reply_text" href="#"><i className="fa fa-reply" /></a>
        //             </div>
        //             <p className="blog_details_para">{value.content}</p>
        //             </div>
        //         </div>
        //         )
        //     })    
        // }
    }
    return(
        <>
        {fetchData()}
        </>
    )
}
export default Listcomment