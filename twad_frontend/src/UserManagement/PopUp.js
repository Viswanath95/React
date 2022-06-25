import React from 'react';

const PopUp = ({ header }) => {
    return(
        <div className="popup-box">
            <div className="box">
                {header}
            </div>
        </div>
    )
}

export default PopUp;