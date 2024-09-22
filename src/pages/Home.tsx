import React from "react";
import { useState } from "react";
import Navigation from "../components/Navigation";
import Social from "../components/Social";
import Logo from "../components/Logo";
import Carousel from "../components/Carousel";
import data from '../data.json';

const Home: React.FC = () => {
	const [currentAuthor, setCurrentAuthor] = useState(0);
	const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
		if(e.key === 'ArrowRight') {
			if(currentAuthor + 1 > data.length - 1) return;
			setCurrentAuthor(prev => prev + 1);
		}
		if(e.key === 'ArrowLeft') {
			if(currentAuthor < 1) return;
			setCurrentAuthor(prev => prev - 1);
		}
	}
	return (
		<section tabIndex={0} onKeyDown={handleKeyDown} id="hero" className="relative">
			<Logo color={"white"} />
			<Carousel currentAuthor={currentAuthor} />
			<Navigation
				currentAuthor={currentAuthor}
				setCurrentAuthor={setCurrentAuthor}
			/>
			<Social color={"white"} />
		</section>
	);
};

export default Home;
