import axios from "axios"
import { useEffect, useState } from "react"
import './product.css'

function Product() {
  const [products, setProducts] = useState([])
  const [value, setValue] = useState(0)



  useEffect(() => {
    try {
      axios.get('http://localhost:8000/products')
        .then(res => {
          setProducts(res.data.mess)
        })
    } catch (error) {
      console.log('err', error)
    }
  }, [])

  const hanldeChangeOption = (e) => {
    const value = e.target.value

    switch (value) {
      case '2':
        axios.get('http://localhost:8000/products')
          .then(res => {
            setProducts(res.data.mess);
          })
          .catch(err => {
            console.log('err', err);
          })
        break;
      case '3':
        axios.get('http://localhost:8000/products?sort=title&type=asc&page=1')
          .then(res => {
            setProducts(res.data.mess);
          })
          .catch(err => {
            console.log('err', err);
          })
        break;
      case '4':
        axios.get('http://localhost:8000/products?sort=title&type=desc&page=1')
          .then(res => {
            setProducts(res.data.mess);
          })
          .catch(err => {
            console.log('err', err);
          })
        break
      case '5':
        axios.get('http://localhost:8000/products?sort=price&type=asc&page=1')
          .then(res => {
            setProducts(res.data.mess);
          })
          .catch(err => {
            console.log('err', err);
          })
        break
      case '6':
        axios.get('http://localhost:8000/products?sort=price&type=desc&page=1')
          .then(res => {
            setProducts(res.data.mess);
          })
          .catch(err => {
            console.log('err', err);
          })
        break
      default:
        break;
    }
  }

  const hanldeChangePrice = (e) => {
    const value = e.target.value
    const valueNext = Number(e.target.value) + 200000
    axios(`http://localhost:8000/products?price[gte]=${value}&price[lte]=${valueNext}&page=1`)
      .then(res => {
        setProducts(res.data.mess)
      })
      .catch(err => {
        console.log('err', err)
      })
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
                  <li className="breadcrumb-item"><a className="text-dark" href="/">Home</a></li>
                  <li className="breadcrumb-item active text-dark" aria-current="page">Products</li>
                </ol>
                <h2 className="page-header-title">All Products</h2>
              </div>
            </div>
            <div className="col-md-7">
              <h5 className="showing-pagination-results mt-5 mt-md-9 text-center text-md-end">Showing 09 Results</h5>
            </div>
          </div>
        </div>
      </section>
      {/*== End Page Header Area Wrapper ==*/}
      {/*== Start Shop Top Bar Area Wrapper ==*/}
      <div className="shop-top-bar-area">
        <div className="container">
          <div className="shop-top-bar">
            <select style={{ border: 'none' }} onChange={e => hanldeChangeOption(e)}>
              <option value={2} data-display="Trending">Trending</option>
              <option value={3}>Alphabetically, A-Z</option>
              <option value={4}>Alphabetically, Z-A</option>
              <option value={5}>Price, low to high</option>
              <option value={6}>Price, high to low</option>
            </select>

            <div className="select-price-range" onChange={e => hanldeChangePrice(e)} >
              <h4 className="title" style={{ marginRight: '16px' }}>Pricing</h4>
              <input style={{ width: '100px' }} min={0} max={800000} step={10000} type="range"
                class="form-range" id="customRange1" onChange={(e) => setValue(e.currentTarget.value)}>
              </input>
              <p style={{ marginLeft: '10px' }}>
                ₫{value} - ₫{Number(value) + 200000}
              </p>

            </div>

            <div className="select-on-sale d-none d-md-flex">
              <span>On Sale :</span>
              <select style={{ border: 'none' }}>
                <option selected>Yes</option>
                <option value={1}>No</option>
              </select>
            </div>
          </div>
        </div>
      </div >
      {/*== End Shop Top Bar Area Wrapper ==*/}
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
          <div className="row mb-n4 mb-sm-n10 g-3 g-sm-6">
            {/* START MAP PRODUCT */}
            {
              products.map((e, i) => (
                <div key={i} className="col-6 col-lg-4 mb-4 mb-sm-8">
                  {console.log(e)}
                  {/*== Start Product Item ==*/}
                  <div style={{ objectFit: 'cover' }} className="product-item">
                    <div className="product-thumb">
                      <a className="d-block" href={"product-details/" + e._id}>
                        <img src={e.image} style={{ height: '400px' }} width={370} height={450} alt="Image-HasTech" />
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
                      <h4 className="title">
                        <a href={"product-details/" + e._id} >
                          {e.title}
                        </a>
                      </h4>
                      <div className="prices">
                        <span className="price">₫{e.price}</span>
                        {/* <span className="price-old">300.00</span> */}
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
              ))
            }
            <div className="col-12">
              <ul className="pagination justify-content-center me-auto ms-auto mt-5 mb-0 mb-sm-10">
                <li className="page-item">
                  <a className="page-link previous" href="product.html" aria-label="Previous">
                    <span className="fa fa-chevron-left" aria-hidden="true" />
                  </a>
                </li>
                <li className="page-item"><a className="page-link" href="product.html">01</a></li>
                <li className="page-item"><a className="page-link" href="product.html">02</a></li>
                <li className="page-item"><a className="page-link" href="product.html">03</a></li>
                <li className="page-item"><a className="page-link" href="product.html">....</a></li>
                <li className="page-item">
                  <a className="page-link next" href="product.html" aria-label="Next">
                    <span className="fa fa-chevron-right" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section >
      {/*== End Product Area Wrapper ==*/}
      {/*== Start Product Banner Area Wrapper ==*/}
      <section>
        <div className="container">
          {/*== Start Product Category Item ==*/}
          <a href="product.html" className="product-banner-item">
            <img src="assets/images/shop/banner/7.webp" style={{ height: '350px' }} width={1170} height={240} alt="Image-HasTech" />
          </a>
          {/*== End Product Category Item ==*/}
        </div>
      </section>
      {/*== End Product Banner Area Wrapper ==*/}
    </>
  )
}
export default Product