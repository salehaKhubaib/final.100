import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../Slices/slice';
import { Link } from 'react-router-dom';

function HomePage() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const status = useSelector((state) => state.categories.status);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <h1>Emoji Metrics</h1>
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : status === 'failed' ? (
        <p>Error loading categories</p>
      ) : (
        categories.map((category) => (
          <div key={category.id}>
            <Link to={`/details/${category.id}`}>
              {category.name} - {category.metric}
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default HomePage;
