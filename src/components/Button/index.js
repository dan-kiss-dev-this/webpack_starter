import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const Button = ({ onClick }) => (
    <button type='button' onClick={onClick}>Click me</button>
)


Button.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default Button;