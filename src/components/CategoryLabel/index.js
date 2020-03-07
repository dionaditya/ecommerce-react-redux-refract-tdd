import React, { Fragment } from "react";

const CategoryLabel = ({ category }) => {
  return (
    <div
      className="Wrapper"
      style={{
        padding: 10
      }}
    >
      <h2 className="category-name">{category}</h2>
    </div>
  );
};

export default CategoryLabel;
