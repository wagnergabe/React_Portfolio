import React from "react";
import gamer_fit from "../../images/gamer_fit.png";
import project_luna from "../../images/ProjectLuna.png";
import tictactoe from "../../images/tictactoe.png";
import asteroid from '../../images/asteroid.png';
import invest from '../../images/invest.png';
import cookie from '../../images/cookies.png';

const Portfolio = () => {
  return (
    <>
      <div className="portfolioContainer">
        
        <div className="project">
          <h3>Gabe's Cookies</h3>
          <a href="https://gabes-cookies.onrender.com/">
            <img src={cookie} />
          </a>
        </div>

        <div className="project">
          <h3>Gamer Fit</h3>
          <a href="https://gamer-fit-99cedda4f183.herokuapp.com/login">
            <img src={gamer_fit} />
          </a>
        </div>

        <div className="project">
          <h3>Project Luna</h3>
          <a href="https://sensational-pie-31bfc4.netlify.app/">
            <img src={project_luna} />
          </a>
        </div>

        <div className="project">
          <h3>React Tic-Tac-Toe</h3>
          <a href="https://wonderful-genie-b0f041.netlify.app/">
            <img src={tictactoe} />
          </a>
        </div>

        <div className="project">
            <h3>Kitty Asteroid</h3>
            <a href="https://github.com/wagnergabe/kitty_astroid">\
            <img src={asteroid} />
            </a>
        </div>        

        
        <div className="project">
            <h3>Investment Calculator</h3>
            <a href="https://lambent-rabanadas-6b6b9b.netlify.app/">
            <img src={invest} />
            </a>
        </div>

        <div className="project">
            <a href="https://lambent-rabanadas-6b6b9b.netlify.app/">
            <img src={invest} />
            </a>
        </div>            

      </div>
    </>
  );
};

export default Portfolio;
