import { useState } from "react";
import HomeStyled from "./HomeStyled";
import TarefaType from "../../types/TarefaType";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";
import InputDefault from "../../components/InputDefault/InputDefault";
import Header from "../../components/Header/Header";

const Home = () => {
  const [titulo, setTitulo] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [tarefas, setTarefas] = useState<TarefaType[]>([]);
  const [showModal, setShowModal] = useState<boolean>(true);

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const novaTarefa: TarefaType = {
      titulo,
      descricao,
      checked: false,
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

  const checked = (index: number) => {
    const novaLista = [...tarefas];
    novaLista[index].checked = !novaLista[index].checked;
    setTarefas(novaLista);
  };

  return (
    <HomeStyled>
      <Header>
        <h1>Lista de Tarefas</h1>
        <h2>Alunos: Mateus e Cristiane</h2>
      </Header>
      <div className="add-qtd">
        <ButtonDefault
          action={() => abrirModal(false)}
          label="Adicionar Tarefa"
        ></ButtonDefault>

        <div className="qtd-tarefas">
          Tarefas: <span>{tarefas.length}</span>
        </div>
      </div>
      <div className="lista-tarefa">
        {tarefas.map((tarefa, index) => (
          <li
            key={index}
            className={`tarefa ${tarefa.checked ? "checked" : ""}`}
          >
            <div className="info-tarefa">
              <div className="check">
                <InputDefault
                  type="checkbox"
                  name="concluido"
                  action={() => checked(index)}
                  checked={tarefa.checked}
                />
              </div>
              <div>
                <h2>{tarefa.titulo}</h2>
                <p>{tarefa.descricao}</p>
              </div>
            </div>
            <ButtonDefault
              action={() => deletarTarefa(tarefa.titulo)}
              label="Excluir"
            ></ButtonDefault>
          </li>
        ))}
      </div>
      {!showModal && (
        <div className="bg-modal">
          <div className="form">
            <div className="btn-close">
              <ButtonDefault label="X" action={() => abrirModal(true)} />
            </div>
            <form onSubmit={handleClick}>
              <h1>Nova Tarefa</h1>
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
              <ButtonDefault type="submit" label="Adicionar"></ButtonDefault>
            </form>
          </div>
        </div>
      )}
    </HomeStyled>
  );
};

export default Home;
