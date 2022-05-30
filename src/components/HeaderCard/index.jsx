import "./style.css"

function HeaderCard({ filtrarEntrada, filtrarDespesa, filtrarTodos }) {
	return (
		<div className="header-list">
			<h3>Resumo Financeiro</h3>
			<div className="btn-list">
				<button className="btn selected" onClick={filtrarTodos}>
					Todos
				</button>
				<button className="btn" onClick={filtrarEntrada}>
					Entradas
				</button>
				<button className="btn" onClick={filtrarDespesa}>
					Despesas
				</button>
			</div>
		</div>
	)
}

export default HeaderCard
