import "./style.css"

function TotalMoney({ listTransactions }) {
	const saldo = listTransactions.reduce(
		(total, transaction) =>
			transaction.type === "Entrada"
				? (total += Number(transaction.value))
				: (total -= Number(transaction.value)),
		0
	)

	return (
		<div className="container-balance">
			<p className="resume-balance">
				Valor total:{" "}
				<span className="balance">R${saldo.toFixed(2)}</span>
			</p>
			<span className="span-balance">O valor se refere ao saldo</span>
		</div>
	)
}

export default TotalMoney

// {saldo}
