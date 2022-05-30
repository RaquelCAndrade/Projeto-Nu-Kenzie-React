import "./App.css"
import { useState } from "react"
import Form from "./components/Form"
import List from "./components/List"
import Header from "./components/Header"
import TotalMoney from "./components/TotalMoney"

function App() {
	const [listTransactions, setListTransactions] = useState([])

	function filtrarEntrada() {
		const entradas = listTransactions.filter((transiction) => {
			if (transiction.type === "Entrada") {
				transiction.visible = true
			} else {
				transiction.visible = false
			}
			return transiction
		})
		setListTransactions(entradas)
	}

	function filtrarDespesa() {
		const despesas = listTransactions.filter((transiction) => {
			if (transiction.type === "Saida") {
				transiction.visible = true
			} else {
				transiction.visible = false
			}
			return transiction
		})
		setListTransactions(despesas)
	}

	function filtrarTodos() {
		const todos = listTransactions.filter((transiction) => {
			transiction.visible = true
			return transiction
		})
		setListTransactions(todos)
	}

	return (
		<div className="App">
			<Header />
			<main className="main">
				<div className="form-container">
					<Form
						listTransactions={listTransactions}
						setListTransactions={setListTransactions}
					/>
					{listTransactions.length !== 0 ? (
						<TotalMoney listTransactions={listTransactions} />
					) : null}
				</div>

				<div className="card-container">
					<List
						filtrarEntrada={filtrarEntrada}
						filtrarDespesa={filtrarDespesa}
						filtrarTodos={filtrarTodos}
						listTransactions={listTransactions}
						setListTransactions={setListTransactions}
					/>
				</div>
			</main>
		</div>
	)
}

export default App
