const Professores = ({ pessoas }) => {

  const professores = pessoas.filter(
    (pessoa) => pessoa.tipo === 'professores'
  );

  return (

    <div className="list-container">

      <h2>Professores</h2>

      <table className="table-striped table-hover">

        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
          </tr>
        </thead>

        <tbody>

          {professores.map((professor) => (

            <tr key={professor.id}>

              <td>{professor.id}</td>

              <td>{professor.nome}</td>

            </tr>

          ))}

        </tbody>

      </table>

      {professores.length === 0 && (
        <p>Nenhum professor cadastrado.</p>
      )}

    </div>

  );
};

export default Professores;