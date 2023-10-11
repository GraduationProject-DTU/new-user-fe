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
        {/*== Start Blog Area Wrapper ==*/}
        <section className="section-space pt-0">
          <div className="container">
            <div className="row justify-content-between flex-xl-row-reverse">
              <div className="col-xl-8">
                <div className="row">
                  <div className="col-sm-6 col-lg-4 col-xl-6 mb-8">
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
                          <li className="post-date">February 13, 2021</li>
                        </ul>
                      </div>
                    </div>
                    {/*== End Blog Item ==*/}
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-6 mb-8">
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
                          <li className="post-date">February 13, 2021</li>
                        </ul>
                      </div>
                    </div>
                    {/*== End Blog Item ==*/}
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-6 mb-8">
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
                          <li className="post-date">February 13, 2021</li>
                        </ul>
                      </div>
                    </div>
                    {/*== End Blog Item ==*/}
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-6 mb-8">
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
                          <li className="post-date">February 13, 2021</li>
                        </ul>
                      </div>
                    </div>
                    {/*== End Blog Item ==*/}
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-6 mb-8">
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
                          <li className="post-date">February 13, 2021</li>
                        </ul>
                      </div>
                    </div>
                    {/*== End Blog Item ==*/}
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-6 mb-8">
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
                          <li className="post-date">February 13, 2021</li>
                        </ul>
                      </div>
                    </div>
                    {/*== End Blog Item ==*/}
                  </div>
                  <div className="col-12">
                    <ul className="pagination justify-content-center me-auto ms-auto mt-7 mb-8 mb-xl-0">
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
              <div className="col-xl-4">
                <div className="blog-sidebar-widget">
                  <div className="blog-search-widget">
                    <form action="#">
                      <input type="search" placeholder="Search Here" />
                      <button type="submit"><i className="fa fa-search" /></button>
                    </form>
                  </div>
                  <div className="blog-widget">
                    <h4 className="blog-widget-title">Popular Categoris</h4>
                    <ul className="blog-widget-category">
                      <li><a href="blog.html">Accesasories <span>(6)</span></a></li>
                      <li><a href="blog.html">Computer <span>(4)</span></a></li>
                      <li><a href="blog.html">Covid-19 <span>(2)</span></a></li>
                      <li><a href="blog.html">Electronics <span>(12)</span></a></li>
                      <li><a href="blog.html">Furniture <span>(9)</span></a></li>
                    </ul>
                  </div>
                  <div className="blog-widget">
                    <h4 className="blog-widget-title">Recent Posts</h4>
                    <div className="blog-widget-post">
                      <div className="blog-widget-single-post">
                        <a href="blog-details.html">
                          <img src="assets/images/blog/s1.webp" width={75} height={78} alt="Images" />
                          <span className="title">Lorem ipsum dolor sit amet conse adipis.</span>
                        </a>
                        <span className="date">Sep 24,2022</span>
                      </div>
                      <div className="blog-widget-single-post">
                        <a href="blog-details.html">
                          <img src="assets/images/blog/s2.webp" width={75} height={78} alt="Images" />
                          <span className="title">Lorem ipsum dolor sit amet conse adipis.</span>
                        </a>
                        <span className="date">Sep 25,2022</span>
                      </div>
                      <div className="blog-widget-single-post">
                        <a href="blog-details.html">
                          <img src="assets/images/blog/s3.webp" width={75} height={78} alt="Images" />
                          <span className="title">Lorem ipsum dolor sit amet conse adipis.</span>
                        </a>
                        <span className="date">Sep 26,2022</span>
                      </div>
                    </div>
                  </div>
                  <div className="blog-widget mb-0">
                    <h4 className="blog-widget-title">Popular Tags</h4>
                    <ul className="blog-widget-tags">
                      <li><a href="blog.html">Beauty</a></li>
                      <li><a href="blog.html">MakeupArtist</a></li>
                      <li><a href="blog.html">Makeup</a></li>
                      <li><a href="blog.html">Hair</a></li>
                      <li><a href="blog.html">Nails</a></li>
                      <li><a href="blog.html">Hairstyle</a></li>
                      <li><a href="blog.html">Skincare</a></li>
                    </ul>
                  </div>
                </div>
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