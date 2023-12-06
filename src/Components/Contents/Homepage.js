import axios from "axios"
import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../UserContext"
import { toast } from "react-toastify"
function Homepage() {
  const { getvalueaorefresh, setvalueaorefresh } = useContext(UserContext)
  const [getItem, setItem] = useState("")
  const [sold, setSold] = useState([])
  const [blog, setBlog] = useState([])
  const { getCart, setCart } = useContext(UserContext)
  const { getid, setid } = useContext(UserContext)
  const { getidlarge, setidlarge } = useContext(UserContext)
  const { getdataCart1, setdataCart1 } = useContext(UserContext)
  const { getidwishlist, setidwishlist } = useContext(UserContext)
  const [valueao, setvalueao] = useState("valueao")
  let getDataUser = JSON.parse(localStorage.getItem("User"))
  useEffect(() => {
    axios.get("http://localhost:8000/products")
      .then(response => {
        setItem(response.data.mess.slice(-3))
      })
      .catch(function (error) {
        console.log(error)
      })
    axios.get("http://localhost:8000/products?sort=sold&type=desc&page=1")
      .then(res => {
        setSold(res.data.mess.slice(0, 3))
      })
      .catch(function (error) {
        console.log(error)
      })
    axios.get('http://localhost:8000/blogs')
      .then(res => {
        setBlog(res.data.blogs.slice(-3))
      })
      .catch(function (error) {
        console.log(error)
      })

  }, [getvalueaorefresh])
  const handleClick = (id) => {
    if(getDataUser != null){
      let main = {}
      let nameInput = id
      let value = 1
      let test1 = localStorage.getItem("CartItem")
      setid(nameInput)
      if (test1) {
        main = JSON.parse(test1)
        for (var key in main) {
          const getqty = main[key]
          if (nameInput == key) {
            value = main[nameInput] + 1
            localStorage.setItem("CartItem", JSON.stringify(main))
          }
        }
      }
      main[nameInput] = value
      localStorage.setItem("CartItem", JSON.stringify(main))
      setCart(main)
    }else{
      toast.error("Vui lòng đăng nhập")
    }
  }
  const handleClicklarge = (id) => {
    setidlarge(id)
  }
  const handleclickwishlist = (id) => {
    if (getDataUser != null){
      setidwishlist(id)
      let idwishlist = id
      let main = []
      let test1 = localStorage.getItem("Wishlist")
      if (test1) {
        main = JSON.parse(test1)
        for (var key in main) {
          if (idwishlist == main[key]) {
            main.splice(key, 1)
          }
        }
      }
      main.push(idwishlist)
      localStorage.setItem("Wishlist", JSON.stringify(main))
    }else{
      toast.error("Vui lòng đăng nhập")
    }
  }
  function fetchDataproduct() {
    if (getItem.length > 0) {
      return (getItem.map((value, key) => {
        if (key <= 2) {
          return (
            <div className="col-6 col-lg-4 mb-4 mb-sm-9" key={key}>
              <div className="product-item">
                <div className="product-thumb">
                  <Link to={`/product-details/${value._id}`}>
                    <img src={"" + value.image} style={{ width: "370px", height: "450px" }} width={370} height={450} alt="Image-HasTech" />
                  </Link>

                  <span className="flag-new">new</span>
                  <div className="product-action">
                    <button id={value._id} onClick={() => handleClicklarge(value._id)} type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                      <i className="fa fa-expand" />
                    </button>
                    <button id={value._id} onClick={() => handleClick(value._id)} type="button" className="product-action-btn action-btn-cart" data-bs-toggle={getDataUser ? "modal" : ""} data-bs-target="#action-CartAddModal">
                      <span>Add to cart</span>
                    </button>
                    <button id={value._id} onClick={() => handleclickwishlist(value._id)} type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle={getDataUser ? "modal" : ""} data-bs-target="#action-WishlistModal">
                      <i className="fa fa-heart-o" />
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-rating">
                    <div className="rating">
                      {Array.from({ length: value.totalRatings }, (_, index) => (
                        <i key={index} className="fa fa-star-o" />
                      ))}
                    </div>

                    <div className="reviews">{value.brand}</div>
                  </div>
                  <h4 className="title">
                    <Link to={`/product-details/${value._id}`}>{value.title}</Link>
                  </h4>
                  <div className="product-rating">
                    <div className="reviews">Đã bán {value.sold}</div>
                  </div>
                  <div className="prices">
                    <span style={{ color: 'rgb(239,84,53)' }} className="price">₫{Intl.NumberFormat().format(value.price)}</span>
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
                      <a className="btn btn-border-dark" href={"product-details/" + sold[0]?._id}>BUY NOW</a>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="hero-slide-thumb">
                      <img src={sold[0]?.image} width={841} height={832} alt="Image" />
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
                      <a className="btn btn-border-dark" href={"product-details/" + sold[1]?._id}>BUY NOW</a>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="hero-slide-thumb">
                      <img src={sold[1]?.image} width={841} height={832} alt="Image" />
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

      {/*== Start Product Area Wrapper ==*/}
      <section className="section-space">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h2 className="title">Top Products</h2>
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

      {/*== Start Product Area TOP SOLD ==*/}
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h2 className="title">Top Sold</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
              </div>
            </div>
          </div>
          <div className="row mb-n4 mb-sm-n10 g-3 g-sm-6">
            {
              sold?.map((value, i) => (
                <div key={i} style={{ width: '370px' }} className="swiper mb-10">
                  <div className="product-item product-st2-item">
                    <div className="product-thumb">
                      <a className="d-block" href={"/product-details/" + value._id}>
                        <img src={value.image} style={{ height: '400px' }} width={370} height={450} alt="Image-HasTech" />
                      </a>
                      <span className="flag-new">new</span>
                    </div>
                    <div className="product-info">
                      <div className="product-rating">
                        <div className="rating">
                          {Array.from({ length: value.totalRatings }, (_, index) => (
                            <i key={index} className="fa fa-star-o" />
                          ))}
                        </div>

                        <div className="reviews">{value.brand}</div>
                      </div>
                      <h4 className="title"><a href={"/product-details/" + value._id}>{value.title}</a></h4>
                      <div className="product-rating">
                        <div className="reviews">Đã bán {value.sold}</div>
                      </div>
                      <div className="prices">
                        <span style={{ color: 'rgb(239,84,53)' }} className="price">₫{Intl.NumberFormat().format(value.price)}</span>
                        {/* <span className="price-old">300.00</span> */}
                      </div>
                      <div className="product-action">
                        <button id={value._id} onClick={() => handleClick(value._id)} type="button" className="product-action-btn action-btn-cart" data-bs-toggle={getDataUser ? "modal" : ""} data-bs-target="#action-CartAddModal">
                          <span>Add to cart</span>
                        </button>
                        <button id={value._id} onClick={() => handleClicklarge(value._id)} type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                          <i className="fa fa-expand" />
                        </button>
                        <button id={value._id} onClick={() => handleclickwishlist(value._id)} type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle={getDataUser ? "modal" : ""} data-bs-target="#action-WishlistModal">
                          <i className="fa fa-heart-o" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
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
            {
              blog?.map((e, i) => (
                <div className="col-sm-6 col-lg-4 mb-8" key={i}>
                  <div className="post-item">
                    <Link to={`/blog-details/${e?._id}`}>
                      <a className="thumb">
                        <img src={e?.images} style={{ height: '320px' }} width={370} height={320} alt="Image-HasTech" />
                      </a>
                    </Link>
                    <div className="content">
                      <a className="post-category" >{e?.category?.title}</a>
                      <h4 className="title">
                        <Link to={`/blog-details/${e?._id}`}>
                          <a>{e?.title}</a>
                        </Link>
                      </h4>
                      <ul className="meta">
                        <li className="author-info"><span>By:</span> <a href="blog.html">{e?.author}</a></li>
                        <li className="post-date">{new Date(e?.createdAt).toDateString()}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            }
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
      {/*== End News Letter Are a Wrapper ==*/}
    </>
  )
}
export default Homepage