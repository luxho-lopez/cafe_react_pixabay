import { Component } from "react";
import Buscador from "./components/Buscador";

class App extends Component {

	state = {
		termino : ''
	}

	consultarApi = () => {
		const url = `https://pixabay.com/api/?key=37985450-29d841b18aa91b2ec3dfc8aec&q=${ this.state.termino }`;

		console.log(url)
	}

	datosBusqueda = (termino) => {
		this.setState({
			termino: termino
		}, () => {
			this.consultarApi();
		})
	}

	render() {
		return (
			<div className="app container">
				<div className="jumbotron">
					<p className="lead text-center">
						Buscador de Imagenes
					</p>
					<Buscador
						datosBusqueda={this.datosBusqueda}
					/>
				</div>

				{this.state.termino}
			</div>
		);
	}
}

export default App;
