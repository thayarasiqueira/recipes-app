import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import ContextIngredients from '../context/ContextIngredients';
import share from '../images/shareIcon.svg';
import favoritImageBlackHeart from '../images/blackHeartIcon.svg';

function FavoriteRecipes() {
  const { textCopyLink, clickCopy,
    checkHeartBlack, arrayFavorite,
    setArrayFavorite, filterRecive } = useContext(ContextIngredients);
  const localFavorit = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const history = useHistory();
  useEffect(() => {
    setArrayFavorite(localFavorit);
  }, []);
  return (
    <main className="container-foods">
      <section className="container-btns">
        <Header title="Favorite Recipes" />
        <button
          className="btn"
          type="button"
          onClick={ () => { filterRecive('All'); } }
          data-testid="filter-by-all-btn"
        >
          All

        </button>
        <button
          className="btn"
          type="button"
          onClick={ () => { filterRecive('food'); } }
          data-testid="filter-by-food-btn"
        >
          Food

        </button>
        <button
          className="btn"
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => { filterRecive('drink'); } }
        >
          Drinks

        </button>
      </section>
      <div>
        {
          arrayFavorite.map((item, index) => (
            <div
              key={ index }
            >
              <button
                type="button"
                onClick={ () => {
                  if (item.type === 'drink') { history.push(`/drinks/${item.id}`); }
                  if (item.type === 'food') { history.push(`/foods/${item.id}`); }
                } }
              >
                <img
                  data-testid={ `${index}-horizontal-image` }
                  src={ item.image }
                  alt="ilustração"
                  width="100px"
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
              </button>
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
