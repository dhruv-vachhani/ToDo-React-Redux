import React from "react";
import { useDispatch } from "react-redux";
import { VISIBILITY_FILTER } from "../constants";
import { setFilter } from "../redux/actions";

export const VisibilityFilter = () => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-center flex-row">
      {Object.keys(VISIBILITY_FILTER).map((filterkey) => {
        const currentFilter = VISIBILITY_FILTER[filterkey];
        return (
          <div
            onClick={() => dispatch(setFilter(currentFilter))}
            key={filterkey}
            className="p-3"
            href="#"
          >
            {currentFilter}
          </div>
        );
      })}
    </div>
  );
};
