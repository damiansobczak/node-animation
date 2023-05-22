import React from "react";

const Badge = ({ icon, label }) => {
	return (
		<div className="flex items-center text-xs border rounded-md shadow-sm absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 bg-white">
			<div className="py-1 px-2 border-r">{icon}</div>
			<span className="py-1 px-2">{label}</span>
		</div>
	);
};

export default Badge;
