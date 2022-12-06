# eslint configuration mega pack

:monocle_face: Opinionated eslint configuration installable as a node package.

```bash
.%%%%%%..%%%%%%...........%%%%...%%%%%%..%%..%%..%%%%%%..........%%%%%%...%%%%....%%%%...%%..%%.
...%%......%%............%%..%%....%%....%%%.%%....%%............%%......%%..%%..%%.......%%%%..
...%%......%%............%%%%%%....%%....%%.%%%....%%............%%%%....%%%%%%...%%%%.....%%...
...%%......%%............%%..%%....%%....%%..%%....%%............%%......%%..%%......%%....%%...
.%%%%%%....%%............%%..%%..%%%%%%..%%..%%....%%............%%%%%%..%%..%%...%%%%.....%%...
................................................................................................
```
Covers:

* Typescript
* Jest
* JSdoc
* Importing + sorting
* Prettier integration
* and more.. see [src/Configurations/](src/Configurations)!

## Installation

> You can remove all eslint related dependencies from your
> projects `package.json` as installing this package will
> install the required dependencies for you.

To use this package in your own projects simply run:

```shell
npm i -D @mateothegreat/eslint-config@latest
```

and then update your `package.json` to include:

```json
{
    ...
    "eslintConfig": {
        "extends": [
            "@mateothegreat/eslint-config"
        ]
    }
    ...
}
```

Now you can run

```shell
npx eslint src/
```
