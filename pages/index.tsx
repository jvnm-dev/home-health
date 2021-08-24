import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  height: 75vh;
  width: 50vw;
  border-radius: 24px;
  border: 3px solid #3cd45d;
  box-shadow: 0px 0px 47px 4px rgba(0, 0, 0, 0.2);

  h1 {
    font-weight: 400;
    font-size: 3rem;
    color: #3cd45d;
  }

  @media (max-width: 992px) {
    height: 90vh;
    width: 90vw;
  }

  @media (max-width: 768px) {
    height: 90vh;
    width: 90vw;
  }

  @media (max-width: 576px) {
    height: 100vh;
    width: 100vw;
    border: none;
    padding: 24px;

    h1 {
      font-size: 2rem;
    }
  }
`;

const growingAnimation = keyframes`
 0% { transform: scale(1); }
 100% { transform: scale(1.02); }
`;

const StyledImage = styled(Image)`
  animation-name: ${growingAnimation};
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Health | Jason Van Malder</title>
      </Head>
      <Container>
        <StyledImage src="/health.svg" alt="Health" width={400} height={400} />
        <h1>Everything is good</h1>
      </Container>
    </>
  );
};

export default Home;
