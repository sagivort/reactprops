import React from "react";


function Term(props) {
    return (
        <> 
        <div className="term">
            <dt>
                <span className="emoji" role="img" aria-label="Tense Biceps">
                    {props.emoji}
                </span>
                <span>{props.title}</span>
            </dt>
            <dd>
                {props.content}
            </dd>
        </div>
        </>

    );
}


export default Term;