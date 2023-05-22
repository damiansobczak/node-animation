import React from "react";
import Node from "./Node";
import Paths from "./Paths";
import Badge from "./Badge";
import "./NodeExpander.css";
import IconArrowPathRounded from "./IconArrowPathRounded";
import IconCircleStack from "./IconCircleStack";

const NodeExpander = () => {
	return (
		<div
			className="inline-flex items-center relative bg-neutral-50 px-10 py-16 rounded-xl border shadow-xs overflow-hidden z-0"
			style={{
				boxShadow: "inset 6px 84px 79px -40px hsla(0, 0%, 45%, 0.025), inset 0 -4px 1px -3px hsla(0, 0%, 100%, 0.85), inset 0 4px 1px -3px hsla(0, 0%, 100%, 0.95)",
			}}
		>
			<div className="line"></div>
			{/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4/5 aspect-square rounded-full" style={{ background: "radial-gradient(rgba(115, 115, 115, .1) 0%, rgba(250, 250, 250, .1) 60%, rgba(250, 250, 250, 0)) 100%" }}></div> */}
			<Node icon=">_" label="Application" text="{'key': 'ev:Tk9D'}" />
			<Paths />
			<Badge icon={<IconArrowPathRounded />} label="Asset Service" />
			<Node icon={<IconCircleStack />} label="Server" text="{'file': '0d31dx1'}" />
		</div>
	);
};

export default NodeExpander;
