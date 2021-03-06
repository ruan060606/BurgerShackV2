import React, { Component } from 'react';
import Scroll from 'react-scroll-to-element';
import logo from './logo.png'

class Header extends Component {
	render() {
		return(
			<div>
				<span id="Header"></span>

				<section className="Header">
					<div className="row">
						<div className="col-12">
							<div className="absol">
								<div className="row">
									<div className="col-xl-4 col-lg-6 col-md-6 col-12">
										<img className="image" src="https://s3-media2.fl.yelpcdn.com/bphoto/9pDQeS-UXFejnuavuIHeMg/o.jpg"/>
									</div>
									<div className="col-xl-4 col-lg-6 col-md-6 d-none d-md-block">
										<img className="image" src="https://s3-media2.fl.yelpcdn.com/bphoto/9pDQeS-UXFejnuavuIHeMg/o.jpg"/>
									</div>
									<div className="col-xl-4 col-lg-6 d-none d-lg-block">
										<img className="image" src="https://s3-media2.fl.yelpcdn.com/bphoto/9pDQeS-UXFejnuavuIHeMg/o.jpg"/>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-4 col-4">
							<img src={logo} className="logo"/>
						</div>

						<div className="col-12">
							<div class="jumbo">
	  							<h1 class="display-4">BURGER SHACK</h1>
	  								<p class="lead">Classic Burgers near Pier 39</p>
	  						</div>
						</div>

						<Scroll type="class" element="Menu">
							<div className="icon">
									<i className="fas fa-chevron-down specialI"></i>
									<b className="icon-text specialB">SCROLL DOWN</b>
							</div>
						</Scroll>

					</div>
				</section>
			</div>
		)
	}
}
export default Header;