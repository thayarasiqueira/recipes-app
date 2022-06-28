import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import ContextIngredients from '../context/ContextIngredients';
import share from '../images/shareIcon.svg';
import favoritImageBlackHeart from '../images/blackHeartIcon.svg';

function FavoriteRecipes() {
  const { textCopyLink, clickCopy,
    checkHeartBlack, arrayFavorite,
    setArrayFavorite } = useContext(ContextIngredients);
  const localFavorit = JSON.parse(localStorage.getItem('favoriteRecipes'));
  useEffect(() => {
    setArrayFavorite(localFavorit);
  }, []);
  return (
    <main>
      <section>
        <Header title="Favorite Recipes" />
        <button type="button" data-testid="filter-by-all-btn">All</button>
        <button type="button" data-testid="filter-by-food-btn">Food</button>
        <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      </section>
      <div>
        {
          arrayFavorite.map((item, index) => (
            <div
              key={ index }
            >
              <img
                data-testid={ `${index}-horizontal-image` }
                src={ item.image }
                alt="ilustração"
              />
              {
                item.type === 'food'
                  ? (
                    <div>
                      <p
                        data-testid={ `${index}-horizontal-top-text` }
                      >
                        {`${item.nationality} - ${item.category}`}
                      </p>
                    </div>
                  )
                  : (
                    <p
                      data-testid={ `${index}-horizontal-top-text` }
                    >
                      {item.alcoholicOrNot}
                    </p>
                  )
              }

              <p
                data-testid={ `${index}-horizontal-name` }
              >
                {item.name}
              </p>
              {
                textCopyLink ? (<p>Link copied!</p>)
                  : (
                    <button
                      type="button"
                      onClick={ () => { clickCopy(item.id, item.type); } }
                    >
                      <img
                        data-testid={ `${index}-horizontal-share-btn` }
                        src={ share }
                        alt="Compartilhar"
                      />
                    </button>
                  )
              }
              <button
                type="button"
                onClick={ () => { checkHeartBlack(item.id); } }
              >
                <img
                  data-testid={ `${index}-horizontal-favorite-btn` }
                  src={ favoritImageBlackHeart }
                  alt="Favoritar"
                />
              </button>
            </div>
          ))

        }
      </div>
    </main>
  );
}
export default FavoriteRecipes;
