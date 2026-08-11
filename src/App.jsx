import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

import FormPage from './pages/FormPage.jsx';
import Alunos from './pages/Alunos.jsx';
import Professores from './pages/Professores.jsx';
import Coordenadores from './pages/Coordenadores.jsx';
import Diretor from './pages/Diretor.jsx';

import './App.css';

function App() {
  const [pessoas, setPessoas] = useState([]);
  const [proximoId, setProximoId] = useState(1);

  const salvarPessoa = (tipo, nome) => {
    const novaPessoa = {
      id: proximoId,
      nome: nome,
      tipo: tipo
    };

    setPessoas((listaAtual) => [...listaAtual, novaPessoa]);
    setProximoId((idAtual) => idAtual + 1);
  };

  return (
    <Router>

      <div className="app-shell">

        <nav className="navbar">

          <div className="container">

            <span className="navbar-brand">
              Sistema
            </span>

            <div className="navbar-links">

              <Link to="/" className="nav-link">
                Cadastrar
              </Link>

              <Link to="/alunos" className="nav-link">
                Alunos
              </Link>

              <Link to="/professores" className="nav-link">
                Professores
              </Link>

              <Link to="/coordenadores" className="nav-link">
                Coordenadores
              </Link>

              <Link to="/diretor" className="nav-link">
                Diretor
              </Link>

            </div>

          </div>

        </nav>

        <div className="container content">

          <Routes>

            <Route
              path="/"
              element={<FormPage onSave={salvarPessoa} />}
            />

            <Route
              path="/alunos"
              element={<Alunos pessoas={pessoas} />}
            />

            <Route
              path="/professores"
              element={<Professores pessoas={pessoas} />}
            />

            <Route
              path="/coordenadores"
              element={<Coordenadores pessoas={pessoas} />}
            />

            <Route
              path="/diretor"
              element={<Diretor pessoas={pessoas} />}
            />

          </Routes>

        </div>

      </div>

    </Router>
  );
}

export default App;