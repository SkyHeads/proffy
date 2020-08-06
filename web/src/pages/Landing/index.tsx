import React from 'react'
import {Link} from 'react-router-dom';
import {Container,PageLandingContent,ButtonsContainer} from './styles';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

export default function Landing() {
  return (
    <Container>
      <PageLandingContent className="container" id="page-landing-content">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy"/>
          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img 
          src={landingImg} 
          alt="Plataforma de estudos" 
          className="hero-image"
        />

        <ButtonsContainer className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas"/>
            Dar Aulas
          </Link>
        </ButtonsContainer>

        <span className="total-connections">
          Total de 200 conexões realizadas.{" "}
          <img src={purpleHeartIcon} alt="Coração Roxo"/>
        </span>
      </PageLandingContent>
    </Container>
  )
}