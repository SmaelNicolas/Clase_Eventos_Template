import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { MyRoutes } from "./routes/MyRoutes";

function App() {
	return (
		<div className="container--app">
			<BrowserRouter>
				<Navbar />
				<MyRoutes />
			</BrowserRouter>
		</div>
	);
}

export default App;
