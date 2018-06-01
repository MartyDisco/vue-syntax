# Vue Syntax

A simple Vue wrapper on email-validator, providing an easy way to validate email syntax

## Installing

Using npm :

```
npm install vue-syntax
```

Using yarn :

```
yarn add vue-syntax
```

## Setup

Import ES6 module style :

```
import Vue from 'vue'
import EmailValidator from 'vue-syntax'
```

Or CommonJS style :

```
const Vue = require('vue')
  , EmailValidator = require('vue-syntax')
```

Or AMD style :

```
define(['vue', 'vue-syntax'], function(Vue, EmailValidator) {})
```

Or even `<script>` style :

```
<script src="http://path/to/vue.js"></script>
<script src="http://path/to/vue-syntax/index.js"></script>
```

Then provide `EmailValidator` to the `use()` function of `Vue` (not needed for `<script>` style) :

```
Vue.use(StandardError)
```

## Useage

You can now use `$EmailValidator.validate()` in your `Vue` instances and components

```
new Vue({
  created() {
    this.$EmailValidator.validate(emailAdress) // true / false
  }
})
```

## Dependencies

* [email-validator](https://github.com/manishsaraan/email-validator) - Email syntax validator npm module, fast and pretty robust

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
