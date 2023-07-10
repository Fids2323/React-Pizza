import React, {useEffect, useState} from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";

const Home = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch("https://64a982f98b9afaf4844ac3cf.mockapi.io/items")
			.then((response) => response.json())
			.then((data) => {
				setItems(data);
				setIsLoading(false);
			});
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="container">
			<div className="content__top">
				<Categories />
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">{isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index} />) : items.map((pizza) => <PizzaBlock {...pizza} key={pizza.id} />)}</div>
		</div>
	);
};

export default Home;
