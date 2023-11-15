import axios from "axios"
import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../UserContext"
function Homepage() {
  const [getItem, setItem] = useState("")
  const {getCart,setCart} = useContext(UserContext)
  const {getid,setid} = useContext(UserContext)
  const {getidlarge,setidlarge} = useContext(UserContext)
  const {getdataCart1,setdataCart1} = useContext(UserContext)
  const {getidwishlist,setidwishlist} = useContext(UserContext)
  const [valueao,setvalueao] = useState("valueao")
  useEffect(() => {
    axios.get("http://localhost:8000/products")
        .then(response => {
            setItem(response.data.mess)
            // console.log(response.data.mess)
        })
        .catch(function (error) {
            console.log(error)
        })
        // axios.get("http://localhost:8000/blogs/")
        // .then(response1 => {
        //   setItemBlog(response1.data.blog)
        // })
        // .catch(function (error) {
        //     console.log(error)
        // })
  }, [])
  const handleClick = (id) => {
    let main = {}
    let nameInput = id
    let value = 1
    let test1 = localStorage.getItem("CartItem")
      setid(nameInput)
      if(test1){
        main = JSON.parse(test1)
        for(var key in main){
            const getqty = main[key]
            if(nameInput == key){
                value = main[nameInput] +1
                localStorage.setItem("CartItem",JSON.stringify(main))
            }
        }
    }
      main[nameInput] = value
      localStorage.setItem("CartItem",JSON.stringify(main))
      setCart(main)
  }
  const handleClicklarge = (id) =>{
    setidlarge(id)
  }
  const handleclickwishlist = (id)=>{
    setidwishlist(id)
    let idwishlist = id
    let main = []
        let test1 = localStorage.getItem("Wishlist")
        if(test1){
            main = JSON.parse(test1)
            for(var key in main){
                if(idwishlist == main[key]){
                  main.splice(key,1)
                }
            }
        }
        main.push(idwishlist)
        localStorage.setItem("Wishlist",JSON.stringify(main))
  }
  function fetchDataproduct(){
    if(getItem.length>0){
      return(getItem.map((value,key)=>{
        if(key<=2){
          return(
            <div className="col-6 col-lg-4 mb-4 mb-sm-9" key={key}>
            <div className="product-item">
              <div className="product-thumb">
                <a className="d-block" href={"product-details/" + value._id}>
                  <img src={""+value.image} style={{width: "370px", height: "450px"}} width={370} height={450} alt="Image-HasTech" />
                </a>
                <span className="flag-new">new</span>
                <div className="product-action">
                  <button id={value._id} onClick={()=>handleClicklarge(value._id)}type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                    <i className="fa fa-expand" />
                  </button>
                  <button id={value._id} onClick={()=>handleClick(value._id)} type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                    <span>Add to cart</span>
                  </button>
                  <button id={value._id} onClick={()=>handleclickwishlist(value._id)} type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                    <i className="fa fa-heart-o" />
                  </button>
                </div>
              </div>
              <div className="product-info">
                <div className="product-rating">
                  <div className="rating">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-half-o" />
                  </div>
                  <div className="reviews">150 reviews</div>
                </div>
                <h4 className="title"><a href={"product-details/" + value._id}>{value.title}</a></h4>
                <div className="prices">
                  <span className="price">{value.price}</span>
                  <span className="price-old">300.00</span>
                </div>
              </div>
              <div className="product-action-bottom">
                <button type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                  <i className="fa fa-expand" />
                </button>
                <button type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                  <i className="fa fa-heart-o" />
                </button>
                <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                  <span>Add to cart</span>
                </button>
              </div>
            </div>
            </div>
          )
        }
      }))
    }
  }
  return (
    <>
    {/*== Start Hero Area Wrapper ==*/}
    <section className="hero-slider-area position-relative">
      <div className="swiper hero-slider-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide hero-slide-item">
            <div className="container">
              <div className="row align-items-center position-relative">
                <div className="col-12 col-md-6">
                  <div className="hero-slide-content">
                    <div className="hero-slide-text-img"><img src="assets/images/slider/text-theme.webp" width={427} height={232} alt="Image" /></div>
                    <h2 className="hero-slide-title">CLEAN FRESH</h2>
                    <p className="hero-slide-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</p>
                    <a className="btn btn-border-dark" href="product.html">BUY NOW</a>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="hero-slide-thumb">
                    <img src="assets/images/slider/slider1.webp" width={841} height={832} alt="Image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-slide-text-shape"><img src="assets/images/slider/text1.webp" width={70} height={955} alt="Image" /></div>
            <div className="hero-slide-social-shape" />
          </div>
          <div className="swiper-slide hero-slide-item">
            <div className="container">
              <div className="row align-items-center position-relative">
                <div className="col-12 col-md-6">
                  <div className="hero-slide-content">
                    <div className="hero-slide-text-img"><img src="assets/images/slider/text-theme.webp" width={427} height={232} alt="Image" /></div>
                    <h2 className="hero-slide-title">Facial Cream</h2>
                    <p className="hero-slide-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</p>
                    <a className="btn btn-border-dark" href="product.html">BUY NOW</a>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="hero-slide-thumb">
                    <img src="assets/images/slider/slider2.webp" width={841} height={832} alt="Image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-slide-text-shape"><img src="assets/images/slider/text1.webp" width={70} height={955} alt="Image" /></div>
            <div className="hero-slide-social-shape" />
          </div>
        </div>
        {/*== Add Pagination ==*/}
        <div className="hero-slider-pagination" />
      </div>
      <div className="hero-slide-social-media">
        <a href="https://www.pinterest.com/" target="_blank" rel="noopener"><i className="fa fa-pinterest-p" /></a>
        <a href="https://twitter.com/" target="_blank" rel="noopener"><i className="fa fa-twitter" /></a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener"><i className="fa fa-facebook" /></a>
      </div>
    </section>
    {/*== End Hero Area Wrapper ==*/}
    {/*== Start Product Category Area Wrapper ==*/}
    <section className="section-space pb-0">
      <div className="container">
        <div className="row g-3 g-sm-6">
          <div className="col-6 col-lg-4 col-lg-2 col-xl-2">
            {/*== Start Product Category Item ==*/}
            <a href="product.html" className="product-category-item">
              <img className="icon" src="assets/images/shop/category/1.webp" width={70} height={80} alt="Image-HasTech" />
              <h3 className="title">Hare care</h3>
              <span className="flag-new">new</span>
            </a>
            {/*== End Product Category Item ==*/}
          </div>
          <div className="col-6 col-lg-4 col-lg-2 col-xl-2">
            {/*== Start Product Category Item ==*/}
            <a href="product.html" className="product-category-item" data-bg-color="#FFEDB4">
              <img className="icon" src="assets/images/shop/category/2.webp" width={80} height={80} alt="Image-HasTech" />
              <h3 className="title">Skin care</h3>
            </a>
            {/*== End Product Category Item ==*/}
          </div>
          <div className="col-6 col-lg-4 col-lg-2 col-xl-2 mt-lg-0 mt-sm-6 mt-4">
            {/*== Start Product Category Item ==*/}
            <a href="product.html" className="product-category-item" data-bg-color="#DFE4FF">
              <img className="icon" src="assets/images/shop/category/3.webp" width={80} height={80} alt="Image-HasTech" />
              <h3 className="title">Lip stick</h3>
            </a>
            {/*== End Product Category Item ==*/}
          </div>
          <div className="col-6 col-lg-4 col-lg-2 col-xl-2 mt-xl-0 mt-sm-6 mt-4">
            {/*== Start Product Category Item ==*/}
            <a href="product.html" className="product-category-item" data-bg-color="#FFEACC">
              <img className="icon" src="assets/images/shop/category/4.webp" width={80} height={80} alt="Image-HasTech" />
              <h3 className="title">Face skin</h3>
              <span data-bg-color="#835BF4" className="flag-new">sale</span>
            </a>
            {/*== End Product Category Item ==*/}
          </div>
          <div className="col-6 col-lg-4 col-lg-2 col-xl-2 mt-xl-0 mt-sm-6 mt-4">
            {/*== Start Product Category Item ==*/}
            <a href="product.html" className="product-category-item" data-bg-color="#FFDAE0">
              <img className="icon" src="assets/images/shop/category/5.webp" width={80} height={80} alt="Image-HasTech" />
              <h3 className="title">Blusher</h3>
            </a>
            {/*== End Product Category Item ==*/}
          </div>
          <div className="col-6 col-lg-4 col-lg-2 col-xl-2 mt-xl-0 mt-sm-6 mt-4">
            {/*== Start Product Category Item ==*/}
            <a href="product.html" className="product-category-item" data-bg-color="#FFF3DA">
              <img className="icon" src="assets/images/shop/category/6.webp" width={80} height={80} alt="Image-HasTech" />
              <h3 className="title">Natural</h3>
            </a>
            {/*== End Product Category Item ==*/}
          </div>
        </div>
      </div>
    </section>
    {/*== End Product Category Area Wrapper ==*/}
    {/*== Start Product Area Wrapper ==*/}
    <section className="section-space">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h2 className="title">Top sale</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
            </div>
          </div>
        </div>
        <div className="row mb-n4 mb-sm-n10 g-3 g-sm-6">
            {fetchDataproduct()}
        </div>
      </div>
    </section>
    {/*== End Product Area Wrapper ==*/}
    {/*== Start Product Banner Area Wrapper ==*/}
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            {/*== Start Product Category Item ==*/}
            <a href="product.html" className="product-banner-item">
              <img src="assets/images/shop/banner/1.webp" width={370} height={370} alt="Image-HasTech" />
            </a>
            {/*== End Product Category Item ==*/}
          </div>
          <div className="col-sm-6 col-lg-4 mt-sm-0 mt-6">
            {/*== Start Product Category Item ==*/}
            <a href="product.html" className="product-banner-item">
              <img src="assets/images/shop/banner/2.webp" width={370} height={370} alt="Image-HasTech" />
            </a>
            {/*== End Product Category Item ==*/}
          </div>
          <div className="col-sm-6 col-lg-4 mt-lg-0 mt-6">
            {/*== Start Product Category Item ==*/}
            <a href="product.html" className="product-banner-item">
              <img src="assets/images/shop/banner/3.webp" width={370} height={370} alt="Image-HasTech" />
            </a>
            {/*== End Product Category Item ==*/}
          </div>
        </div>
      </div>
    </section>
    {/*== End Product Banner Area Wrapper ==*/}
    {/*== Start Product Area Wrapper ==*/}
    <section className="section-space pb-0">
      <div className="container">
        <div className="row mb-n4 mb-sm-n10 g-3 g-sm-6">
          <div className="col-6 col-lg-4 mb-4 mb-sm-8">
            {/*== Start Product Item ==*/}
            <div className="product-item">
              <div className="product-thumb">
                <a className="d-block" href="product-details.html">
                  <img src="assets/images/shop/4.webp" width={370} height={450} alt="Image-HasTech" />
                </a>
                <span className="flag-new">new</span>
                <div className="product-action">
                  <button type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                    <i className="fa fa-expand" />
                  </button>
                  <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                    <span>Add to cart</span>
                  </button>
                  <button type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                    <i className="fa fa-heart-o" />
                  </button>
                </div>
              </div>
              <div className="product-info">
                <div className="product-rating">
                  <div className="rating">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-half-o" />
                  </div>
                  <div className="reviews">150 reviews</div>
                </div>
                <h4 className="title"><a href="product-details.html">Readable content DX22</a></h4>
                <div className="prices">
                  <span className="price">$210.00</span>
                  <span className="price-old">300.00</span>
                </div>
              </div>
              <div className="product-action-bottom">
                <button type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                  <i className="fa fa-expand" />
                </button>
                <button type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                  <i className="fa fa-heart-o" />
                </button>
                <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                  <span>Add to cart</span>
                </button>
              </div>
            </div>
            {/*== End prPduct Item ==*/}
          </div>
          <div className="col-6 col-lg-4 mb-4 mb-sm-8">
            {/*== Start Product Item ==*/}
            <div className="product-item">
              <div className="product-thumb">
                <a className="d-block" href="product-details.html">
                  <img src="assets/images/shop/5.webp" width={370} height={450} alt="Image-HasTech" />
                </a>
                <span className="flag-new">new</span>
                <div className="product-action">
                  <button type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                    <i className="fa fa-expand" />
                  </button>
                  <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                    <span>Add to cart</span>
                  </button>
                  <button type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                    <i className="fa fa-heart-o" />
                  </button>
                </div>
              </div>
              <div className="product-info">
                <div className="product-rating">
                  <div className="rating">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-half-o" />
                  </div>
                  <div className="reviews">150 reviews</div>
                </div>
                <h4 className="title"><a href="product-details.html">Voyage face cleaner</a></h4>
                <div className="prices">
                  <span className="price">$210.00</span>
                  <span className="price-old">300.00</span>
                </div>
              </div>
              <div className="product-action-bottom">
                <button type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                  <i className="fa fa-expand" />
                </button>
                <button type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                  <i className="fa fa-heart-o" />
                </button>
                <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                  <span>Add to cart</span>
                </button>
              </div>
            </div>
            {/*== End prPduct Item ==*/}
          </div>
          <div className="col-6 col-lg-4 mb-4 mb-sm-8">
            {/*== Start Product Item ==*/}
            <div className="product-item">
              <div className="product-thumb">
                <a className="d-block" href="product-details.html">
                  <img src="assets/images/shop/6.webp" width={370} height={450} alt="Image-HasTech" />
                </a>
                <span className="flag-new">new</span>
                <div className="product-action">
                  <button type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                    <i className="fa fa-expand" />
                  </button>
                  <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                    <span>Add to cart</span>
                  </button>
                  <button type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                    <i className="fa fa-heart-o" />
                  </button>
                </div>
              </div>
              <div className="product-info">
                <div className="product-rating">
                  <div className="rating">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-half-o" />
                  </div>
                  <div className="reviews">150 reviews</div>
                </div>
                <h4 className="title"><a href="product-details.html">Impulse Duffle</a></h4>
                <div className="prices">
                  <span className="price">$210.00</span>
                  <span className="price-old">300.00</span>
                </div>
              </div>
              <div className="product-action-bottom">
                <button type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                  <i className="fa fa-expand" />
                </button>
                <button type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                  <i className="fa fa-heart-o" />
                </button>
                <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                  <span>Add to cart</span>
                </button>
              </div>
            </div>
            {/*== End prPduct Item ==*/}
          </div>
        </div>
      </div>
    </section>
    {/*== End Product Area Wrapper ==*/}
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
                <h4 className="title"><a href="blog-details.html">Facial Scrub is natural treatment for face.</a></h4>
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
                <h4 className="title"><a href="blog-details.html">Benefit of Hot Ston Spa for your health &amp; life.</a></h4>
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
export default Homepage