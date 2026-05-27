
export default function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h1>THE B TEAM</h1>
        <p className="subtitle">Planeamos. Coordenamos. Entregamos.</p>
      </aside>

      <main className="content">
        <h2>Dashboard Operacional</h2>

        <div className="cards">
          <div className="card"><h3>Projetos</h3><span>8</span></div>
          <div className="card"><h3>Tarefas</h3><span>24</span></div>
          <div className="card"><h3>Entregas</h3><span>5</span></div>
        </div>
      </main>
    </div>
  )
}
