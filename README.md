# es6-promise-promise

Simple package that exports the `Promise` property from [`es6-promise`](https://github.com/stefanpenner/es6-promise).

# Install
`npm i es6-promise-promise`

# Usage
Instead of
`var Promise = require('es6-promise').Promise;`

just

`var Promise = require('es6-promise-promise');`

# Why I created this
If you want to ship less code sometimes you just want to replace some Promise implementations by another.

For example if you don't want `universal-promise` in [yup](https://github.com/jquense/yup) and you want to alias it (webpack configuration), you can't do it easily with
```
alias: {
    'universal-promise': 'es6-promise',
}
```
because one is a promise, the other an object.

Fix this by using
```
alias: {
    'universal-promise': 'es6-promise-promise',
}
```
and you're good to go.

Same thing with the [ProvidePlugin](http://webpack.github.io/docs/list-of-plugins.html#provideplugin) for example ...
This won't work
```
new webpack.ProvidePlugin({
    Promise: 'es6-promise', // Promise is not a function
})
```
This will
```
new webpack.ProvidePlugin({
    Promise: 'es6-promise-promise', // works as expected
})
```
