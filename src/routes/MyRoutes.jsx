import { Route, Routes } from "react-router-dom";
import { EventsAutomatic } from "../components/Clase-10/EventsAutomatic/EventsAutomatic";
import { EventsManuals } from "../components/Clase-10/EventsManual/EventsManual";
import { Form } from "../components/Clase-10/Form/Form";
import { InputVocals } from "../components/Clase-10/InputVocals/InputVocals";
import { SelectApi } from "../components/Clase-10/SelectApi/SelectApi";
import { SelectContainer } from "../components/Clase-10/SelectContainer/SelectContainer";
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";

export const MyRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<ItemListContainer />} />
			<Route
				path="/category/:idCategory"
				element={<ItemListContainer />}
			/>
			<Route path="/items/:idItem" element={<ItemDetailContainer />} />
			<Route path="/eventosmanuales" element={<EventsManuals />} />
			<Route path="/eventosautomaticos" element={<EventsAutomatic />} />
			<Route path="/form" element={<Form />} />
			<Route path="/inputvocals" element={<InputVocals />} />
			<Route path="/select" element={<SelectContainer />} />
			<Route path="/selectapi" element={<SelectApi />} />
		</Routes>
	);
};
