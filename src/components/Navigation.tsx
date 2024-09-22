import clsx from "clsx";
import React from "react";
import data from '../data.json'

const navigationArray = [
	{
		index: "01",
		author: "kafka",
	},
	{
		index: "02",
		author: "murakami",
	},
	{
		index: "03",
		author: "orwell",
	},
	{
		index: "04",
		author: "rand",
	},
];

type NavigationProps = {
	currentAuthor: number;
	setCurrentAuthor: (newAuthor: number) => void;
};

const Navigation: React.FC<NavigationProps> = ({
	currentAuthor,
	setCurrentAuthor,
}: NavigationProps) => {
	return (
		<nav
			className="navigation transition-all duration-100 delay-0 ease-in"
			style={{
				transform: `translateX(-${(100 / data.length) * (currentAuthor + 1)}%) translateY(-50%)`,
			}}
		>
			<ul className="flex list-none gap-24">
				{navigationArray.map((authorItem, index) => (
					<li
						onClick={() => setCurrentAuthor(index)}
						className={clsx(
							"flex cursor-pointer flex-col items-start justify-end text-white",
							{
								"border-b-2 opacity-100": index === currentAuthor,
								"opacity-80": index !== currentAuthor,
							},
						)}
						key={index}
					>
						<span
							className={clsx({
								"text-7xl": currentAuthor === index,
								"text-5xl": currentAuthor !== index,
							})}
							style={{ fontFamily: '"Lacquer", sans-serif' }}
						>
							{authorItem.index}.
						</span>
						<div
							className={clsx("transition-all", {
								"text-10xl": index === currentAuthor,
								"text-7xl": index !== currentAuthor,
							})}
							style={{ fontFamily: '"League Gothic", sans-serif' }}
						>
							{authorItem.author.toUpperCase()}
						</div>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
