import React from 'react';
import { useParams } from 'react-router-dom';

function DetailsFood() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      Detalhes Food
    </div>

  );
}

DetailsFood.propTypes = {

};

export default DetailsFood;
