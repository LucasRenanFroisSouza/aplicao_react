const Diretor = ({ pessoas }) => {
  const diretor = pessoas.filter((pessoa) => pessoa.tipo === 'diretor');

  return (
    <div className="list-container">
      <h2>Diretor</h2>

      <table className="table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
          </tr>
        </thead>

        <tbody>
          {diretor.map((diretorAtual) => (
            <tr key={diretorAtual.id}>
              <td>{diretorAtual.id}</td>
              <td>{diretorAtual.nome}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {diretor.length === 0 && <p className="empty-message">Nenhum diretor cadastrado.</p>}
    </div>
  );
};

export default Diretor;
