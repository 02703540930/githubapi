import axios from "axios";
import { useState } from "react";
import Loader from "./loader";

type FormData = {
  search: string;
};

type Github = {
  avatar_url: string;
  url: string;
  followers: number;
  location: string;
  name: string;
};

const Form = () => {
  const [github, setGithub] = useState<Github>();

  const [formData, setFormData] = useState<FormData>({
    search: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
    
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    axios
      .get(`https://api.github.com/users/${formData.search}`)
      .then((response) => {
        setGithub(response.data); 
        //console.log(response.data)
      })
      .catch((error) => {
        setGithub(undefined);
        alert("Nenhum resultado encontrado")
        //console.log(error)
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="container mt-4">
      <div className="card border-0 bg-light-blue">
        <div className="card-body">
          <h2 className="my-4">Encontre um perfil Github</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="search"
              value={formData.search}
              className="form-control shadow-none col-md-4"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary my-3">
              Encontrar
            </button>
          </form>
        </div>
      </div>

      { isLoading ? ( <Loader /> ) : github && (
        <>
          <div className="card border-0 bg-light-grey mt-4">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-3 text-center">
                  <img src={github.avatar_url} alt="avatar" width="230" />
                </div>
                <div className="col-lg-9">
                  <div className="card mt-2">
                    <div className="card-body">
                      <h5 className="text-primary">Informações</h5>
                      <input
                        type="text"
                        className="form-control form-control-sm shadow-none mt-1"
                        readOnly
                        value={github.url}
                      />
                      <input
                        type="text"
                        className="form-control form-control-sm shadow-none mt-1"
                        readOnly
                        value={github.followers}
                      />
                      <input
                        type="text"
                        className="form-control form-control-sm shadow-none mt-1"
                        readOnly
                        value={github.location ? github.location : ""}
                      />
                      <input
                        type="text"
                        className="form-control form-control-sm shadow-none mt-1"
                        readOnly
                        name="name"
                        value={github.name ? github.name : ""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Form;
