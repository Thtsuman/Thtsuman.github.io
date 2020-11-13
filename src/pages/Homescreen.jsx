import React from "react"
// import { ReactComponent as DotPattern } from "../assets/Frame 1.svg"
import Emoji from "../components/Emoji/Emoji"

const HomeScreen = () => {
	const title = "Front End  \u00b7  Developer"

	return (
		<div className="homeScreen-container">
			<div className="header-container container">
				<div className="top">
					<div className="title">
						Suman - Front End Developer & <br /> UI Designer, currently working <br /> at Pogo91
					</div>
					<div className="h-line"></div>
				</div>
				<div>See more </div>
			</div>
			<div className="container">
				<h1>Project Show Off</h1>
			</div>
			<div className="showOff-section">
				<div className="section-container">
					<img
						className="img"
						src="https://images.pexels.com/photos/1786758/pexels-photo-1786758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						alt=""
					/>

					<div className="img-overlay"></div>
					<div className="container">
						<div className="section-wrapper">
							<h3 className="section-title">Hello</h3>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque omnis voluptatum nulla maxime debitis
								quas et blanditiis sint ab vero?
							</p>
              <div>see more</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-section">Footer</div>
		</div>
	)
}

export default HomeScreen
