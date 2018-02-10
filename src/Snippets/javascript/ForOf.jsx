import React from 'react';

const ForOf = () => {
    for(const elem of [1, 2, 3]) {
        console.log(`elem of: ${elem}`);
    }

    for(const [index, elem] of [1, 2, 3].entries()) {
        console.log(`destructured entres: ${index}:${elem}`);
    }

    return (
        <div>
        <p><a href="http://exploringjs.com/es6/ch_core-features.html#sec_multiple-return-values-core-feature">From for to forEach() to for-of</a></p>
        </div>
    )
}

export default ForOf;