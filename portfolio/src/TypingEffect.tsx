import React, { useEffect, useState } from "react";

// Define the props for the TypingEffect component
interface TypingEffectProps {
	strings: string[];
	typeSpeed: number;
	backSpeed: number;
	loop: boolean;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
	strings,
	typeSpeed,
	backSpeed,
}) => {
	const [currentText, setCurrentText] = useState<string>("");
	const [index, setIndex] = useState<number>(0); // To track the current string
	const [isDeleting, setIsDeleting] = useState<boolean>(false);

	useEffect(() => {
		const currentString = strings[index];
		let typingInterval: NodeJS.Timeout;
		let deletingInterval: NodeJS.Timeout;

		if (!isDeleting) {
			// Typing effect
			typingInterval = setInterval(() => {
				setCurrentText(
					(prevText) => prevText + currentString.charAt(prevText.length)
				);
				if (currentText.length === currentString.length) {
					clearInterval(typingInterval);
					setTimeout(() => setIsDeleting(true), 500); // Wait before starting to delete
				}
			}, typeSpeed);
		} else {
			// Deleting effect
			deletingInterval = setInterval(() => {
				setCurrentText((prevText) => prevText.slice(0, -1));
				if (currentText.length === 0) {
					clearInterval(deletingInterval);
					setIsDeleting(false);
					setIndex((prevIndex) => (prevIndex + 1) % strings.length); // Go to the next string
				}
			}, backSpeed);
		}

		// Cleanup intervals
		return () => {
			clearInterval(typingInterval);
			clearInterval(deletingInterval);
		};
	}, [currentText, isDeleting, index, strings, typeSpeed, backSpeed]);

	return <span>{currentText}</span>;
};

export default TypingEffect;
