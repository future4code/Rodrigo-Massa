import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from './img/EU.jpeg'
import logoms from './img/mslogo.png'
import logoitm from './img/itmlogo.jpg'
import CardPequeno from './components/CardPequeno/CardPequeno';
import email from './img/email-icon.png'
import address from './img/address-icon.png'
import phone from './img/phone-icon.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={foto}
          nome="Rodrigo Massa"
          descricao="Olá. Eu sou o Rodrigo Massa, estudante de Front-End na Labenu. Gosto de estudar códigos e 
          outras coisas relacionadas a TI, e passar meu tempo livre lendo, jogando ou assistindo séries."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>
      <div className="contact-section-container">
        <CardPequeno
          imagem={email}
          nome="Email:"
          contato="rodrigo@labenu.com.br"
        />

        <CardPequeno
          imagem={phone}
          nome="Telefone:"
          contato="(11)99999-9999"
        />

        <CardPequeno
          imagem={address}
          nome="Endereço:"
          contato="Rua 1, nº 22"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={logoms}
          nome="Microsoft"
          descricao="Auxiliando novas empresas do Programa de Parceiros da MS."
        />

        <CardGrande
          imagem={logoitm}
          nome="ITM Marketing"
          descricao="Trabalhando em projeto conjunto com Microsoft para o Programa de Parceiros."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
