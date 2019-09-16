# Wulechuan's Builder for Colorful and Meaningful Error Messages

## Multilingual Editions of this Article

- [简体中文版文档](./ReadMe.zh-hans-CN.md)




## NPM Page

<dl>
<dt>Package Name</dt>
<dd>

[@wulechuan/meaningful-error-messages](https://www.npmjs.com/package/@wulechuan/meaningful-error-messages)

</dd>
<dt>Author</dt>
<dd><p>wulechuan (南昌吴乐川)</p></dd>
</dl>




## Introduction

This tools provide a factory function, which in turn can create some more functions for print colorful and meaningful error messages easily, a little bit.



## Usage

Try any of these:

-   ```bash
    npm run test1
    ```

-   ```bash
    npm run test2
    ```

-   ```bash
    npm run test3
    ```

-   ```bash
    npm run test4
    ```


### Examples

The `./tests/_shared.js` is a good example, I think.

The full(almost) codes of the file is copied below.

```js
const chalk = require('chalk')


/* ****************************************** focus here ****************************************** */
/**/                                                                                              /**/
/**/     const createErrorMessageBuildersFor = require('@wulechuan/meaningful-error-messages')    /**/
/**/                                                                                              /**/
/**/     const {                                                                                  /**/
/**/         buildErrorMessage,                                                                   /**/
/**/         buildErrorMessageSaysThatSomethingMustBe,                                            /**/
/**/     } = createErrorMessageBuildersFor('@super-hero/splendid-package-that-fails')             /**/
/**/                                                                                              /**/
/* ************************************************************************************************ */


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
```



## TODOS

Nothing at present.



## License

WTFPL

> NOTE:
>
> I'm not an expert about license types. So I temporarily use WTFPL. But I guess this type of license might conflict with the ones used by those npm packages I'm utilizing.
