import React from 'react';

const BlockScope = () => {
   
    const aConstant = 1;

    const aLambdaWithClosure = () => {
        console.log(`A lambda has access to closured variables like ${aConstant}`);

        var aVariable = "123";
        console.log(`An Immediately Invoked Function used to be required to keep variables private like ${aVariable}`);
    };
    aLambdaWithClosure();

    if(true) {
        const aVariable = "456"
        console.log(`Wheresa in ES6, block-scoped variables are not visibile outside, like ${aVariable}`);
    }

    return (
        <div>
            {/* {`Wheresa in ES6, block-scoped variables are not visibile, even within the same function ${aVariable}`} */}
        </div>
    )
}

export default BlockScope;