import Card from "../Card"
import NoContentList from "../NoContentList"
import HeaderCard from "../HeaderCard"

function List({
	listTransactions,
	setListTransactions,
	filtrarEntrada,
	filtrarDespesa,
	filtrarTodos,
}) {
	function handleTransactions(removeTransaction) {
		//função para remover item
		const transctions = listTransactions.filter(
			(transction) => transction !== removeTransaction
		)
		setListTransactions(transctions)
	}
	return (
		<>
			<HeaderCard
				filtrarEntrada={filtrarEntrada}
				filtrarDespesa={filtrarDespesa}
				filtrarTodos={filtrarTodos}
			/>
			{listTransactions.length === 0 ? (
				<NoContentList />
			) : (
				listTransactions.map((transaction, index) =>
					transaction.visible === true ? (
						<Card
							transaction={transaction}
							key={index}
							handleTransactions={handleTransactions}
						/>
					) : null
				)
			)}
		</>
	)
}

export default List
