import React, {useState} from "react";

const Categories = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const categoryArray = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

	const onClickCategory = (index) => {
		setActiveIndex(index);
	};

	return (
		<div className="categories">
			<ul>
				{categoryArray.map((category, index) => (
					<li key={index} onClick={() => onClickCategory(index)} className={activeIndex === index ? "active" : ""}>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Categories;
