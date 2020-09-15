import React from "react"
import { ReactComponent as DotPattern } from "../assets/Frame 1.svg"
import Emoji from "../components/Emoji/Emoji"

const HomeScreen = () => {
	return (
		<div className="homeScreen-container">
			<div className="header-container">
				<div className="left">
					<p className="homeScreen-text">
						Hey there <Emoji symbol="👋" label="hey" />, <br /> I am Suman <br />{" "}
						<span className="homeScreen-title">Front End Developer</span>
					</p>
          
					{/* <DotPattern /> */}
				</div>
				<div className="right"></div>
			</div>
		</div>
  )
  
}

export default HomeScreen
