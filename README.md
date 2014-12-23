# grunt-eejs

> render ejs templates

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-eejs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-eejs');
```

## The "eejs" task

### Options

#### options.titlesConfigName
Type: `String`
Default value: `'titles'`

### Usage Examples

```js
grunt.initConfig({
  titles: {
    'src/test.ejs': 'TEST'
  },
  eejs: {
    options: {
      hello: function(name){return 'Hello ' + name + '!'}
    },
    files: {
      'dest/test.html': 'src/test.ejs',
    },
  },
});
```
