import { useState } from "react";
import HomeStyled from "./HomeStyled";
import TarefaType from "../../types/TarefaType";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";
import InputDefault from "../../components/InputDefault/InputDefault";

const Home = () => {
  const [titulo, setTitulo] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [tarefas, setTarefas] = useState<TarefaType[]>([]);
  const [showModal, setShowModal] = useState<boolean>(true);

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const novaTarefa: TarefaType = {
      titulo,
      descricao,
      checked,
    };

    const tarefa = [...tarefas, novaTarefa];
    setTarefas(tarefa);

    abrirModal(true);
  };

  const abrirModal = (valor: boolean) => {
    setShowModal(valor);
  };

  const deletarTarefa = (titulo: any) => {
    const tarefaFilter = tarefas.filter((tarefa) => tarefa.titulo !== titulo);
    setTarefas(tarefaFilter);
  };

  return (
    <HomeStyled>
      <ButtonDefault
        action={() => abrirModal(false)}
        label="Adicionar Tarefa"
      ></ButtonDefault>

      {tarefas.map((tarefa, index) => (
        <li key={index} className="tarefa">
          <div>
            <h2>{tarefa.titulo}</h2>
            <p>{tarefa.descricao}</p>
            <span>{tarefa.checked ? "Concluida" : "Não Concluida"}</span>
          </div>
          <ButtonDefault
            action={() => deletarTarefa(tarefa.titulo)}
            label="Excluir"
          ></ButtonDefault>
        </li>
      ))}

      {!showModal && (
        <form onSubmit={handleClick}>
          <InputDefault
            type="text"
            name="titulo"
            label="Titulo"
            action={setTitulo}
          />
          <InputDefault
            type="text"
            name="descricao"
            label="Descrição"
            action={setDescricao}
          />
          <div>
            <p>Concluida?</p>
            <div>
              <label htmlFor="Sim">Sim</label>
              <input
                type="checkbox"
                name="sim"
                id="Sim"
                onChange={() => setChecked(true)}
              />
            </div>
            <div>
              <label htmlFor="Nao">Não</label>
              <input
                type="checkbox"
                name="nao"
                id="Nao"
                onChange={() => setChecked(false)}
              />
            </div>
          </div>
          <ButtonDefault type="submit" label="Adicionar"></ButtonDefault>
        </form>
      )}
    </HomeStyled>
  );
};

export default Home;
