import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return(
    <article className="teacher-item">
          <header>
            <img src="https://www.leninja.com.br/wp-content/themes/LeNinja/images/ninja-negro-footer.png" alt="Geogea"/>
            <div>
              <strong>Geogea</strong>
              <span>Português</span>
            </div>
          </header>
          <p>
            lakdakdsnalsnalfnadkfnaldnld
            <br />
            nsdajsndjabsjbfaf
          </p>

          <footer>
            <p>
              Preço/hora 
              <strong>R$50,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  );
}

export default TeacherItem;