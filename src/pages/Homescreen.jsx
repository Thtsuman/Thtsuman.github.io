import React from "react"
// import { ReactComponent as DotPattern } from "../assets/Frame 1.svg"
import Emoji from "../components/Emoji/Emoji"

const HomeScreen = () => {
	const title = "Front End  \u00b7  Developer"

	return (
		<div className="homeScreen-container">
			<div className="header-container container">
				<div className="left">
					<p className="homeScreen-text" data-scroll data-scroll-speed="3" data-scroll-position="top">
						Hey there <Emoji symbol="👋" label="hey" />, <br /> I am Suman <br />{" "}
						<span className="homeScreen-title">{title}</span>
					</p>

					{/* <DotPattern /> */}
				</div>
				<div className="right"></div>
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
						<h3 className="section-title">Hello</h3>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeScreen
