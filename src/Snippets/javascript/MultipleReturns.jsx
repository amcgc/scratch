import React from 'react';

const MultipleReturns = () => {
    const arrayGetter = () => { return [1, 2, 3] };
    const objectGetter = () => { return { foo: 'bar' }};

    const [,, three] = arrayGetter();
    const { foo } = objectGetter();

    return (
        <div>
            <p>{`Returned arrays can be destructured, without auxillary variables, with skipping unwanted variables: ${three}`}</p>
            <p>{`Returned objects can be destructured, without auxillary variables: ${foo}`}</p>
            <p><a href="http://exploringjs.com/es6/ch_core-features.html#sec_multiple-return-values-core-feature">Handling multiple return values</a></p>
        </div>
    )
}

export default MultipleReturns;