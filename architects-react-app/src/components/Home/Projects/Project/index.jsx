import React from 'react'

function Project({ id, img, title }) {
    return (
        <>
            <div className="w3-col l3 m6 w3-margin-bottom" id={id}>
                <div className="w3-display-container">
                    <div className="w3-display-topleft w3-black w3-padding">{title}</div>
                    <img src={img} alt="House" style={{ width: "100%" }} />
                </div>
            </div>
        </>
    )
}

export default Project