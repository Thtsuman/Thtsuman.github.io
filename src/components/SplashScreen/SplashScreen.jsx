import React, { useState } from "react"
import { animated, useTrail } from "react-spring"
import { Spring } from "react-spring/renderprops"
import "./splashScreen.style.css"

const textArray = ["Designer", "Developer", "Cardist!"]
const config = { mass: 20, tension: 2000, friction: 200 }

const SplashScreen = () => {
	const [splashDone, setSplashDone] = useState(false)
	const [splashScreenContainer, setSplashScreenContainer] = useState({})

	const firstAnim = {
		from: { marginTop: 300 },
		to: { marginTop: 0 },
	}

	const secondAnim = {
		from: { marginTop: 0, opacity: 1 },
		to: { marginTop: -200, opacity: 0 },
	}

	const trail = useTrail(textArray.length, {
		onRest: () => setSplashDone(true),
		delay: 50,
		config,
		to: {
			opacity: 1,
			x: 0,
			height: 27,
		},
		from: { opacity: 0, x: -10, height: 0 },
	})

	const handleDisplay = () => {
		if (splashDone) {
			setSplashScreenContainer({
				display: "none",
			})
		}
	}

	return (
		<div style={splashScreenContainer}>
			<Spring
				from={splashDone ? secondAnim.from : firstAnim.from}
				to={splashDone ? secondAnim.to : firstAnim.to}
				delay={50}
				onRest={handleDisplay}
			>
				{(props) => (
					<div style={props}>
						<div className="splashScreen-custom">
							<div className="splashScreen-text">
								{trail.map(({ x, height, ...rest }, index) => (
									<animated.div key={textArray[index]} className="trails-text" style={{ ...rest }}>
										<animated.div style={{ height }}>{textArray[index]}</animated.div>
									</animated.div>
								))}
							</div>
						</div>
					</div>
				)}
			</Spring>
		</div>
	)
}

export default SplashScreen
