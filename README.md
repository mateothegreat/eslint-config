# MLFabric eslint configuration

Opinionated eslint configuration installable as a node package.

Covers:

* Typescript
* Jest
* JSdoc
* Importing
* and more.. see: [default.js](defaults.js)

## Installation

> You can remove all eslint related dependencies from your
> projects `package.json` as installing this package will
> install the required dependencies for you.

To use this package in your own projects simply run:

```shell
npm i -D @mateothegreat/eslint-config
```

and then update your `package.json` to include:

```json
{
    ...
    "eslintConfig": {
        "extends": [
            "@mateothegreat/eslint-config/defaults"
        ]
    }
    ...
}
```

Now you can run

```shell
npx eslint src/
```
