import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './product.css'
import { UserContext } from "../../../UserContext"
function Productdetails() {
  const [product, setProduct] = useState([])
  const [products, setProducts] = useState([])
  const [star, setStar] = useState(0)
  const [comment, setComment] = useState('')
  const { getCart, setCart } = useContext(UserContext)
  const { getid, setid } = useContext(UserContext)
  let params = useParams()
  const { getidwishlist, setidwishlist } = useContext(UserContext)
  const [getquantity,setquantity] = useState(1)
  const body = {
    'postId': params.id,
    'star': star,  
    'comment': comment
  }
  const onChancequantity= (e) =>{
    setquantity(e.target.value)
    if (e.target.value <=1){
      setquantity(1)
    }
  }
  const handleClick = (id) => {
    let main = {}
    let nameInput = id
    let value = +getquantity
    let test1 = localStorage.getItem("CartItem")
    setid(nameInput)
    if (test1) {
      main = JSON.parse(test1)
      for (var key in main) {
        if (nameInput == key) {
          value = main[nameInput] + +value
          localStorage.setItem("CartItem", JSON.stringify(main))
        }
      }
    }
    main[nameInput] = value
    localStorage.setItem("CartItem", JSON.stringify(main))
    setCart(main)
  }
  useEffect(() => {
    try {
      axios.get('http://localhost:8000/products/' + params.id)
        .then(res => {
          setProduct(res.data.product)
          console.log(res.data.product)
        })
        .catch(err => {
          console.log('catch log', err)
        })

      axios.get('http://localhost:8000/products/')
        .then(res => {
          setProducts(res.data.mess.slice(0, 3))
        })
        .catch(err => {
          console.log('catch log', err)
        })

      // axios.post('http://localhost:8000/products/rating-product', body)



    } catch (error) {
      console.log('error', error)
    }
  }, [])
  const handleclickwishlist = (id) => {
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
  }
  return (
    <>
      {/*== Start Page Header Area Wrapper ==*/}
      <section className="page-header-area pt-10 pb-9" data-bg-color="#FFF3DA">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="page-header-st3-content text-center text-md-start">
                <ol className="breadcrumb justify-content-center justify-content-md-start">
                  <li className="breadcrumb-item"><a className="text-dark" href="index.html">Home</a></li>
                  <li className="breadcrumb-item active text-dark" aria-current="page">Product Detail</li>
                </ol>
                <h2 className="page-header-title">Product Detail</h2>
              </div>
            </div>
            <div className="col-md-7">
              <h5 className="showing-pagination-results mt-5 mt-md-9 text-center text-md-end">Showing Single Product</h5>
            </div>
          </div>
        </div>
      </section>
      {/*== End Page Header Area Wrapper ==*/}
      {/*== Start Product Details Area Wrapper ==*/}
      <section className="section-space">
        <div className="container">

          <div className="row product-details">
            <div className="col-lg-6">
              <div className="product-details-thumb">
                <img src={product.image} width={570} height={693} alt="Image" />
                <span className="flag-new">new</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product-details-content">
                <h5 className="product-details-collection">Premioum collection</h5>
                <h1 className="product-details-title" style={{ fontSize: '26px' }}>{product.title}</h1>
                <div className="product-details-review mb-7">
                  <div className="product-review-icon">
                    <div className="rating">
                      {Array.from({ length: product.totalRatings }, (_, index) => (
                        <i key={index} className="fa fa-star-o" />
                      ))}
                    </div>
                  </div>
                  <button type="button" className="product-review-show">{product.brand}</button>
                  <button style={{ marginLeft: '32px' }} type="button" className="product-review-show">Đã bán {product.sold}</button>
                </div>
                <div className="product-details-pro-qty">
                  <div className="pro-qty">
                    <input type="number" title="Quantity" defaultValue={1} onChange={onChancequantity} min={1} />
                  </div>
                </div>
                <div className="product-details-shipping-cost">
                  <input className="form-check-input" type="checkbox" defaultValue id="ShippingCost" defaultChecked />
                  <label className="form-check-label" htmlFor="ShippingCost">Shipping Fees $3.22 ,Fast delivery</label>
                  <input style={{ marginLeft: '32px' }} className="form-check-input" type="checkbox" defaultValue id="ShippingCost" defaultChecked />
                  <label className="form-check-label" htmlFor="ShippingCost">FreeShip, Slow delivery</label>
                </div>
                <div className="product-details-action">
                  <h4 style={{ color: 'rgb(239,84,53)' }} className="price">₫{Intl.NumberFormat().format(product.price * getquantity)}</h4>
                  <div className="product-details-cart-wishlist">
                    <button id={product._id} onClick={() => handleclickwishlist(product._id)}  type="button" className="btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal"><i className="fa fa-heart-o" /></button>
                    <button id={product._id} onClick={() => handleClick(product._id)} type="button" className="btn" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="row">
            <div className="col-lg-7">
              <div className="nav product-details-nav" id="product-details-nav-tab" role="tablist">
                <button className="nav-link" id="specification-tab" data-bs-toggle="tab" data-bs-target="#specification" type="button" role="tab" aria-controls="specification" aria-selected="false">Specification</button>
                <button className="nav-link active" id="review-tab" data-bs-toggle="tab" data-bs-target="#review" type="button" role="tab" aria-controls="review" aria-selected="true">Review</button>
              </div>
              <div className="tab-content" id="product-details-nav-tabContent">
                <div className="tab-pane" id="specification" role="tabpanel" aria-labelledby="specification-tab">
                  <p>{product.description}</p>
                </div>
                <div className="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
                  {/*== Start Reviews Content Item ==*/}

                  {
                    product?.ratings?.map((e, i) => (
                      <div className="product-review-item">
                        <div className="product-review-top">
                          <div className="product-review-thumb">
                            <img src={e.postedBy?.avatar} style={{ width: '40px', height: '40px' }} alt="Images" />
                          </div>
                          <div className="product-review-content">
                            <span className="product-review-name">{e.postedBy?.firstname} {e.postedBy?.lastname}</span>
                            <span className="product-review-designation">Delveloper</span>
                            <div className="product-review-icon">

                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />

                            </div>
                          </div>
                        </div>
                        <p className="desc">{e.comment}</p>
                        <button type="button" className="review-reply"><i className="fa fa fa-undo" /></button>
                      </div>
                    ))
                  }
                </div>
                {/*== END Reviews Content Item ==*/}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="product-reviews-form-wrap">
                <h4 className="product-form-title">Leave a replay</h4>
                <div className="product-reviews-form">
                  <form action="#">
                    <div className="form-input-item">
                      <textarea className="form-control" placeholder="Enter you feedback" defaultValue={""} />
                    </div>
                    <div className="form-input-item">
                      <input className="form-control" type="text" placeholder="Full Name" />
                    </div>
                    <div className="form-input-item">
                      <input className="form-control" type="email" placeholder="Email Address" />
                    </div>
                    <div className="form-input-item">
                      <div className="form-ratings-item">
                        <select id="product-review-form-rating-select" className="select-ratings">
                          <option value={1}>01</option>
                          <option value={2}>02</option>
                          <option value={3}>03</option>
                          <option value={4}>04</option>
                          <option value={5}>05</option>
                        </select>
                        <span className="title">Provide Your Ratings</span>
                        <div className="product-ratingsform-form-wrap">
                          <div className="product-ratingsform-form-icon">
                            <i className="fa fa-star-o" />
                            <i className="fa fa-star-o" />
                            <i className="fa fa-star-o" />
                            <i className="fa fa-star-o" />
                            <i className="fa fa-star-o" />
                          </div>
                          <div id="product-review-form-rating" className="product-ratingsform-form-icon-fill">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </div>
                      </div>
                      <div className="reviews-form-checkbox">
                        <input className="form-check-input" type="checkbox" defaultValue id="ReviewsFormCheckbox" defaultChecked />
                        <label className="form-check-label" htmlFor="ReviewsFormCheckbox">Provide ratings anonymously.</label>
                      </div>
                    </div>
                    <div className="form-input-item mb-0">
                      <button type="submit" className="btn">SUBMIT</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*== End Product Details Area Wrapper ==*/}
      {/*== Start Product Banner Area Wrapper ==*/}
      <section>
        <div className="container">
          {/*== Start Product Category Item ==*/}
          <a href="product.html" className="product-banner-item">
            <img src="https://topprint.vn/wp-content/uploads/2021/07/mau-banner-kem-chong-nang.jpg" style={{ height: '350px' }} width={1170} height={240} alt="Image-HasTech" />
          </a>
          {/*== End Product Category Item ==*/}
        </div>
      </section>
      {/*== End Product Banner Area Wrapper ==*/}
      {/*== Start Product Area Wrapper ==*/}
      <section className="section-space">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2 className="title">Related Products</h2>
                <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
              </div>
            </div>
          </div>
          <div className="row mb-n10">
            <div className="col-12">
              <div className="swiper related-product-slide-container">
                <div className="swiper-wrapper">

                  {/*== Start Product Item ==*/}
                  {
                    products?.map((e, i) => (
                      <div key={i} style={{ width: '370px' }} className="swiper mb-10">
                        <div className="product-item product-st2-item">
                          <div className="product-thumb">
                            <a className="d-block" href={"/product-details/" + e._id}>
                              <img src={e.image} style={{ height: '400px' }} width={370} height={450} alt="Image-HasTech" />
                            </a>
                            <span className="flag-new">new</span>
                          </div>
                          <div className="product-info">
                            <div className="product-rating">

                              <div className="rating">
                                {Array.from({ length: e.totalRatings }, (_, index) => (
                                  <i key={index} className="fa fa-star-o" />
                                ))}
                              </div>

                              <div className="reviews">{e.brand}</div>
                            </div>
                            <h4 className="title"><a href={"/product-details/" + e._id}>{e.title}</a></h4>
                            <div className="product-rating">
                              <div className="reviews">Đã bán {e.sold}</div>
                            </div>
                            <div className="prices">
                              <span style={{ color: 'rgb(239,84,53)' }} className="price">₫{e.price}</span>
                              {/* <span className="price-old">300.00</span> */}
                            </div>
                            <div className="product-action">
                              <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                                <span>Add to cart</span>
                              </button>
                              <button type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                <i className="fa fa-expand" />
                              </button>
                              <button type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
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
            </div>
          </div>
        </div>
      </section >
      {/*== End Product Area Wrapper ==*/}
    </>
  )
}
export default Productdetails