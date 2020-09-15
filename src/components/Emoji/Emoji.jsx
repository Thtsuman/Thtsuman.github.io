import React from "react"
import "./emoji.style.css"
const Emoji = (props) => (
	<span
		className="emoji wave"
		role="img"
		aria-label={props.label ? props.label : ""}
		aria-hidden={props.label ? "false" : "true"}
	>
		{props.symbol}
	</span>
)
export default Emoji
