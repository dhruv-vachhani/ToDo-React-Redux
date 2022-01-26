import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { VISIBILITY_FILTER } from "../constants";
import { setFilter } from "../redux/actions";

export const VisibilityFilter = () => {
  const { visibilityFilter } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <nav class="d-flex justify-content-center nav nav-tabs pt-5">
      {Object.keys(VISIBILITY_FILTER).map((filterkey) => {
        const currentFilter = VISIBILITY_FILTER[filterkey];
        return (
          <a
            className={`nav-link p-3 mx-2 ${
              currentFilter === visibilityFilter
                ? "active text-primary"
                : "text-dark"
            }`}
            onClick={() => dispatch(setFilter(currentFilter))}
            key={filterkey}
            href="#"
          >
            {currentFilter}
          </a>
        );
      })}
    </nav>
  );
};
