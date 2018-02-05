import React from 'react';

const ConstLet = () => {
    let aLet = 'let';
    const aConstant = {aLet};
    
    if(true) {
        let aBlockScopedVariable = 1;
        console.log(`${aBlockScopedVariable} is in scope`);
    }

    // try {
    //     aConstant = {};
    // } catch(error) {
    //     console.log('A constant cannot be reassigned');
    // }

    return (
        <div>
            {/* {`${aBlockScopedVariable} is out scope.`}  */}
            {`Whereas, ${aConstant} is in scope.`}
            <p><a href="http://exploringjs.com/es6/ch_core-features.html#sec_from-var-to-const">From var to const</a></p>
        </div>
    )
}

export default ConstLet;