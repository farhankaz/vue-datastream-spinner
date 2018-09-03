# vue-datastream-spinner

[![vue-js](https://img.shields.io/badge/vue.js-2.x-brightgreen.svg?maxAge=604800)](https://vuejs.org/)

An indeterminate progress indicator with variable/configurable spin speed to indicate the rate of data flow or maybe records processed per second.  

## Installation
```bash
# npm
npm install @farhankaz2018/vue-datastream-spinner --save

```

## Usage
* Use in your component's template
```html
<datastream-spinner></datastream-spinner>
<datastream-spinner :spinsPerSecond="0.5" type="black"></datastream-spinner>
<datastream-spinner :spinsPerSecond="1.5" type="blue"></datastream-spinner>
<datastream-spinner :spinsPerSecond="1" type="custom"></datastream-spinner>
```

* Register within your component
```js
import Spinner from '@farhankaz2018/vue-datastream-spinner';
export default {
  data: {...}
  components: { Spinner }
}

```
