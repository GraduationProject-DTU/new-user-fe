import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Comment from "./Comment"
import './Comment.css'
function Blogdetails(props){
  const [getdata1, setdata1] = useState("")
    let params = useParams()
    useEffect(() => {
      axios.get("http://localhost:8000/blogs/get-view/" + params.id)
          .then(response => {
              setdata1(response.data.blog)
          })
          .catch(function (error) {
              console.log(error)
          })
  }, [])
      function fetchData() {
        if (Object.keys(getdata1).length > 0) {
            return (
              <>
              <div className="blog-detail">
              <h3 className="blog-detail-title">{getdata1.title}</h3>
              <div className="blog-detail-category">
                <a className="category" href="/">{getdata1.category}</a>
              </div>
              <img className="blog-detail-img mb-7 mb-lg-10" src={""+getdata1.image} style={{width:"1170px" , height:"1012px"}} alt="Image" />
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="row">
                    <div className="col-md-7">
                      <ul className="blog-detail-meta">
                        <li className="meta-admin"><img src="assets/images/blog/admin.webp" alt="Image" /> {getdata1.author}</li>
                        <li>{getdata1.updatedAt}</li>
                      </ul>
                    </div>
                    <div className="col-md-5">
                      <div className="blog-detail-social">
                        <span>Share:</span>
                        <a href="https://www.pinterest.com/" target="_blank" rel="noopener"><i className="fa fa-pinterest-p" /></a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener"><i className="fa fa-twitter" /></a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener"><i className="fa fa-facebook" /></a>
                      </div>
                    </div>
                  </div>
                  <p className="desc mt-4 mt-lg-7">{getdata1.description}</p>
                  <p className="desc mb-6 mb-lg-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida quis turpis feugiat sapien venenatis. Iaculis nunc nisl risus mattis elit id lobortis. Proin erat fermentum tempor elementum bibendum. Proin sed in nunc purus. Non duis eu pretium dictumst sed habitant sit vitae eget. Nisi sit lacus, fusce diam. Massa odio sit velit sed purus quis dolor.</p>
                </div>
              </div>
              <img className="blog-detail-img" src="assets/images/blog/blog-detail2.webp" width={1170} height={700} alt="Image" />
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <p className="desc mt-6 mt-lg-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida quis turpis feugiat sapien venenatis. Iaculis nunc nisl risus mattis elit id lobortis. Proin erat fermentum tempor elementum bibendum. Proin sed in nunc purus. Non duis eu pretium dictumst sed habitant sit vitae eget. Nisi sit lacus, fusce diam. Massa odio sit velit sed purus quis dolor.</p>
                  <ul className="blog-detail-list">
                    <li>• Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>• Massa odio sit velit sed purus quis dolor.</li>
                    <li>• Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>• Proin sed in nunc purus. Non duis eu pretium dictumst</li>
                  </ul>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <blockquote className="blog-detail-blockquote mt-6 mt-lg-10 mb-6 mb-lg-10">
                    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper purus, at venenatis scelerisque nibh. Nisl sit convallis accumsan integer lorem. Nibh nunc in nulla quis pulvinar dictum. Eget nisi, praesent proin viverra.</p>
                    <span className="user-name">BY Momen de tomas</span>
                    <img className="quote-icon" src="assets/images/icons/quote1.webp" width={84} height={60} alt="Icon" />
                  </blockquote>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <p className="desc mb-6 mb-lg-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida quis turpis feugiat sapien venenatis. Iaculis nunc nisl risus mattis elit id lobortis. Proin erat fermentum tempor elementum bibendum. Proin sed in nunc purus. Non duis eu pretium dictumst sed habitant sit vitae eget. Nisi sit lacus, fusce diam. Massa odio sit velit sed purus quis dolor.</p>
                  <img className="blog-detail-img" src="assets/images/blog/blog-detail3.webp" width={1070} height={340} alt="Image" />
                </div>
              </div>
            </div>
            <div className="section-space pb-0">
              {/*== Start Product Category Item ==*/}
              <a href="product.html" className="product-banner-item">
                <img src="assets/images/shop/banner/9.webp" width={1170} height={200} alt="Image-HasTech" />
              </a>
              {/*== End Product Category Item ==*/}
            </div>
            <div className="row justify-content-between align-items-center pt-10 mt-4 section-space">
              <div className="col-sm-6">
                <a href="blog-details.html" className="blog-next-previous">
                  <div className="thumb">
                    <span className="arrow">PREV</span>
                    <img src="assets/images/blog/next-previous1.webp" width={93} height={80} alt="Image" />
                  </div>
                  <div className="content">
                    <h4 className="title">Lorem ipsum dolor amet, consectetur adipiscing.</h4>
                    <h5 className="post-date">February 13, 2022</h5>
                  </div>
                </a>
              </div>
              <div className="col-sm-6">
                <a href="blog-details.html" className="blog-next-previous blog-next">
                  <div className="thumb">
                    <span className="arrow">NEXT</span>
                    <img src="assets/images/blog/next-previous2.webp" width={93} height={80} alt="Image" />
                  </div>
                  <div className="content">
                    <h4 className="title">Lorem ipsum dolor amet, consectetur adipiscing.</h4>
                    <h5 className="post-date">February 13, 2022</h5>
                  </div>
                </a>
              </div>
            </div>
              </>
            )
        }
      }
    return(
        <>
        {/*== Start Page Header Area Wrapper ==*/}
        <nav aria-label="breadcrumb" className="breadcrumb-style1">
          <div className="container">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Blog Detail</li>
            </ol>
          </div>
        </nav>
        {/*== End Page Header Area Wrapper ==*/}
        {/*== Start Blog Detail Area Wrapper ==*/}
        <section className="section-space pb-0">
          <div className="container">
              {fetchData()}
              <Comment idBlog={params.id}/>
              {Comment()}
          </div>
        </section>
        {/*== End Blog Detail Area Wrapper ==*/}
        {/*== Start Blog Area Wrapper ==*/}
        <section className="section-space">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title text-center">
                  <h2 className="title">Blog posts</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                </div>
              </div>
            </div>
            <div className="row mb-n9">
              <div className="col-sm-6 col-lg-4 mb-8">
                {/*== Start Blog Item ==*/}
                <div className="post-item">
                  <a href="blog-details.html" className="thumb">
                    <img src="assets/images/blog/1.webp" width={370} height={320} alt="Image-HasTech" />
                  </a>
                  <div className="content">
                    <a className="post-category" href="blog.html">beauty</a>
                    <h4 className="title"><a href="blog-details.html">Lorem ipsum dolor sit amet consectetur adipiscing.</a></h4>
                    <ul className="meta">
                      <li className="author-info"><span>By:</span> <a href="blog.html">Tomas De Momen</a></li>
                      <li className="post-date">February 13, 2022</li>
                    </ul>
                  </div>
                </div>
                {/*== End Blog Item ==*/}
              </div>
              <div className="col-sm-6 col-lg-4 mb-8">
                {/*== Start Blog Item ==*/}
                <div className="post-item">
                  <a href="blog-details.html" className="thumb">
                    <img src="assets/images/blog/2.webp" width={370} height={320} alt="Image-HasTech" />
                  </a>
                  <div className="content">
                    <a className="post-category post-category-two" data-bg-color="#A49CFF" href="blog.html">beauty</a>
                    <h4 className="title"><a href="blog-details.html">Lorem ipsum dolor sit amet consectetur adipiscing.</a></h4>
                    <ul className="meta">
                      <li className="author-info"><span>By:</span> <a href="blog.html">Tomas De Momen</a></li>
                      <li className="post-date">February 13, 2022</li>
                    </ul>
                  </div>
                </div>
                {/*== End Blog Item ==*/}
              </div>
              <div className="col-sm-6 col-lg-4 mb-8">
                {/*== Start Blog Item ==*/}
                <div className="post-item">
                  <a href="blog-details.html" className="thumb">
                    <img src="assets/images/blog/3.webp" width={370} height={320} alt="Image-HasTech" />
                  </a>
                  <div className="content">
                    <a className="post-category post-category-three" data-bg-color="#9CDBFF" href="blog.html">beauty</a>
                    <h4 className="title"><a href="blog-details.html">Lorem ipsum dolor sit amet consectetur adipiscing.</a></h4>
                    <ul className="meta">
                      <li className="author-info"><span>By:</span> <a href="blog.html">Tomas De Momen</a></li>
                      <li className="post-date">February 13, 2022</li>
                    </ul>
                  </div>
                </div>
                {/*== End Blog Item ==*/}
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
export default Blogdetails