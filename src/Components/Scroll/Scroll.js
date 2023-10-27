import axios from "axios"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
function Scroll(){
  const [getItem, setItem] = useState("")
  useEffect(() => {
    axios.get("http://localhost:8000/products")
        .then(response => {
            setItem(response.data.mess)
        })
        .catch(function (error) {
            console.log(error)
        })
      }, [])
      function fetchData(){
        if(getItem.length>0){
          return getItem.map((value,key)=>{
            return(
              <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
              <div className="modal-body">
                <div className="product-action-view-content">
                  <button type="button" className="btn-close" data-bs-dismiss="modal">
                    <i className="fa fa-times" />
                  </button>
                  <div className="modal-action-messages">
                    <i className="fa fa-check-square-o" /> Added to cart successfully!
                  </div>
                  <div className="modal-action-product">
                    <div className="thumb">
                      <img src={""+value.image} style={{width:"466px", height: "322px"}} alt="Organic Food Juice" width={466} height={320} />
                    </div>
                    <h4 className="product-name"><a href="product-details.html">{value.title}</a></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )
          })
        }
      }
    return(
        <>
        {/*== Scroll Top Button ==*/}
        <div id="scroll-to-top" className="scroll-to-top"><span className="fa fa-angle-up" /></div>
        {/*== Start Product Quick Wishlist Modal ==*/}
        <aside className="product-action-modal modal fade" id="action-WishlistModal" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="product-action-view-content">
                  <button type="button" className="btn-close" data-bs-dismiss="modal">
                    <i className="fa fa-times" />
                  </button>
                  <div className="modal-action-messages">
                    <i className="fa fa-check-square-o" /> Added to wishlist successfully!
                  </div>
                  <div className="modal-action-product">
                    <div className="thumb">
                      <img src="assets/images/shop/modal1.webp" alt="Organic Food Juice" width={466} height={320} />
                    </div>
                    <h4 className="product-name"><a href="product-details.html">Readable content DX22</a></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        {/*== End Product Quick Wishlist Modal ==*/}
        {/*== Start Product Quick Add Cart Modal ==*/}
        <aside className="product-action-modal modal fade" id="action-CartAddModal" tabIndex={-1} aria-hidden="true">
          {fetchData()}
        </aside>
        {/*== End Product Quick Add Cart Modal ==*/}
        {/*== Start Aside Search Form ==*/}
        <aside className="aside-search-box-wrapper offcanvas offcanvas-top" tabIndex={-1} id="AsideOffcanvasSearch" aria-labelledby="offcanvasTopLabel">
          <div className="offcanvas-header">
            <h5 className="d-none" id="offcanvasTopLabel">Aside Search</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa fa-close" /></button>
          </div>
          <div className="offcanvas-body">
            <div className="container pt--0 pb--0">
              <div className="search-box-form-wrap">
                <div className="search-note">
                  <p>Start typing and press Enter to search</p>
                </div>
                <form action="#" method="post">
                  <div className="aside-search-form position-relative">
                    <label htmlFor="SearchInput" className="visually-hidden">Search</label>
                    <input id="SearchInput" type="search" className="form-control" placeholder="Search entire store…" />
                    <button className="search-button" type="submit"><i className="fa fa-search" /></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </aside>
        {/*== End Aside Search Form ==*/}
        {/*== Start Product Quick View Modal ==*/}
        <aside className="product-cart-view-modal modal fade" id="action-QuickViewModal" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="product-quick-view-content">
                  <button type="button" className="btn-close" data-bs-dismiss="modal">
                    <span className="fa fa-close" />
                  </button>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6">
                        {/*== Start Product Thumbnail Area ==*/}
                        <div className="product-single-thumb">
                          <img src="assets/images/shop/quick-view1.webp" width={544} height={560} alt="Image-HasTech" />
                        </div>
                        {/*== End Product Thumbnail Area ==*/}
                      </div>
                      <div className="col-lg-6">
                        {/*== Start Product Info Area ==*/}
                        <div className="product-details-content">
                          <h5 className="product-details-collection">Premioum collection</h5>
                          <h3 className="product-details-title">Offbline Instant Age Rewind Eraser.</h3>
                          <div className="product-details-review mb-5">
                            <div className="product-review-icon">
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-half-o" />
                            </div>
                            <button type="button" className="product-review-show">150 reviews</button>
                          </div>
                          <p className="mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, repellendus. Nam voluptate illo ut quia non sapiente provident alias quos laborum incidunt, earum accusamus, natus. Vero pariatur ut veniam sequi amet consectetur.</p>
                          <div className="product-details-pro-qty">
                            <div className="pro-qty">
                              <input type="text" title="Quantity" defaultValue={1} />
                            </div>
                          </div>
                          <div className="product-details-action">
                            <h4 className="price">$254.22</h4>
                            <div className="product-details-cart-wishlist">
                              <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">Add to cart</button>
                            </div>
                          </div>
                        </div>
                        {/*== End Product Info Area ==*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        {/*== End Product Quick View Modal ==*/}
        {/*== Start Aside Cart ==*/}
        <aside className="aside-cart-wrapper offcanvas offcanvas-end" tabIndex={-1} id="AsideOffcanvasCart" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            <h1 className="d-none" id="offcanvasRightLabel">Shopping Cart</h1>
            <button className="btn-aside-cart-close" data-bs-dismiss="offcanvas" aria-label="Close">Shopping Cart <i className="fa fa-chevron-right" /></button>
          </div>
          <div className="offcanvas-body">
            <a className="btn-total" href="product-cart.html">View cart</a>
            <a className="btn-total" href="product-checkout.html">Checkout</a>
          </div>
        </aside>
        == End Aside Cart ==
        {/*== Start Aside Menu ==*/}
        {/* <aside className="off-canvas-wrapper offcanvas offcanvas-start" tabIndex={-1} id="AsideOffcanvasMenu" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">
            <h1 className="d-none" id="offcanvasExampleLabel">Aside Menu</h1>
            <button className="btn-menu-close" data-bs-dismiss="offcanvas" aria-label="Close">menu <i className="fa fa-chevron-left" /></button>
          </div>
          <div className="offcanvas-body">
            <div id="offcanvasNav" className="offcanvas-menu-nav">
              <ul>
                <li className="offcanvas-nav-parent"><a className="offcanvas-nav-item" href="#">home</a>
                  <ul>
                    <li><a href="index.html">Home One</a></li>
                    <li><a href="index-two.html">Home Two</a></li>
                  </ul>
                </li>
                <li className="offcanvas-nav-parent"><a className="offcanvas-nav-item" href="about-us.html">about</a></li>
                <li className="offcanvas-nav-parent"><a className="offcanvas-nav-item" href="#">shop</a>
                  <ul>
                    <li><a href="#" className="offcanvas-nav-item">Shop Layout</a>
                      <ul>
                        <li><a href="product.html">Shop 3 Column</a></li>
                        <li><a href="product-four-columns.html">Shop 4 Column</a></li>
                        <li><a href="product-left-sidebar.html">Shop Left Sidebar</a></li>
                        <li><a href="product-right-sidebar.html">Shop Right Sidebar</a></li>
                      </ul>
                    </li>
                    <li><a href="#" className="offcanvas-nav-item">Single Product</a>
                      <ul>
                        <li><a href="product-details-normal.html">Single Product Normal</a></li>
                        <li><a href="product-details.html">Single Product Variable</a></li>
                        <li><a href="product-details-group.html">Single Product Group</a></li>
                        <li><a href="product-details-affiliate.html">Single Product Affiliate</a></li>
                      </ul>
                    </li>
                    <li><a href="#" className="offcanvas-nav-item">Others Pages</a>
                      <ul>
                        <li><a href="product-cart.html">Shopping Cart</a></li>
                        <li><a href="product-checkout.html">Checkout</a></li>
                        <li><a href="product-wishlist.html">Wishlist</a></li>
                        <li><a href="product-compare.html">Compare</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="offcanvas-nav-parent"><a className="offcanvas-nav-item" href="#">Blog</a>
                  <ul>
                    <li><a className="offcanvas-nav-item" href="#">Blog Layout</a>
                      <ul>
                        <li><a href="blog.html">Blog Grid</a></li>
                        <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                        <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                      </ul>
                    </li>
                    <li><a href="blog-details.html">Blog Details</a></li>
                  </ul>
                </li>
                <li className="offcanvas-nav-parent"><a className="offcanvas-nav-item" href="#">Pages</a>
                  <ul>
                    <li><a href="account-login.html">My Account</a></li>
                    <li><a href="faq.html">Frequently Questions</a></li>
                    <li><a href="page-not-found.html">Page Not Found</a></li>
                  </ul>
                </li>
                <li className="offcanvas-nav-parent"><a className="offcanvas-nav-item" href="contact.html">Contact</a></li>
              </ul>
            </div>
          </div>
        </aside> */}
        {/*== End Aside Menu ==*/}</>
    )
}
export default Scroll