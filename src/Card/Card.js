import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({
    logo = "",
    name = "",
    onItemClick = () => { }
}) => {
    return (
        <div className="container">
            <div className="card" onClick={onItemClick}>
                <div>
                    <img className="logo" src={logo} alt={name} />
                </div>

                <div className="name">
                    <span>{name}</span>
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


