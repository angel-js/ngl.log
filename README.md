ngl.log
=======

Angular 1.x log component

Install
-------

    bower install ngl.log

Include the sources

```html
<link href="bower_components/ngl.log/dist/log.css" rel="stylesheet">

<script src="bower_components/ngl.log/dist/log.js"></script>
<script src="bower_components/ngl.log/dist/templates.js"></script>
```

Add `ngl.log` to your app dependencies

```js
angular.module('app', [
  'ngl.log'
]);
```

API
---

### `nglLog`

Send a message to be logged

```js
nglLog(msg);
```

### `<ngl-log>`

Show the messages sent with `nglLog` service

```html
<div ngl-log></div>
```
