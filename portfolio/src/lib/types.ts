// types.ts

// Navigation
export interface NavItem {
	id: string;
	label: string;
	href: string;
}

export interface TypedProps {
	strings: string[];
	typeSpeed: number;
	backSpeed: number;
	loop: boolean;
}
// Project Card
export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	techStack: string[];
	githubUrl: string;
	liveUrl: string;
}

// Skills
export interface Skill {
	id: string;
	name: string;
	icon: string;
	proficiency: number;
	category: "frontend" | "backend" | "tools" | "other";
}

// Education Timeline
export interface education {
	id: string;
	institution: string;
	degree: string;
	field: string;
	startDate: string;
	endDate: string;
	achievements: string[];
	logo?: string;
}

// Contact Form
export interface ContactFormData {
	name: string;
	email: string;
	message: string;
}

// Theme
export interface Theme {
	isDark: boolean;
	toggleTheme: () => void;
}

// Social Media
export interface SocialLink {
	id: string;
	platform: string;
	url: string;
	icon: string;
}

// Props Types
export interface SectionProps {
	id: string;
	className?: string;
	children: React.ReactNode;
}

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "outline";
	size?: "sm" | "md" | "lg";
	isLoading?: boolean;
	children: React.ReactNode;
}

export interface CardProps {
	className?: string;
	children: React.ReactNode;
}

// Page Context
export interface PageContext {
	theme: Theme;
	isMenuOpen: boolean;
	toggleMenu: () => void;
}
