const chalk = require('chalk')


/* ************************************** focus here ************************************** */
/**/                                                                                      /**/
/**/     const createErrorMessageBuildersFor = require('..')                              /**/
/**/                                                                                      /**/
/**/     const {                                                                          /**/
/**/         buildErrorMessage,                                                           /**/
/**/         buildErrorMessageSaysThatSomethingMustBe,                                    /**/
/**/     } = createErrorMessageBuildersFor('@super-hero/splendid-package-that-fails')     /**/
/**/                                                                                      /**/
/* **************************************************************************************** */


function aFunctionThatDoesNothingCorrect(options) {
    const errorContext = 'aFunctionThatDoesNothingCorrect'

    if (!options || typeof options !== 'object') {
        throw new TypeError(buildErrorMessageSaysThatSomethingMustBe(
            'object',            // The expected type
            options,             // The actual value
            'arguments.options', // The accessing path of the value, for printing meaningful details
            errorContext         // The optional message that describs the current context
        ))
    }

    const {
        a,
        b,
        anArrayProperty,
    } = options

    if (a && b) {
        throw new TypeError(buildErrorMessage(
            [ // Each memeber of this array occupies a single line in the console

                // line 1
                `Of the "${chalk.rgb(255, 255, 255)('options')}",`,

                // line 2
                `${
                    chalk.green('both')
                } "${
                    chalk.yellow('a')
                }" and "${
                    chalk.yellow('b')
                }" are provided.`,

                // line 3
                'Please do provide one but either one only.',
            ]
        ))
    } else if (!a && !b) {
        throw new TypeError(buildErrorMessage(
            [ // Each memeber of this array occupies a single line in the console

                // line 1
                `Of the "${chalk.rgb(255, 255, 255)('options')}",`,

                // line 2
                `${
                    chalk.blue('neither')
                } "${
                    chalk.yellow('a')
                }" ${
                    chalk.blue('nor')
                } "${
                    chalk.yellow('b')
                }" is provided.`,

                // line 3
                'Please do provide one but either one only.',
            ]
        ))
    }



    if (anArrayProperty && !Array.isArray(anArrayProperty)) {
        throw new TypeError(buildErrorMessageSaysThatSomethingMustBe(
            'an array or undefined',   // The expected type
            anArrayProperty,           // The actual value
            'options.anArrayProperty', // The accessing path of the value, for printing meaningful details
            errorContext               // The optional message that describs the current context
        ))
    }
}


function printSeparator() {
    console.log('-'.repeat(79))
}


module.exports = {
    buildErrorMessage,
    buildErrorMessageSaysThatSomethingMustBe,
    aFunctionThatDoesNothingCorrect,
    printSeparator,
}
