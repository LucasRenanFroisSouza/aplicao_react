const Alunos = ({ pessoas }) => {
  const alunos = pessoas.filter((pessoa) => pessoa.tipo === 'alunos');

  return (
    <div className="list-container">
      <h2>Alunos</h2>

      <table className="table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
          </tr>
        </thead>

        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {alunos.length === 0 && <p className="empty-message">Nenhum aluno cadastrado.</p>}
    </div>
  );
};

export default Alunos;
