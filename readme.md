## Usage

First, install this package
```sh
npm install --save-dev eslint-config-xquark eslint-plugin-html
```

需要先安装`eslint`
Then add following contents to your `.eslintrc.js`  file
```
module.exports = {
  'extends': 'xquark'
}
```



## VS Code Configuration

```
"files.associations": {
    "*.vue": "vue"
},

"eslint.validate": ["javascript", "javascriptreact", "html", {"language": "vue", "autoFix": true}],
"eslint.options": {
    "plugins": ["html","vue"]
},
"eslint.autoFixOnSave": true,
```



## License

MIT
