import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/items";
import { Item } from "../Item/Item";
import { ItemList } from "../ItemList/ItemList";
import { Loading } from "../Loading/Loading";
import "./itemListContainer.css";

export const ItemListContainer = () => {
	const { idCategory } = useParams();
	const [loading, setLoading] = useState(true);

	const [myProducts, setMyProducts] = useState();

	useEffect(() => {
		setLoading(true);

		getItems(idCategory)
			.then((response) => setMyProducts(response))
			.finally(
				setTimeout(() => {
					setLoading(false);
				}, 2000)
			);
	}, [idCategory]);

	const getItems = (valueToFilter) => {
		return new Promise((resolve) => {
			if (valueToFilter === undefined) {
				resolve(products);
			} else {
				resolve(
					products.filter((item) => item.category === valueToFilter)
				);
			}
		});
	};

	return loading ? (
		<Loading />
	) : (
		<section className="container--ItemListContainer">
			<h2 className="itemListContainer--title">
				{idCategory === undefined ? "home" : idCategory}
			</h2>
			<div className="container--cards">
				<ItemList myProducts={myProducts} />
			</div>
		</section>
	);
};
