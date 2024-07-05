import styled from "styled-components";

const HomeStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100vh;
    padding: 0 50px;


    .tarefa {
        width: 100%;
        margin-top: 30px;
        border-radius: 8px;
        padding: 10px 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #eee;
        background-color: #333;
        box-shadow: 5px 10px 15px #33333373;
    }

    form {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;

        color: #333;
        background-color: #eee;
        padding: 20px 30px;
        border-radius: 8px;

        input {
            padding: 10px 20px;
            border-radius: 8px;
            margin-bottom: 5px;
            outline: none;
            border: 1px solid #00d660;
        }
    }
`;

export default HomeStyled;