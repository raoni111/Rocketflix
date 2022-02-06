import styled from 'styled-components';

export const MainComponent = styled.section`
  :root {
    --title: #fffcf9;
    --subtitle: #b3b3b3;
  }
  width: 60%;
  color: white;
  .header-content {
    text-align: center;
    margin: 2rem 0rem 2rem;
    img {
      width: 70px;
      height: 50px;
    }
    h1 {
      font-size: 3rem;
    }1
  }
  .body-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .filme-information-content {
      display: flex;
      align-items: center;
      .image-content {
        img {
          width: 170px;
        }
      }
      .information-content {
        padding: 2rem;
        text-align: start;
        h1 {
          margin-bottom: 2rem;
          font-size: 1.7rem;
        }
        p {
          color: var(--subtitle);
          font-size: 1.3rem;
        }
      }
    }
    .search-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 3rem;
      padding: 2rem;
      width: 270px;
      button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0.5rem 1rem 0.5rem;
        span {
          font-size: 1.5rem;
          margin-left: 1rem;
        }
      }
      p {
        margin-top: 2rem;
        text-align: center;
        font-size: 1.3rem;
        color: var(--subtitle);
      }
    }
    .autor {
      padding: 1rem;
      a {
        font-size: 1.3rem;
        color: white;
      }
    }
  }
  @media (max-width: 900px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    .body-content {
      .filme-information-content {
        flex-direction: column;
        .information-content {
          text-align: center;
        }
      }
    }
  }
`;
