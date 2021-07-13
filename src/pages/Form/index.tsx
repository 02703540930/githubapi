const Form = () => {
  return (
    <div className="container mt-4">
      <div className="card border-0 bg-light-blue">
        <div className="card-body">
          <h2 className="my-4">Encontre um perfil Github</h2>

          <form>
            <input
              type="text"
              className="form-control shadow-none col-md-4"
              placeholder="Usuário Github"
            />
            <button className="btn btn-primary my-3">Encontrar</button>
          </form>
        </div>
      </div>

      <div className="card border-0 bg-light-grey mt-4">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-3 text-center">
              <img
                src="https://avatars.githubusercontent.com/u/13897257?v=4"
                alt="avatar"
                width="230"
              />
            </div>
            <div className="col-lg-9">
              <div className="card mt-2">
                <div className="card-body">
                  <h5 className="text-primary">Informações</h5>
                  <input
                    type="text"
                    className="form-control form-control-sm shadow-none mt-1"
                    readOnly
                  />
                  <input
                    type="text"
                    className="form-control form-control-sm shadow-none mt-1"
                    readOnly
                  />
                  <input
                    type="text"
                    className="form-control form-control-sm shadow-none mt-1"
                    readOnly
                  />
                  <input
                    type="text"
                    className="form-control form-control-sm shadow-none mt-1"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
