import React from 'react';

const TemplateLiterals = () => {
    const aString = 'foo';
    const anotherString = 'bar';
    const aMultiLineString = `First Line
    Second Line
    Third and final Line`;

    return (
        <div>
            {`String interpolation allows easy concatention of strings: ${aString} and ${anotherString} and ${undefined}`}
            <pre>{`They also allow a string to span across multiple lines, such as xml: ${aMultiLineString}`}</pre>
            <p><a href="http://exploringjs.com/es6/ch_core-features.html#sec_from-str-concat-to-tmpl-lit">From concatenating strings to template literals</a></p>
        </div>
    )
}

export default TemplateLiterals;