/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { CreateFilmeInformation } from '../class/create-filme-Information';
import { CreateFilmeInformationProtocol } from '../class/interface/create-filme-information-protocol';
import { MainComponent } from './assets/style/main-style';

export default function MainContent(): JSX.Element {
  const [filme, setFilme] = useState<CreateFilmeInformationProtocol>();
  const createFilmeInformation = new CreateFilmeInformation();

  const displayFilmeInformation = async (): Promise<void> => {
    await createFilmeInformation
      .search()
      .then(() => {
        setFilme(createFilmeInformation);
      })
      .catch(() => {
        displayFilmeInformation();
        console.clear();
      });
  };
  return (
    <MainComponent>
      <div className="header-content">
        <img src="./assets/img/android-chrome-512x512.png" alt="" />
        <h1>Nao sabe o que assistir?</h1>
      </div>
      <div className="body-content">
        <div className="filme-information-content">
          <div className="image-content">
            <img src={filme?.imageUrl} alt="" />
          </div>
          <div className="information-content">
            <h1>{filme?.originalTitle}</h1>
            <p>{filme?.overview}</p>
          </div>
        </div>
        <div className="search-content">
          <button type="button" onClick={displayFilmeInformation}>
            <img src="./assets/img/favicon-16x16.png" alt="" />
            <span>Encontrar filme</span>
          </button>
          <p>
            Clique em 'Encontrar filme' que traremos infomações de algum filme
            para você assistir hoje
          </p>
        </div>
        <div className="autor">
          <a href="https://github.com/raoni111">Autor: Raoni Olivera Quevedo</a>
        </div>
      </div>
    </MainComponent>
  );
}
