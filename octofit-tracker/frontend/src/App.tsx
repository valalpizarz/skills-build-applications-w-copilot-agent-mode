import { Link, Route, Routes } from 'react-router-dom';

function HomePage() {
  return (
    <div className="app-shell">
      <main className="hero-card">
        <p className="eyebrow">OctoFit Tracker</p>
        <h1>Modern multi-tier fitness tracking</h1>
        <p className="lead">
          React 19 frontend, Express and TypeScript backend, and MongoDB data
          access ready for the next build step.
        </p>
        <div className="button-row">
          <Link className="btn btn-primary" to="/dashboard">
            Open dashboard
          </Link>
          <a className="btn btn-outline-light" href="http://localhost:8000/health">
            Check API
          </a>
        </div>
      </main>
    </div>
  );
}

function DashboardPage() {
  return (
    <div className="app-shell">
      <main className="hero-card">
        <p className="eyebrow">Dashboard</p>
        <h1>Frontend scaffold is live</h1>
        <p className="lead">Routing, Bootstrap, and the Vite dev server are in place.</p>
        <Link className="btn btn-primary" to="/">
          Back home
        </Link>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}
