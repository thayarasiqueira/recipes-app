import React from 'react';

export default function Profile() {
  return (
    <main>
      <section>
        <h3 data-testid="profile-email">email@email.com</h3>
      </section>
      <section>
        <button type="button" data-testid="profile-done-btn">Done Recipes</button>
        <button type="button" data-testid="profile-favorite-btn">Favorite Recipes</button>
        <button type="button" data-testid="profile-logout-btn">Logout</button>
      </section>
    </main>
  );
}
