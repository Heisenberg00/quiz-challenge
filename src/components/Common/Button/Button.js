import React from 'react'

export default ({ label, handleClick, classes }) =>
  <button className={classes + ' btn'} onClick={handleClick}>
    {label}
  </button>
