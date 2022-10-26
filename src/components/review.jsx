import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

const Review = ({status}) => {
    console.log(status);
    const element=status?(
        <FontAwesomeIcon icon={faStar} />
        ) : (
          <FontAwesomeIcon icon={faStarEmpty} />
        );
        return element;
}
 
export default Review;