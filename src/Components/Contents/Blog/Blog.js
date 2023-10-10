function Blog(){
    return(
        <>
        {/*== Start Page Header Area Wrapper ==*/}
        <nav aria-label="breadcrumb" className="breadcrumb-style1 mb-10">
          <div className="container">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Blog</li>
            </ol>
          </div>
        </nav>
        <section className="page-header-area page-header-style2-area" data-bg-img="assets/images/photos/page-header1.webp">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7">
                <div className="page-header-content page-header-st2-content">
                  <div className="title-img"><img src="assets/images/photos/page-header-text1.webp" alt="Image" /></div>
                  <h2 className="page-header-title">Whats the beauty secrets?</h2>
                  <p className="page-header-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*== End Page Header Area Wrapper ==*/}
        {/*== Start Blog Area Wrapper ==*/}
        <section className="section-space pb-0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title text-center">
                  <h2 className="title">New Posts</h2>
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
                    <img src="assets/images/blog/4.webp" width={370} height={320} alt="Image-HasTech" />
                  </a>
                  <div className="content">
                    <a className="post-category post-category-two" data-bg-color="#A49CFF" href="blog.html">beauty</a>
                    <h4 className="title"><a href="blog-details.html">Benefit of Hot Ston Spa for your health &amp; life.</a></h4>
                    <ul className="meta">
                      <li className="author-info"><span>By:</span> <a href="blog.html">Tomas De Momen</a></li>
                      <li className="post-date">February 13, 2022</li>
                    </ul>
                  </div>
                </div>
                {/*== End Blog Item ==*/}
              </div>
              <div className="col-sm-12 col-lg-4 mb-8">
                <div className="row mb-n10">
                  <div className="col-md-6  col-lg-12 mb-10">
                    {/*== Start Blog Item ==*/}
                    <div className="post-item">
                      <div className="content">
                        <h4 className="title mt-0"><a href="blog-details.html">Lorem ipsum dolor sit amet, consectetur adipiscing</a></h4>
                        <p className="desc">Lorem ipsum dolor sit amet, conseur adipiscing elit ut aliqua, purus sit amet luctus venenatis.</p>
                        <a className="btn-link" href="blog.html">Learn more</a>
                      </div>
                    </div>
                    {/*== End Blog Item ==*/}
                  </div>
                  <div className="col-md-6  col-lg-12 mb-10 pt-0 pt-lg-4">
                    {/*== Start Blog Item ==*/}
                    <div className="post-item">
                      <div className="content">
                        <h4 className="title mt-0"><a href="blog-details.html">Facial Scrub is natural treatment for face.</a></h4>
                        <p className="desc">Lorem ipsum dolor sit amet, conseur adipiscing elit ut aliqua, purus.</p>
                        <a className="btn-link" href="blog.html">Learn more</a>
                      </div>
                    </div>
                    {/*== End Blog Item ==*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*== End Blog Area Wrapper ==*/}
        {/*== Start Blog Area Wrapper ==*/}
        <section className="section-space">
          <div className="container">
            <div className="row mb-n9">
              <div className="col-sm-6 mb-8">
                {/*== Start Blog Item ==*/}
                <div className="post-item">
                  <a href="blog-details.html" className="thumb">
                    <img src="assets/images/blog/col6-1.webp" width={570} height={340} alt="Image-HasTech" />
                  </a>
                  <div className="content">
                    <h4 className="title"><a href="blog-details.html">Facial Scrub is natural treatment for face.</a></h4>
                    <p className="desc">Lorem ipsum dolor sit amet, conseur adipiscing elit ut aliqua, purus sit amet luctus venenatis.</p>
                    <ul className="meta">
                      <li className="author-info"><span>By:</span> <a href="blog.html">Tomas De Momen</a></li>
                      <li className="post-date">February 13, 2022</li>
                    </ul>
                  </div>
                </div>
                {/*== End Blog Item ==*/}
              </div>
              <div className="col-sm-6 mb-8">
                {/*== Start Blog Item ==*/}
                <div className="post-item">
                  <a href="blog-details.html" className="thumb">
                    <img src="assets/images/blog/col6-2.webp" width={570} height={340} alt="Image-HasTech" />
                  </a>
                  <div className="content">
                    <h4 className="title"><a href="blog-details.html">Benefit of Hot Ston Spa for your health</a></h4>
                    <p className="desc">Lorem ipsum dolor sit amet, conseur adipiscing elit ut aliqua, purus sit amet luctus venenatis.</p>
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
        {/*== Start Blog Area Wrapper ==*/}
        <section className="section-space pt-0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title text-center">
                  <h2 className="title">Others Posts</h2>
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
              <div className="col-sm-6 col-lg-4 mb-8">
                {/*== Start Blog Item ==*/}
                <div className="post-item">
                  <a href="blog-details.html" className="thumb">
                    <img src="assets/images/blog/5.webp" width={370} height={320} alt="Image-HasTech" />
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
                    <img src="assets/images/blog/6.webp" width={370} height={320} alt="Image-HasTech" />
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
                    <img src="assets/images/blog/7.webp" width={370} height={320} alt="Image-HasTech" />
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
        {/*== Start Product Banner Area Wrapper ==*/}
        <section className="section-space pt-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-10 col-lg-8">
                {/*== Start Product Category Item ==*/}
                <a href="product.html" className="product-banner-item">
                  <img src="assets/images/shop/banner/8.webp" width={770} height={250} alt="Image-HasTech" />
                </a>
                {/*== End Product Category Item ==*/}
              </div>
            </div>
          </div>
        </section>
        {/*== End Product Banner Area Wrapper ==*/}
        {/*== Start Blog Area Wrapper ==*/}
        <section className="section-space pt-0">
          <div className="container">
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
export default Blog