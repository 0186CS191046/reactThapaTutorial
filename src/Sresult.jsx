import React from "react";

const Sresult = (props) => {
    const url = `https://picsum.photos/500/300`
    return (
        <>
            <div className="img-result">
                <img src={url} alt="not_found" />
            </div>
        </>
    )
}

export default Sresult;