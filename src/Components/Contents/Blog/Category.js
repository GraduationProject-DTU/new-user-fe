import axios from "axios"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

function Category(){
    const [getItem, setItem] = useState("")
        useEffect(() => {
            axios.get("http://localhost:8000/category-blogs")
                .then(response => {
                    setItem(response.data.category)
                    // console.log(response)
                })
                .catch(function (error) {
                    console.log(error)
                })
        }, [])
        function fetchData(){
            if(getItem.length>0){
              return getItem.map((value,key)=>{
                return(
                    <li><a href="#">{value.title}<span>(6)</span></a></li>
                )
              })
            }
        }
    return(
        <div className="blog-widget">
                    <h4 className="blog-widget-title">Popular Categoris</h4>
                    <ul className="blog-widget-category">
                      {fetchData()}
                    </ul>
        </div>
    )
}
export default Category