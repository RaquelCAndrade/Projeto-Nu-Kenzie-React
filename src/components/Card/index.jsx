import "./style.css"
import HeaderCard from "../HeaderCard"

function Card({ transaction, handleTransactions }) {
	const { description, value, type, visible } = transaction

	return (
		<div className="card-container">
			<div className="card-itens">
				{type === "Entrada" ? (
					<div className="card-detail in"></div>
				) : (
					<div className="card-detail out"></div>
				)}
				{visible === true}
				<div>
					<p className="card-description">{description}</p>
					<span className="card-type">{type}</span>
				</div>
				<span className="card-value">
					R$ {Number(value).toFixed(2)}
				</span>
				<button
					onClick={() => handleTransactions(transaction)}
					className="trash"
				>
					<svg
						stroke="currentColor"
						fill="currentColor"
						strokeWidth="0"
						viewBox="0 0 448 512"
						height="1em"
						width="1em"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path>
					</svg>
				</button>
			</div>
		</div>
	)
}

export default Card
