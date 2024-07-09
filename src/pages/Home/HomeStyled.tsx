import styled from "styled-components";

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100vh;

  .add-qtd {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    padding-bottom: 15px;
    width: 90%;
    border-bottom: 2px solid #029444;

    .qtd-tarefas {
        color: #eee;
        font-weight: 700;
    }
  }

  .lista-tarefa {
    width: 100%;
  }

  .tarefa {
    border-radius: 8px;
    margin: 30px 50px;
    padding: 10px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #eee;
    background-color: #333;
    box-shadow: 5px 10px 15px #33333373;

    &.checked {
      opacity: 0.5;
    }
  }

  .info-tarefa {
    display: flex;
    align-items: center;

    .check {
      margin-right: 20px;

      input {
        transform: scale(2);
      }
    }
  }

  .form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;

    .btn-close {
      position: absolute;
      top: -20px;
      right: 10px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    color: #333;
    background-color: #eee;
    padding: 50px 40px;
    border-radius: 8px;

    h1 {
      font-size: 1.5em;
      text-align: center;
      margin-bottom: 20px;
      color: #005326;
    }

    input {
      padding: 10px 20px;
      border-radius: 8px;
      margin-bottom: 5px;
      outline: none;
      border: 1px solid #00d660;
    }
  }

  .bg-modal {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: #33333354;
    backdrop-filter: blur(1px);
  }
`;

export default HomeStyled;
