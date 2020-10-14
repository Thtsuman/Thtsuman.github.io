import React, { useEffect, createRef } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import locomotiveScroll from "locomotive-scroll"
import SplashScreen from "./components/SplashScreen/SplashScreen"
import HomeScreen from "./pages/Homescreen"

const App = () => {
	const scrollRef = createRef()

	useEffect(() => {
		const scroll = new locomotiveScroll({
			el: scrollRef.current,
			smooth: true,
		})
	})

	return (
		<Router>
			<div className="scroll" ref={scrollRef}>
				<Switch>
					<Route exact path="/home" component={HomeScreen} />
					<Route exact path="/" component={SplashScreen} />
				</Switch>
			</div>
			{/* <SplashScreen />
			<HomeScreen /> */}
		</Router>
	)
}

export default App
