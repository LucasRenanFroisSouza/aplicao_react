const Coordenadores = ({ pessoas }) => {
  const coordenadores = pessoas.filter((pessoa) => pessoa.tipo === 'coordenadores');

  return (
    <div className="list-container">
      <h2>Coordenadores</h2>

      <table className="table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
          </tr>
        </thead>

        <tbody>
          {coordenadores.map((coordenador) => (
            <tr key={coordenador.id}>
              <td>{coordenador.id}</td>
              <td>{coordenador.nome}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {coordenadores.length === 0 && <p className="empty-message">Nenhum coordenador cadastrado.</p>}
    </div>
  );
};

export default Coordenadores;
