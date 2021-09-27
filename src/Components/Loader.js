import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    diplay: flex;
    justify-content: center;
    font-size:28px;
`;


const Loader = () => (
    <Container>
        <span>
            Loading...
        </span>
    </Container>)

export default Loader;