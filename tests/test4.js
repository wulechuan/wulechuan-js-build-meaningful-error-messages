const {
    printSeparator,
    aFunctionThatDoesNothingCorrect,
} = require('./_shared')

printSeparator()
aFunctionThatDoesNothingCorrect({
    a: 'good',
    anArrayProperty: { name: 'cool' },
})
