import React from "react";
import "./Paths.css";
import { motion } from "framer-motion";

const Paths = () => {
	return (
		<div className="flex flex-col space-y-2 relative">
			<svg width="298" height="52" viewBox="0 0 298 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="mask">
				<path d="M0 51V51C28.5654 51 54.8906 37.6594 78.9886 22.321C100.582 8.57695 124.221 1 149 1C173.779 1 197.418 8.57695 219.011 22.321C243.109 37.6594 269.435 51 298 51V51" stroke="black" strokeWidth={1.2} strokeDasharray="1 4" />
				<path d="M0 51V51C28.5654 51 54.8906 37.6594 78.9886 22.321C100.582 8.57695 124.221 1 149 1C173.779 1 197.418 8.57695 219.011 22.321C243.109 37.6594 269.435 51 298 51V51" strokeWidth={1.2} stroke="url(#pulse-2)" strokeLinecap="round" />
				<defs>
					<motion.linearGradient
						animate={{
							x1: [298 * 2, 0],
							x2: [298, 0],
							y1: [52 / 2, 52],
							y2: [52, 52 * 2],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							delay: 0.8,
						}}
						id="pulse-2"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="black" offset=".6" stopOpacity="0" />
						<stop stopColor="black" offset=".99" />
						<stop offset="1" stopColor="black" stopOpacity="0" />
					</motion.linearGradient>
				</defs>
			</svg>
			<svg width="298" height="2" viewBox="0 0 298 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="mask">
				<path d="M0 1H298" strokeWidth={1.2} strokeDasharray="1 4" stroke="black" />
				<path d="M0 1H298" strokeWidth={1.2} stroke="url(#pulse-3)" strokeLinecap="round" />
				<defs>
					<motion.linearGradient
						animate={{
							x1: [0, 298 * 2],
							x2: [0, 298],
							y1: [2, 2 / 2],
							y2: [2 * 2, 2],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
						}}
						id="pulse-3"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="black" stopOpacity="0" />
						<stop stopColor="black" />
						<stop offset="1" stopColor="black" stopOpacity="0" />
					</motion.linearGradient>
				</defs>
			</svg>
			<svg width="298" height="52" viewBox="0 0 298 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="mask">
				<path d="M0 1V1C28.5654 1 54.8906 14.3406 78.9886 29.679C100.582 43.4231 124.221 51 149 51C173.779 51 197.418 43.4231 219.011 29.679C243.109 14.3406 269.435 1 298 1V1" strokeWidth={1.2} strokeDasharray="1 4" stroke="black" />
				<path d="M0 1V1C28.5654 1 54.8906 14.3406 78.9886 29.679C100.582 43.4231 124.221 51 149 51C173.779 51 197.418 43.4231 219.011 29.679C243.109 14.3406 269.435 1 298 1V1" strokeWidth={1.2} stroke="url(#pulse)" strokeLinecap="round" />
				<defs>
					<motion.linearGradient
						animate={{
							x1: [298 * 2, 0],
							x2: [298, 0],
							y1: [52 / 2, 52],
							y2: [52, 52 * 2],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							delay: 0.8,
						}}
						id="pulse"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="black" offset=".6" stopOpacity="0" />
						<stop stopColor="black" offset=".99" />
						<stop offset="1" stopColor="black" stopOpacity="0" />
					</motion.linearGradient>
				</defs>
			</svg>
		</div>
	);
};

export default Paths;
