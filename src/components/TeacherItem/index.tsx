import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';


interface TeacherItemProps {
  // title: string; 
}

const TeacherItem: React.FC<TeacherItemProps> = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/59086275?s=460&u=0c75b9596219b5ccbb5186a580a1c59643240320&v=4" alt="Kaio Braga"/>
        <div>
          <strong>Kaio Braga</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Gosto de algoritmos

        <br/> <br/>

        Apaixonado pela resolução de problemas através da programação.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>

        <button>
          <img src={whatsappIcon} alt="Entrar em contato"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;