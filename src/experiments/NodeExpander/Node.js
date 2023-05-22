import React from "react";
import "./Node.css";

const Node = ({ icon, label, text }) => {
	return (
		<div className="inline-flex flex-col border rounded-md min-w-[8rem] min-h-[3rem] text-xs bg-white shadow-sm text-neutral-500">
			<div className="flex border-b">
				<span className="px-2 py-1 border-r flex items-center">{icon}</span>
				<span className="flex-1 px-2 p-1">{label}</span>
			</div>
			<div className="px-2 py-1">
				<span className="node animate-shimmer">{text}</span>
			</div>
		</div>
	);
};

export default Node;
