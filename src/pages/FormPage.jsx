import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormPage = ({ onSave }) => {
  const [nome, setNome] = useState('');
  const navigate = useNavigate();

  const salvar = (tipo, destino) => {
    const valor = nome.trim();

    if (!valor) {
      return;
    }

    onSave(tipo, valor);
    setNome('');
    navigate(destino);
  };

  return (
    <div className="card">
      <h1>Cadastro</h1>

      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="nomePessoa">Nome</label>
        <input
          id="nomePessoa"
          type="text"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          placeholder="Digite o nome"
        />

        <div className="button-group" style={{ marginTop: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button type="button" onClick={() => salvar('alunos', '/alunos')}>
            Salvar Aluno
          </button>
          <button type="button" onClick={() => salvar('professores', '/professores')}>
            Salvar Professor
          </button>
          <button type="button" onClick={() => salvar('coordenadores', '/coordenadores')}>
            Salvar Coordenador
          </button>
          <button type="button" onClick={() => salvar('diretor', '/diretor')}>
            Salvar Diretor
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;
