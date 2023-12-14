import axios from "axios"
import { useContext, useEffect, useState } from "react"
import './product.css'
import { Link } from "react-router-dom"
import ReactPaginate from 'react-paginate';
import { UserContext } from "../../../UserContext"
import { toast } from "react-toastify"
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
  const [search, setSearch] = useState('')
  let getDataUser = JSON.parse(localStorage.getItem("User"))
  function handleFile(e) {
    const file = e.target.file
    // setFile(e.target.files)
    console.log(e.target.files[0])
    // let reader = new FileReader()
    // reader.onload = (e) => {
    //   setImage(e.target.result)
    // }
    // console.log(e.target.files)
    // reader.readAsDataURL(file[0])
    // console.log(e.target.result)
    // if(Object.keys(getFile).length>0){
    //   Object.keys(getFile).map((item,i)=>{
    //     let checkImg = ["png", "jpg", "jpeg", "PNG", "JPG"]
    //     let getsize = getFile[item].size
    //     let getname = getFile[item].name
    //     let test = getname.split(".")
    //     let test1 = checkImg.includes(test[1])
    //     if (getsize > 1024 * 1024) {
    //         alert("File qua lon")
    //     } else if (!checkImg.includes(test[1])) {
    //         alert("Sai dinh dang")
    //     }
    // })
    // }
    const formData = new FormData()
    formData.append("image", e.target.files[0])
    console.log(formData)
    axios.post("http://localhost:8000/products/find-image", formData)
      .then(response => {
        setProducts(response.data.product)
      }).catch(err => {
        console.log(err)
      })
  }
  const handleClicklarge = (id) => {
    setidlarge(id)
  }
  const handlePageClick = (event) => {
    setselected(+event.selected + 1)
  }
  const handleclickwishlist = (id) => {
    if (getDataUser != null) {
      let accessToken = getDataUser.token
        let config = {
          headers: {
            'token': 'bearer ' + accessToken,
          }
        }
        const data ={
          pid: id
        }
        
      axios.post("http://localhost:8000/users/wish-list",data,config)
      .then(res => {
        setidwishlist(id)
        toast.success("Thêm sản phẩm thành công")
      })
      .catch(function (error) {
        toast.error("Bạn đã thêm sản phẩm này")
        setidwishlist("")
      })
    } else {
      toast.error("Vui lòng đăng nhập")
    }
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
      window.scrollTo(0, 0)
      axios.get(`http://localhost:8000/products?page=${getselected}`)
        .then(res => {
          setProducts(res.data.mess)
          settotalpage(res.data.pageTotal)
        })
      axios.get('http://localhost:8000/category-products')
        .then(res => {
          setCategory(res.data.category)
          console.log(res.data.category)
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
  // const handleClickCategory = (e) => {
  //   console.log(e)
  //   var categoryTitle = e.currentTarget.querySelector('.title').textContent
  //   var categories = []
  //   setColor(e.currentTarget.querySelector('.title').textContent)
  //   switch (categoryTitle){
  //     case 'Hare Care':
  //       axios.get('http://localhost:8000/products')
  //         .then(res => {
  //           console.log(res)
  //           res.data.mess?.forEach((value) =>
  //             value?.category?.title === 'Hare Care'
  //               ? categories.push(value)
  //               : '')
  //           setProducts(categories)
  //           settotalpage(Math.ceil(categories.length/5))
  //         })
  //         .catch(err => {
  //           console.log('err', err)
  //         })
  //       break
  //     case 'Skin Care':
  //       axios.get('http://localhost:8000/products')
  //         .then(res => {
  //           res.data.mess?.forEach((value) =>
  //             value?.category?.title === 'Skin Care'
  //               ? categories.push(value)
  //               : '')
  //           setProducts(categories)
  //           settotalpage(Math.ceil(categories.length/5))
  //         })
  //         .catch(err => {
  //           console.log('err', err)
  //         })
  //       break
  //     case 'Lip Stick':
  //       axios.get('http://localhost:8000/products')
  //         .then(res => {
  //           res.data.mess?.forEach((value) =>
  //             value?.category?.title === 'Lip Stick'
  //               ? categories.push(value)
  //               : '')
  //           setProducts(categories)
  //           settotalpage(Math.ceil(categories.length/5))
  //         })
  //         .catch(err => {
  //           console.log('err', err)
  //         })
  //       break
  //     case 'Face Skin':
  //       axios.get('http://localhost:8000/products')
  //         .then(res => {
  //           res.data.mess?.forEach((value) =>
  //             value?.category?.title === 'Face Skin'
  //               ? categories.push(value)
  //               : '')
  //           setProducts(categories)
  //           settotalpage(Math.ceil(categories.length/5))
  //         })
  //         .catch(err => {
  //           console.log('err', err)
  //         })
  //       break
  //     case 'Blusher':
  //       axios.get('http://localhost:8000/products')
  //         .then(res => {
  //           res.data.mess?.forEach((value) =>
  //             value?.category?.title === 'Blusher'
  //               ? categories.push(value)
  //               : '')
  //           setProducts(categories)
  //           settotalpage(Math.ceil(categories.length/5))
  //         })
  //         .catch(err => {
  //           console.log('err', err)
  //         })
  //       break
  //     default:
  //       axios.get('http://localhost:8000/products')
  //         .then(res => {
  //           res.data.mess?.forEach((value) =>
  //             value?.category?.title === 'Natural'
  //               ? categories.push(value)
  //               : '')
  //           setProducts(categories)
  //           settotalpage(Math.ceil(categories.length/5))
  //         })
  //         .catch(err => {
  //           console.log('err', err)
  //         })
  //       break;
  //   }
  // }
  // const handleClear = () => {
  //   axios.get('http://localhost:8000/products')
  //     .then(res => {
  //       setProducts(res.data.mess)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }
  function handleSearch() {
    axios.post('http://localhost:8000/products/find ', { productName: search })
      .then(res => {
        if (res.data.product != null) {
          setProducts(res.data.product)
        } else {
          toast.error("Sản phẩm không tồn tại")
        }
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
            {/* <div className="select-price-range" onChange={e => hanldeChangePrice(e)} >
              <h4 className="title" style={{ marginRight: '16px' }}>Pricing</h4>
              <input style={{ width: '100px' }} min={0} max={800000} step={10000} type="range"
                class="form-range" id="customRange1" onChange={(e) => setValue(e.currentTarget.value)}>
              </input>
              <p style={{ marginLeft: '10px' }}>
                ₫{value} - ₫{Number(value) + 200000}
              </p>
            </div> */}
            <div className="product-middle-widget">
              <div className="product-search-widget">
                <input type="search" onChange={e => setSearch(e.target.value)} placeholder="Search Here" />
                <button className="submit-search" type="submit" onClick={handleSearch}><i className="fa fa-search" /></button>
              </div>
            </div>
            <div className="select-on-sale d-none d-md-flex">
              <input type="file" onChange={handleFile} />
              {/* <button onClick={handleClear} className="btnClear">Clear Filter <i class="fa fa-filter"></i></button> */}
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
                  <Link to={"/product/filter/" + e.title} state={{ data: e.title }}>
                    <a id={"" + e.title} className="product-category-item">
                      <img className="icon" src={`/assets/images/shop/category/${i + 1}.webp`} width={70} height={80} alt="Image-HasTech" />
                      <h3 className="title">{e.title}</h3>
                      {/* <span className="flag-new"></span> */}
                    </a>
                  </Link>
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
                      <Link to={"/product-details/" + e._id}>
                        <a className="d-block">
                          <img src={e.image} style={{ height: '400px' }} width={370} height={450} alt="Image-HasTech" />
                        </a>
                      </Link>
                      <span className="flag-new">{e?.category?.title}</span>
                      <div className="product-action">
                        <button id={e._id} onClick={() => handleClicklarge(e._id)} type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                          <i className="fa fa-expand" />
                        </button>
                        <button id={e._id} onClick={() => handleClick(e._id)} type="button" className="product-action-btn action-btn-cart" data-bs-toggle={getDataUser ? "modal" : ""} data-bs-target="#action-CartAddModal">
                          <span>Add to cart</span>
                        </button>
                        <button id={e._id} onClick={() => handleclickwishlist(e._id)} type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle={getDataUser && getidwishlist ? "modal" : ""} data-bs-target="#action-WishlistModal">
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
                  previousClassName="page-link"
                  nextClassName="page-link"
                  nextLabel='>>'
                  previousLabel='<<'
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