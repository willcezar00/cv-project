import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({
    logo = "",
    name = "",
    backCardText = "",
    backCardTitle = "",
    onItemClick = () => { }
}) => {
    return (
        <div className="container">
            <div className="flip-card-inner">
                <div className="card-front" onClick={onItemClick}>
                    <div className="card-front__logo">
                        <img className="logo" src={logo} alt={name} />
                    </div>
                    <div className="name">
                        <span>{name}</span>
                    </div>
                </div>

                <div className="card-back">
                    <h1>{backCardTitle}</h1>
                    <p>{backCardTitle}</p>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    logo: PropTypes.string,
    name: PropTypes.string,
    onItemClick: PropTypes.func
};

export default Card;


