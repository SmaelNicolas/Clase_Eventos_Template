import { Item } from "../Item/Item";

export const ItemList = ({ myProducts }) =>
	myProducts.map((product, index) => <Item key={index} item={product} />);
