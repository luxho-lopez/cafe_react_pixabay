import { Component } from "react";
import Buscador from "./components/Buscador";
import Resultado from "./components/Resultado";

class App extends Component {

	state = {
		termino : '',
		imagenes : []
	}

	consultarApi = () => {
		const termino = this.state.termino;

		const url = `https://pixabay.com/api/?key=37985450-29d841b18aa91b2ec3dfc8aec&q=${ termino }`;

		// console.log(url)

		fetch(url)
			.then(respuesta => respuesta.json())
			.then(resultado => this.setState( { imagenes : resultado.hits } ) )
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

				<Resultado 
					imagenes={ this.state.imagenes }
				/>

			</div>
		);
	}
}

export default App;
