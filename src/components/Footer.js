import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <div className="container-footer">
      <footer data-testid="footer">
        <Link to="/drinks">
          <img src={ drinkIcon } alt="Drink Icon" data-testid="drinks-bottom-btn" />
        </Link>
        <Link to="/explore">
          <img src={ exploreIcon } alt="Explorer Icon" data-testid="explore-bottom-btn" />
        </Link>
        <Link to="/foods">
          <img src={ mealIcon } alt="Meals icon" data-testid="food-bottom-btn" />
        </Link>
      </footer>
    </div>
  );
}

export default Footer;
