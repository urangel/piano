import React from 'react'

export default function BlackKey (props) {
    return (
        <div className="black-key" id={"black-" + props.index}>
            {props.myKey}
        </div>
    )
}