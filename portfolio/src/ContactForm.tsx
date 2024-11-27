// ContactForm.tsx (continued)
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ContactFormData } from "./lib/types";

const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState<ContactFormData>({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "success" | "error"
	>("idle");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			// Add your form submission logic here
			await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
			setSubmitStatus("success");
			setFormData({ name: "", email: "", message: "" });
		} catch (error) {
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
			setTimeout(() => setSubmitStatus("idle"), 3000);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<section id="contact" className="py-20 bg-white dark:bg-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="max-w-2xl mx-auto text-center mb-12"
				>
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
						Get In Touch
					</h2>
					<p className="text-gray-600 dark:text-gray-300">
						Have a question or want to work together? Feel free to reach out!
					</p>
				</motion.div>

				<motion.form
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
					onSubmit={handleSubmit}
					className="max-w-xl mx-auto space-y-6"
				>
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							required
							value={formData.name}
							onChange={handleChange}
							className="w-full px-4 py-3 rounded-lg border border-gray-300 
                       dark:border-gray-600 bg-white dark:bg-gray-700 
                       text-gray-900 dark:text-white focus:ring-2 
                       focus:ring-blue-500 outline-none transition-colors"
						/>
					</div>

					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							value={formData.email}
							onChange={handleChange}
							className="w-full px-4 py-3 rounded-lg border border-gray-300 
                       dark:border-gray-600 bg-white dark:bg-gray-700 
                       text-gray-900 dark:text-white focus:ring-2 
                       focus:ring-blue-500 outline-none transition-colors"
						/>
					</div>

					<div>
						<label
							htmlFor="message"
							className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							required
							value={formData.message}
							onChange={handleChange}
							rows={5}
							className="w-full px-4 py-3 rounded-lg border border-gray-300 
                       dark:border-gray-600 bg-white dark:bg-gray-700 
                       text-gray-900 dark:text-white focus:ring-2 
                       focus:ring-blue-500 outline-none transition-colors"
						/>
					</div>

					<button
						type="submit"
						disabled={isSubmitting}
						className={`w-full px-6 py-3 rounded-lg bg-gradient-to-r 
                     from-blue-500 to-blue-600 text-white font-medium 
                     hover:from-blue-600 hover:to-blue-700 focus:outline-none 
                     focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                     transition-all duration-200 ${
												isSubmitting ? "opacity-50 cursor-not-allowed" : ""
											}`}
					>
						{isSubmitting ? "Sending..." : "Send Message"}
					</button>

					{submitStatus === "success" && (
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className="text-green-500 text-center"
						>
							Message sent successfully!
						</motion.p>
					)}

					{submitStatus === "error" && (
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className="text-red-500 text-center"
						>
							Error sending message. Please try again.
						</motion.p>
					)}
				</motion.form>
			</div>
		</section>
	);
};

export default ContactForm;
