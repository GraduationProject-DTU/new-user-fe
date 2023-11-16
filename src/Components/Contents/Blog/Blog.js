import axios from "axios"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import ReactPaginate from 'react-paginate';
import Category from "./Category"
function Blog(){
  const [getItem, setItem] = useState("")
  const [getselected,setselected] = useState(1)
        useEffect(() => {
            axios.get(`http://localhost:8000/blogs?page=${getselected}`)
                .then(response => {
                    setItem(response.data.blog)
                    // console.log(response)
                    // console.log(`http://localhost:8000/blogs?page=${getselected}`)
                })
                .catch(function (error) {
                    console.log(error)
                })
        }, [getselected])
        const handlePageClick = (event) => {
          // console.log(event)
          setselected(+event.selected+1)
        }
        function fetchData(){
          if(Object.keys(getItem).length>0){
            if(getItem.length>0){
              return getItem.map((value,key)=>{
                const setimage = value.images["0"]
                // console.log(value)
              return(
                <div className="col-sm-6 col-lg-4 col-xl-6 mb-8">
                <div className="post-item">
                <Link to={`/blog-details/${value?._id}`}>
                <img src={"" +setimage} style={{width : "370px" , height: "320px" }} alt="Image-HasTech" />
                </Link>
                  <div className="content">
                    <a className="post-category" href="blog.html">{value?.category}</a>
                    <h4 className="title"><a href={"/blog-details/"+ value?._id}>{value?.title}</a></h4>
                    <ul className="meta">
                      <li className="author-info"><span>By:</span> <a href={"/blog-details/"+ value?._id}>{value?.author}</a></li>
                      <li className="post-date">{value?.updatedAt}</li>
                    </ul>
                  </div>
                </div>
                </div>                
              )
              })
            }
          }
        }
    return(
        <>
        {/*== Start Page Header Area Wrapper ==*/}
        <nav aria-label="breadcrumb" className="breadcrumb-style1 mb-10">
          <div className="container">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Blog</li>
            </ol>
          </div>
        </nav>
        {/*== Start Blog Area Wrapper ==*/}
        <section className="section-space pt-0">
          <div className="container">
            <div className="row justify-content-between flex-xl-row-reverse">
              <div className="col-xl-8">
                <div className="row">
                      {fetchData()}
                </div>
                <div className="col-12">
              <ul className="pagination justify-content-center me-auto ms-auto mt-5 mb-0 mb-sm-10">
                <ReactPaginate
                      breakLabel="..."
                      onPageChange={handlePageClick}
                      pageRangeDisplayed={5}
                      pageCount={6}
                      previousClassName="page-item"
                      nextClassName="page-item"
                      pageClassName="page-item"
                      pageLinkClassName="page-link"
                      breakClassName="page-item"
                      breakLinkClassName="page-link"
                      containerClassName="pagination"
                      activeClassName="active"
                    />
              </ul>
                </div> 
                <button><Link to={"/createblog"}>Create New Blog</Link></button>   
              </div>
              <div className="col-xl-4">
                <div className="blog-sidebar-widget">
                  <div className="blog-search-widget">
                    <form action="#">
                      <input type="search" placeholder="Search Here" />
                      <button type="submit"><i className="fa fa-search" /></button>
                    </form>
                  </div>
                    {Category()}
                  <div className="blog-widget">
                    <h4 className="blog-widget-title">Recent Posts</h4>
                    <div className="blog-widget-post">
                      <div className="blog-widget-single-post">
                        <a href="blog-details.html">
                          <img src="assets/images/blog/s1.webp" width={75} height={78} alt="Images" />
                          <span className="title">Lorem ipsum dolor sit amet conse adipis.</span>
                        </a>
                        <span className="date">Sep 24,2022</span>
                      </div>
                      <div className="blog-widget-single-post">
                        <a href="blog-details.html">
                          <img src="assets/images/blog/s2.webp" width={75} height={78} alt="Images" />
                          <span className="title">Lorem ipsum dolor sit amet conse adipis.</span>
                        </a>
                        <span className="date">Sep 25,2022</span>
                      </div>
                      <div className="blog-widget-single-post">
                        <a href="blog-details.html">
                          <img src="assets/images/blog/s3.webp" width={75} height={78} alt="Images" />
                          <span className="title">Lorem ipsum dolor sit amet conse adipis.</span>
                        </a>
                        <span className="date">Sep 26,2022</span>
                      </div>
                    </div>
                  </div>
                  <div className="blog-widget mb-0">
                    <h4 className="blog-widget-title">Popular Tags</h4>
                    <ul className="blog-widget-tags">
                      <li><a href="blog.html">Beauty</a></li>
                      <li><a href="blog.html">MakeupArtist</a></li>
                      <li><a href="blog.html">Makeup</a></li>
                      <li><a href="blog.html">Hair</a></li>
                      <li><a href="blog.html">Nails</a></li>
                      <li><a href="blog.html">Hairstyle</a></li>
                      <li><a href="blog.html">Skincare</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*== End Blog Area Wrapper ==*/}
        {/*== Start News Letter Area Wrapper ==*/}
        <section className="section-space pt-0">
          <div className="container">
            <div className="newsletter-content-wrap" data-bg-img="assets/images/photos/bg1.webp">
              <div className="newsletter-content">
                <div className="section-title mb-0">
                  <h2 className="title">Join with us</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
                </div>
              </div>
              <div className="newsletter-form">
                <form>
                  <input type="email" className="form-control" placeholder="enter your email" />
                  <button className="btn-submit" type="submit"><i className="fa fa-paper-plane" /></button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/*== End News Letter Area Wrapper ==*/}
        </>
    )
}
export default Blog