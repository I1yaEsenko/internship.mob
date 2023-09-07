import React from 'react';
import './style.css'

type ButtonType = {
   name: string
   callback?: () => void
}

export const Button = ({name, callback = () => {} }:ButtonType) => {

    const onClickHandler = () => {
       callback()
    }

   return (
     <React.Fragment>
        <button className="btn"
        onClick={onClickHandler}>{name}</button>
     </React.Fragment>
   );
};

