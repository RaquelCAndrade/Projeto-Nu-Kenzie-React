//receber os dados para adicionar novas entradas e saidas
import "./style.css"
import { useState } from "react"

function Form({ listTransactions, setListTransactions }) {
	const [description, setDescription] = useState("")
	const [value, setValue] = useState("")
	const [type, setType] = useState("")

	function handleTransactions(newDescription, newValue, newType) {
		const transaction = {
			description: newDescription,
			value: newValue,
			type: newType,
			visible: true,
		}

		setListTransactions([...listTransactions, transaction])
	}
	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<div className="form-description">
				<label>Descrição</label>
				<input
					className="description"
					type="text"
					name="description"
					value={description}
					placeholder="Digite aqui sua descrição"
					onChange={(event) => setDescription(event.target.value)}
				/>
				<small>Ex: Compra de roupas</small>
			</div>

			<div className="form-value-container">
				<div>
					<label>Valor</label>
					<input
						className="value"
						type="number"
						name="value"
						value={value}
						onChange={(event) => setValue(event.target.value)}
					/>
					<span className="span-value">R$</span>
				</div>

				<div>
					<label>Tipo de Valor</label>
					<select
						name="select"
						value={type}
						onChange={(event) => setType(event.target.value)}
					>
						<option value="">Selecione...</option>
						<option value="Entrada">Entrada</option>
						<option value="Saida">Saída</option>
					</select>
				</div>
			</div>

			<button
				className="form-btn"
				type="submit"
				onClick={() =>
					handleTransactions(
						description,
						value,
						type,
						setDescription(""),
						setValue(""),
						setType("")
					)
				}
			>
				Inserir Valor
			</button>
		</form>
	)
}

export default Form
