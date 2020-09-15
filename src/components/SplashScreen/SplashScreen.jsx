import React, { useState } from "react"
import { animated, useTrail } from "react-spring"
import { Spring } from "react-spring/renderprops"
import "./splashScreen.style.css"

const textArray = ["Designer", "Developer", "Cardist!"]
const config = { mass: 20, tension: 2000, friction: 200 }

const SplashScreen = () => {
	const [splashDone, setSplashDone] = useState(false)
	const [splashScreenContainer, setSplashScreenContainer] = useState({})

	const handleDisplay = () => {
		setSplashScreenContainer({
			display: "none",
		})
	}

	const firstAnim = {
		from: { marginTop: 300 },
		to: { marginTop: 0 },
	}

	const secondAnim = {
		from: { marginTop: 0, opacity: 1 },
		to: { marginTop: -window.screen.height, opacity: 0 },
		delay: 500,
		onRest: handleDisplay,
	}

	const trail = useTrail(textArray.length, {
		onRest: () => setSplashDone(true),
		delay: 50,
		config,
		to: {
			opacity: splashDone ? 0 : 1,
			x: splashDone ? 0 : -10,
			height: splashDone ? 0 : 40,
		},
		from: { opacity: 0, x: -10, height: 0 },
	})

	const finalAnim = splashDone ? secondAnim : firstAnim

	return (
		<div style={splashScreenContainer}>
			<Spring {...finalAnim}>
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
