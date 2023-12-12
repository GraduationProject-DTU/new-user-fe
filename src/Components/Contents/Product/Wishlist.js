function Wishlist(){
    return(
        <>
      {/*== Start Wishlist Area Wrapper ==*/}
      <section className="section-space">
        <div className="container">
          <div className="shopping-wishlist-form table-responsive">
            <form action="#" method="post">
              <table className="table text-center">
                <thead>
                  <tr>
                    <th className="product-remove">&nbsp;</th>
                    <th className="product-thumbnail">&nbsp;</th>
                    <th className="product-name">Product name</th>
                    <th className="product-price">Unit price</th>
                    <th className="product-stock-status">Stock status</th>
                    <th className="product-add-to-cart">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tbody-item">
                    <td className="product-remove">
                      <a className="remove" href="javascript:void(0)">×</a>
                    </td>
                    <td className="product-thumbnail">
                      <div className="thumb">
                        <a href="single-product.html">
                          <img src="assets/images/shop/cart1.webp" width={68} height={84} alt="Image-HasTech" />
                        </a>
                      </div>
                    </td>
                    <td className="product-name">
                      <a className="title" href="single-product.html">Condimentum posuere consectetur urna</a>
                    </td>
                    <td className="product-price">
                      <span className="price">$115.00</span>
                    </td>
                    <td className="product-stock-status">
                      <span className="wishlist-in-stock">In Stock</span>
                    </td>
                    <td className="product-add-to-cart">
                      <a className="btn-shop-cart" href="product-cart.html">Add to Cart</a>
                    </td>
                  </tr>
                  <tr className="tbody-item">
                    <td className="product-remove">
                      <a className="remove" href="javascript:void(0)">×</a>
                    </td>
                    <td className="product-thumbnail">
                      <div className="thumb">
                        <a href="single-product.html">
                          <img src="assets/images/shop/cart2.webp" width={68} height={84} alt="Image-HasTech" />
                        </a>
                      </div>
                    </td>
                    <td className="product-name">
                      <a className="title" href="single-product.html">Kaoreet lobortis sagittis laoreet</a>
                    </td>
                    <td className="product-price">
                      <span className="price">$95.00</span>
                    </td>
                    <td className="product-stock-status">
                      <span className="wishlist-in-stock">In Stock</span>
                    </td>
                    <td className="product-add-to-cart">
                      <a className="btn-shop-cart" href="product-cart.html">Add to Cart</a>
                    </td>
                  </tr>
                  <tr className="tbody-item">
                    <td className="product-remove">
                      <a className="remove" href="javascript:void(0)">×</a>
                    </td>
                    <td className="product-thumbnail">
                      <div className="thumb">
                        <a href="single-product.html">
                          <img src="assets/images/shop/cart3.webp" width={68} height={84} alt="Image-HasTech" />
                        </a>
                      </div>
                    </td>
                    <td className="product-name">
                      <a className="title" href="single-product.html">Nostrum exercitationem itae ipsum</a>
                    </td>
                    <td className="product-price">
                      <span className="price">$79.00</span>
                    </td>
                    <td className="product-stock-status">
                      <span className="wishlist-in-stock">In Stock</span>
                    </td>
                    <td className="product-add-to-cart">
                      <a className="btn-shop-cart" href="product-cart.html">Add to Cart</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </section>
      {/*== End Wishlist Area Wrapper ==*/}
        </>
    )
}
export default Wishlist