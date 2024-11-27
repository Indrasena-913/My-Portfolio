// Card.tsx
import React from "react";
import { motion } from "framer-motion";
import { CardProps } from "../../lib/types";

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl 
                 transition-shadow duration-300 ${className}`}
		>
			{children}
		</motion.div>
	);
};

export default Card;
