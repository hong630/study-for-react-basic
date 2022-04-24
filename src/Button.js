import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App";
import PropTypes from 'prop-types'
import styles from './Button.module.css'

function Button({text}){
    return <button className={styles.btn}>{text}</button>
}

Button.propTypes = {
    text : PropTypes.string.isRequired,
}

export default Button;