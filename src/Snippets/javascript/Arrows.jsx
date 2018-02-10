import React from 'react';

const Arrows = () => {
    
    const WrappingConstructor = function() {
        this.someInaccessibleFunction = function() {
            console.log(`The inaccessible function, assigned to the Arrow's this was accessed!`); // is evaluated!
        }
    
        const aLexicallyScopedArrowFunction = () => {
            this.someInaccessibleFunction();
        }
    
        const AnES5ConstructorFunction = function () {
            // receives this as newly created object
            this.createdTime = new Date();
            try {
                this.someInaccessibleFunction()
            } catch(e) {
                console.log('Inaccessible function could not be accessed, due to relative this')
            }
            this.ES5ReferenceToLexicalFunction = aLexicallyScopedArrowFunction;
        }
    
        new AnES5ConstructorFunction().ES5ReferenceToLexicalFunction();
    };
    new WrappingConstructor();

    

    return (
        <div>
            Check the console for Lexical scoping behavior
            Arrow functions can also be more concise:
            {[1,2,3].map(x => <div>{x * x}</div>)}
            <p><a href="http://exploringjs.com/es6/ch_core-features.html#sec_from-func-expr-to-arrow-func">From function expressions to arrow functions</a></p>
        </div>
    )
}

export default Arrows;