import axios from "axios"
import { useContext, useEffect, useState } from "react"
import './product.css'
import { Link } from "react-router-dom"
import ReactPaginate from 'react-paginate';
import { UserContext } from "../../../UserContext"
function Product() {
  const [getselected, setselected] = useState(1)
  const [gettotalpage, settotalpage] = useState(1)
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState([])
  const [value, setValue] = useState(0)
  const { getCart, setCart } = useContext(UserContext)
  const { getid, setid } = useContext(UserContext)
  const { getidwishlist, setidwishlist } = useContext(UserContext)
  const { getidlarge, setidlarge } = useContext(UserContext)
  const handleClicklarge = (id) => {
    setidlarge(id)
  }
  const handlePageClick = (event) => {
    setselected(+event.selected + 1)
  }
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
  const handleClick = (id) => {
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
  }
  useEffect(() => {
    try {
      axios.get(`http://localhost:8000/products?page=${getselected}`)
        .then(res => {
          setProducts(res.data.mess)
          settotalpage(res.data.pageTotal)
          console.log(res.data)
        })
      axios.get('http://localhost:8000/category-products')
        .then(res => {
          setCategory(res.data.category)
        })
    } catch (error) {
      console.log('err', error)
    }
  }, [getselected])

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
            console.log(res.data.mess)
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

  const handleClickCategory = (e) => {
    e.preventDefault()
    var categoryTitle = e.currentTarget.querySelector('.title').textContent
    var categories = []
    switch (categoryTitle) {
      case 'Mặt Nạ':
        axios.get('http://localhost:8000/products')
          .then(res => {
            console.log(res)
            res.data.mess?.forEach((value) =>            
              value?.category?.title === 'Mặt Nạ'
                ? categories.push(value)
                : '')
            setProducts(categories)
          })
          .catch(err => {
            console.log('err', err)
          })
        break
      case 'Sửa Rửa Mặt':
        axios.get('http://localhost:8000/products')
          .then(res => {
            res.data.mess?.forEach((value) =>
              value?.category?.title === 'Sửa Rửa Mặt'
                ? categories.push(value)
                : '')
            setProducts(categories)
          })
          .catch(err => {
            console.log('err', err)
          })
        break
      case 'Kem Dưỡng':
        axios.get('http://localhost:8000/products')
          .then(res => {
            res.data.mess?.forEach((value) =>
              value?.category?.title === 'Kem Dưỡng'
                ? categories.push(value)
                : '')
            setProducts(categories)
          })
          .catch(err => {
            console.log('err', err)
          })
        break
      case 'Dụng cụ làm đẹp':
        axios.get('http://localhost:8000/products')
          .then(res => {
            res.data.mess?.forEach((value) =>
              value?.category?.title === 'Dụng cụ làm đẹp'
                ? categories.push(value)
                : '')
            setProducts(categories)
          })
          .catch(err => {
            console.log('err', err)
          })
        break
      case 'Blusher':
        axios.get('http://localhost:8000/products')
          .then(res => {
            res.data.mess?.forEach((value) =>
              value?.category?.title === 'Blusher'
                ? categories.push(value)
                : '')
            setProducts(categories)
          })
          .catch(err => {
            console.log('err', err)
          })
        break
      default:
        axios.get('http://localhost:8000/products')
          .then(res => {
            res.data.mess?.forEach((value) =>
              value?.category?.title === 'Natural'
                ? categories.push(value)
                : '')
            setProducts(categories)
          })
          .catch(err => {
            console.log('err', err)
          })
        break;
    }

  }
  const handleClear = () => {
    axios.get('http://localhost:8000/products')
      .then(res => {
        setProducts(res.data.mess)
      })
      .catch(err => {
        console.log(err)
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
              <h5 className="showing-pagination-results mt-5 mt-md-9 text-center text-md-end">Showing {products.length} Results</h5>
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
              <button onClick={handleClear} className="btnClear">Clear Filter <i class="fa fa-filter"></i></button>
              {/* <select style={{ border: 'none' }}>
                <option selected>Yes</option>
                <option value={1}>No</option>
              </select> */}
            </div>
          </div>
        </div>
      </div >
      {/*== End Shop Top Bar Area Wrapper ==*/}

      {/*== Start Product Category Area Wrapper ==*/}
      <section className="section-space pb-0">
        <div className="container">
          <div className="row g-3 g-sm-6">
            {/*== Start Product Category Item ==*/}
            {
              category?.map((e, i) => (
                <div className="col-6 col-lg-4 col-lg-2 col-xl-2">
                  <a onClick={e => handleClickCategory(e)} className="product-category-item">
                    <img className="icon" src={`assets/images/shop/category/${i + 1}.webp`} width={70} height={80} alt="Image-HasTech" />
                    <h3 className="title">{e.title}</h3>
                    {/* <span className="flag-new"></span> */}
                  </a>
                </div>
              ))
            }
            {/*== End Product Category Item ==*/}
          </div>
        </div>
      </section >
      {/*== End Product Category Area Wrapper ==*/}
      {/*== Start Product Area Wrapper ==*/}
      <section className="section-space">
        <div className="container">
          <div className="row mb-n4 mb-sm-n10 g-3 g-sm-6">
            {/* START MAP PRODUCT */}
            {
              products?.map((e, i) => (
                <div key={i} className="col-6 col-lg-4 mb-4 mb-sm-8">
                  {/*== Start Product Item ==*/}
                  <div style={{ objectFit: 'cover' }} className="product-item">
                    <div className="product-thumb">
                      <a className="d-block" href={"product-details/" + e._id}>
                        <img src={e.image} style={{ height: '400px' }} width={370} height={450} alt="Image-HasTech" />
                      </a>
                      <span className="flag-new">{e?.category?.title}</span>
                      <div className="product-action">
                        <button id={e._id} onClick={() => handleClicklarge(e._id)}  type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                          <i className="fa fa-expand" />
                        </button>
                        <button id={e._id} onClick={() => handleClick(e._id)} type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                          <span>Add to cart</span>
                        </button>
                        <button id={e._id} onClick={() => handleclickwishlist(e._id)} type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                          <i className="fa fa-heart-o" />
                        </button>
                      </div>
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
                      <h4 className="title">
                        <Link to={`/product-details/${e._id}`}>{e.title}</Link>
                        {/* <a href={"product-details/" + e._id} >
                          {e.title}
                        </a> */}
                      </h4>
                      <div className="product-rating">
                        <div className="reviews">Đã bán {e.sold}</div>
                      </div>
                      <div className="prices">
                        <span style={{ color: 'rgb(239,84,53)' }} className="price">₫{Intl.NumberFormat().format(e.price)}</span>
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
              <ReactPaginate
                    breakLabel="..."
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={gettotalpage}
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