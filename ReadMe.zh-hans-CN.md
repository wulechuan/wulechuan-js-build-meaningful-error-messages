# Wulechuan's Builder for Colorful and Meaningful Error Messages

## Multilingual Editions of this Article

- [English version of this ReadMe](./ReadMe.md)




## NPM 页

<dl>
<dt>NPM 包名</dt>
<dd>

[@wulechuan/meaningful-error-messages](https://www.npmjs.com/package/@wulechuan/meaningful-error-messages)

</dd>
<dt>作者</dt>
<dd><p>南昌吴乐川</p></dd>
</dl>



## 简介

本工具提供一个“工厂函数”，其可构造出另一组函数。这些函数可期稍稍有助于打印五彩缤纷且意义明确的出错信息。



## 用法

尝试以下任一脚本：

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


### 示例

内置的 `./tests/_shared.js` 文件应该能说明问题。

其（几乎）完整的代码如下：

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



## 未来计划

暂无。


## 许可证类型

WTFPL

> 注意：
>
> 我未研究过许可证的约束。因此姑且声明为 WTFPL 类型。但实际上该许可证类型可能与我采用的开源模块有冲突。
