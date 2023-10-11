function Productdetails(){
    return(
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
                  <img src="assets/images/shop/product-details/2.webp" width={570} height={693} alt="Image" />
                  <span className="flag-new">new</span>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="product-details-content">
                  <h5 className="product-details-collection">Premioum collection</h5>
                  <h3 className="product-details-title">Offbline Instant Age Rewind Eraser.</h3>
                  <div className="product-details-review mb-7">
                    <div className="product-review-icon">
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-half-o" />
                    </div>
                    <button type="button" className="product-review-show">150 reviews</button>
                  </div>
                  <p className="mb-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, repellendus. Nam voluptate illo ut quia non sapiente provident alias quos laborum incidunt, earum accusamus, natus. Vero pariatur ut veniam sequi amet consectetur.</p>
                  <div className="product-details-pro-qty">
                    <div className="pro-qty">
                      <input type="text" title="Quantity" defaultValue={1} />
                    </div>
                  </div>
                  <div className="product-details-shipping-cost">
                    <input className="form-check-input" type="checkbox" defaultValue id="ShippingCost" defaultChecked />
                    <label className="form-check-label" htmlFor="ShippingCost">Shipping from USA, Shipping Fees $4.22</label>
                  </div>
                  <div className="product-details-action">
                    <h4 className="price">$254.22</h4>
                    <div className="product-details-cart-wishlist">
                      <button type="button" className="btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal"><i className="fa fa-heart-o" /></button>
                      <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">Add to cart</button>
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
                    <ul className="product-details-info-wrap">
                      <li><span>Weight</span>
                        <p>250 g</p>
                      </li>
                      <li><span>Dimensions</span>
                        <p>10 x 10 x 15 cm</p>
                      </li>
                      <li><span>Materials</span>
                        <p>60% cotton, 40% polyester</p>
                      </li>
                      <li><span>Other Info</span>
                        <p>American heirloom jean shorts pug seitan letterpress</p>
                      </li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius velit corporis quo voluptate culpa soluta, esse accusamus, sunt quia omnis amet temporibus sapiente harum quam itaque libero tempore. Ipsum, ducimus. lorem</p>
                  </div>
                  <div className="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
                    {/*== Start Reviews Content Item ==*/}
                    <div className="product-review-item">
                      <div className="product-review-top">
                        <div className="product-review-thumb">
                          <img src="assets/images/shop/product-details/comment1.webp" alt="Images" />
                        </div>
                        <div className="product-review-content">
                          <span className="product-review-name">Tomas Doe</span>
                          <span className="product-review-designation">Delveloper</span>
                          <div className="product-review-icon">
                            <i className="fa fa-star-o" />
                            <i className="fa fa-star-o" />
                            <i className="fa fa-star-o" />
                            <i className="fa fa-star-o" />
                            <i className="fa fa-star-half-o" />
                          </div>
                        </div>
                      </div>
                      <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra amet, sodales faucibus nibh. Vivamus amet potenti ultricies nunc gravida duis. Nascetur scelerisque massa sodales.</p>
                      <button type="button" className="review-reply"><i className="fa fa fa-undo" /></button>
                    </div>
                    {/*== End Reviews Content Item ==*/}
                    {/*== Start Reviews Content Item ==*/}
                    <div className="product-review-item product-review-reply">
                      <div className="product-review-top">
                        <div className="product-review-thumb">
                          <img src="assets/images/shop/product-details/comment2.webp" alt="Images" />
                        </div>
                        <div className="product-review-content">
                          <span className="product-review-name">Tomas Doe</span>
                          <span className="product-review-designation">Delveloper</span>
                          <div className="product-review-icon">
                            <i className="fa fa-star-o" />
                            <i className="fa fa-star-o" />
                            <i className="fa fa-star-o" />
                            <i className="fa fa-star-o" />
                            <i className="fa fa-star-half-o" />
                          </div>
                        </div>
                      </div>
                      <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra amet, sodales faucibus nibh. Vivamus amet potenti ultricies nunc gravida duis. Nascetur scelerisque massa sodales.</p>
                      <button type="button" className="review-reply"><i className="fa fa fa-undo" /></button>
                    </div>
                    {/*== End Reviews Content Item ==*/}
                    {/*== Start Reviews Content Item ==*/}
                    <div className="product-review-item mb-0">
                      <div className="product-review-top">
                        <div className="product-review-thumb">
                          <img src="assets/images/shop/product-details/comment3.webp" alt="Images" />
                        </div>
                        <div className="product-review-content">
                          <span className="product-review-name">Tomas Doe</span>
                          <span className="product-review-designation">Delveloper</span>
                          <div className="product-review-icon">
                            <i className="fa fa-star-o" />
                            <i className="fa fa-star-o" />
                            <i className="fa fa-star-o" />
                            <i className="fa fa-star-o" />
                            <i className="fa fa-star-half-o" />
                          </div>
                        </div>
                      </div>
                      <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra amet, sodales faucibus nibh. Vivamus amet potenti ultricies nunc gravida duis. Nascetur scelerisque massa sodales.</p>
                      <button type="button" className="review-reply"><i className="fa fa fa-undo" /></button>
                    </div>
                    {/*== End Reviews Content Item ==*/}
                  </div>
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
        <div className="container">
          {/*== Start Product Category Item ==*/}
          <a href="product.html" className="product-banner-item">
            <img src="assets/images/shop/banner/7.webp" width={1170} height={240} alt="Image-HasTech" />
          </a>
          {/*== End Product Category Item ==*/}
        </div>
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
                    <div className="swiper-slide mb-10">
                      {/*== Start Product Item ==*/}
                      <div className="product-item product-st2-item">
                        <div className="product-thumb">
                          <a className="d-block" href="product-details.html">
                            <img src="assets/images/shop/8.webp" width={370} height={450} alt="Image-HasTech" />
                          </a>
                          <span className="flag-new">new</span>
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
                      {/*== End prPduct Item ==*/}
                    </div>
                    <div className="swiper-slide mb-10">
                      {/*== Start Product Item ==*/}
                      <div className="product-item product-st2-item">
                        <div className="product-thumb">
                          <a className="d-block" href="product-details.html">
                            <img src="assets/images/shop/7.webp" width={370} height={450} alt="Image-HasTech" />
                          </a>
                          <span className="flag-new">new</span>
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
                      {/*== End prPduct Item ==*/}
                    </div>
                    <div className="swiper-slide mb-10">
                      {/*== Start Product Item ==*/}
                      <div className="product-item product-st2-item">
                        <div className="product-thumb">
                          <a className="d-block" href="product-details.html">
                            <img src="assets/images/shop/5.webp" width={370} height={450} alt="Image-HasTech" />
                          </a>
                          <span className="flag-new">new</span>
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
                      {/*== End prPduct Item ==*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*== End Product Area Wrapper ==*/}
        </>
    )
}
export default Productdetails