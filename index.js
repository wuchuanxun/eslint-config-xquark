module.exports = {
  parserOptions: {
    // es2015
    ecmaVersion: 6,
    ecmaFeatures: {
      // https://github.com/tc39/proposal-object-rest-spread
      // rest and spread usage
      experimentalObjectRestSpread: true, 
      // render html
      jsx: true
    },
    sourceType: 'module'
  },

  env: {
    es6: true,
    node: true
  },

  plugins: ['vue'],

  // false is read-only
  globals: {
    document: false,
    navigator: false,
    window: false
  },

  rules: {
    //强制 getter 和 setter 在对象中成对出现
    'accessor-pairs': 2,
    //强制箭头函数的箭头前后使用一致的空格
    'arrow-spacing': [2, { 'before': true, 'after': true }],
    //禁止或强制在代码块中开括号前和闭括号后有空格
    'block-spacing': [2, 'always'],
    //强制在代码块中使用一致的大括号风格
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    //强制使用骆驼拼写法命名约定
    'camelcase': [2, { 'properties': 'always' }],
    //要求或禁止末尾逗号,数组最后
    'comma-dangle': [2, 'never'],
    //强制在逗号前后使用一致的空格
    'comma-spacing': [2, { 'before': false, 'after': true }],
    //https://cn.eslint.org/docs/rules/comma-style
    //要求逗号放在数组元素、对象属性或变量声明之后，且在同一行 
    'comma-style': [2, 'last'],
    //https://cn.eslint.org/docs/rules/constructor-super
    //要求在构造函数中有 super() 的调用
    'constructor-super': 2,
    //https://cn.eslint.org/docs/rules/curly
    //强制所有控制语句使用一致的括号风格
    'curly': [2, 'multi-line'],
    //https://cn.eslint.org/docs/rules/dot-location
    //强制在点号之前和之后一致的换行
    //选项 "property" 要求点操作符和属性放在同一行
    'dot-location': [2, 'property'],
    //https://cn.eslint.org/docs/rules/eol-last
    //要求或禁止文件末尾存在空行
    'eol-last': 2,
    //要求使用 === 和 !== (eqeqeq)
    'eqeqeq': [2, 'always', {'null': 'ignore'}],
    //https://cn.eslint.org/docs/rules/generator-star-spacing
    //强制 generator 函数中 * 号周围使用一致的空格
    'generator-star-spacing': [2, { 'before': true, 'after': true }],
    //https://cn.eslint.org/docs/rules/handle-callback-err
    //要求回调函数中有容错处理
    'handle-callback-err': [2, '^(err|error)$' ],
    //https://cn.eslint.org/docs/rules/indent
    //强制使用一致的缩进
    'indent': [2, 2, { 'SwitchCase': 1 }],
    //https://cn.eslint.org/docs/rules/jsx-quotes
    //强制在 JSX 属性中一致地使用双引号或单引号
    'jsx-quotes': [2, 'prefer-single'],
    //https://cn.eslint.org/docs/rules/key-spacing
    //强制在对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
    //https://cn.eslint.org/docs/rules/keyword-spacing
    //强制在关键字前后使用一致的空格
    'keyword-spacing': [2, { 'before': true, 'after': true }],
    //https://cn.eslint.org/docs/rules/new-cap
    //要求构造函数首字母大写
    'new-cap': [2, { 'newIsCap': true, 'capIsNew': false }],
    //强制或禁止调用无参构造函数时有圆括号
    'new-parens': 2,
    //https://cn.eslint.org/docs/rules/no-array-constructor
    //禁用 Array 构造函数
    'no-array-constructor': 2,
    //禁用 arguments.caller 或 arguments.callee
    'no-caller': 2,
    //禁止修改类声明的变量
    'no-class-assign': 2,
    //禁止条件表达式中出现赋值操作符
    'no-cond-assign': 2,
    'no-const-assign': 2,
    //禁止在正则表达式中使用控制字符
    'no-control-regex': 2,
    //禁止删除变量
    'no-delete-var': 2,
    //禁止 function 定义中出现重名参数
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    //禁用 eval()
    'no-eval': 2,
    //禁止对 catch 子句的参数重新赋值
    'no-ex-assign': 2,
    //禁止扩展原生类型
    'no-extend-native': 2,
    //禁止不必要的 .bind() 调用
    'no-extra-bind': 2,
    //禁止不必要的布尔转换
    'no-extra-boolean-cast': 2,
    //禁止不必要的括号
    'no-extra-parens': [2, 'functions'],
    'no-fallthrough': 2,
    //禁止数字字面量中使用前导和末尾小数点
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    //禁止使用类似 eval() 的方法
    'no-implied-eval': 2,
    //禁止在嵌套的块中出现变量声明或 function 声明
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    //禁止不规则的空白
    'no-irregular-whitespace': 2,
    //禁用 __iterator__ 属性
    'no-iterator': 2,
    //不允许标签与变量同名
    'no-label-var': 2,
    //https://cn.eslint.org/docs/rules/no-labels
    //禁用标签语句
    'no-labels': [2, { 'allowLoop': false, 'allowSwitch': false }],
    //禁用不必要的嵌套块
    'no-lone-blocks': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [2, { 'max': 1 }],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    //禁止调用 require 时使用 new 操作符
    'no-new-require': 2,
    //禁止 Symbolnew 操作符和 new 一起使用
    'no-new-symbol': 2,
    //禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-new-wrappers': 2,
    //https://cn.eslint.org/docs/rules/no-obj-calls
    //禁止把全局对象作为函数调用
    'no-obj-calls': 2,
    //禁用八进制字面量
    'no-octal': 2,
    'no-octal-escape': 2,
    //禁止对 __dirname 和 __filename 进行字符串连接
    'no-path-concat': 2,
    //https://cn.eslint.org/docs/rules/no-proto
    //禁用 __proto__ 属性
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-assign': 2,
    'no-self-compare': 2,
    //https://cn.eslint.org/docs/rules/no-sequences
    //禁用逗号操作符
    'no-sequences': 2,
    //禁止将标识符定义为受限的名字
    'no-shadow-restricted-names': 2,
    //禁用稀疏数组
    'no-sparse-arrays': 2,
    //https://cn.eslint.org/docs/rules/no-this-before-super
    //禁止在构造函数中，在调用 super() 之前使用 this 或 super
    'no-this-before-super': 2,
    //https://cn.eslint.org/docs/rules/no-throw-literal
    //禁止抛出异常字面量
    'no-throw-literal': 2,
    //禁用行尾空格
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    //https://cn.eslint.org/docs/rules/no-unmodified-loop-condition
    //禁用一成不变的循环条件
    'no-unmodified-loop-condition': 2,
    //https://cn.eslint.org/docs/rules/no-unneeded-ternary
    //禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-unneeded-ternary': [2, { 'defaultAssignment': false }],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unused-vars': [2, { 'vars': 'all', 'args': 'none' }],
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    //https://cn.eslint.org/docs/rules/no-with
    //禁用 with 语句
    'no-with': 2,
    //https://cn.eslint.org/docs/rules/one-var
    //强制函数中的变量要么一起声明要么分开声明
    'one-var': [2, { 'initialized': 'never' }],
    //https://cn.eslint.org/docs/rules/operator-linebreak
    //强制操作符使用一致的换行符
    'operator-linebreak': [2, 'after', { 'overrides': { '?': 'before', ':': 'before' } }],
    //https://cn.eslint.org/docs/rules/padded-blocks
    //要求或禁止块内填充,该规则强制块内空行填充的一致性。
    'padded-blocks': [2, 'never'],
    //https://cn.eslint.org/docs/rules/quotes
    //强制使用一致的反勾号、双引号或单引号
    'quotes': [2, 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    //要求或禁止使用分号代替 ASI
    'semi': [2, 'never'],
    //强制分号之前和之后使用一致的空格
    'semi-spacing': [2, { 'before': false, 'after': true }],
    //强制在块之前使用一致的空格
    'space-before-blocks': [2, 'always'],
    //强制在 function的左括号之前使用一致的空格
    'space-before-function-paren': [2, 'always'],
    //https://cn.eslint.org/docs/rules/space-in-parens
    //强制在圆括号内使用一致的空格
    'space-in-parens': [2, 'never'],
    //要求操作符周围有空格
    'space-infix-ops': 2,
    //https://cn.eslint.org/docs/rules/space-unary-ops
    //强制在一元操作符前后使用一致的空格
    'space-unary-ops': [2, { 'words': true, 'nonwords': false }],
    //强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': [2, 'always', { 'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','] }],
    //要求或禁止模板字符串中的嵌入表达式周围空格的使用
    'template-curly-spacing': [2, 'never'],
    //要求使用 isNaN() 检查 NaN
    'use-isnan': 2,
    //强制 typeof 表达式与有效的字符串进行比较
    'valid-typeof': 2,
    //https://cn.eslint.org/docs/rules/wrap-iife
    //要求 IIFE 使用括号括起来
    'wrap-iife': [2, 'any'],
    //https://cn.eslint.org/docs/rules/yield-star-spacing
    //强制在 yield* 表达式中 * 周围使用空格
    'yield-star-spacing': [2, 'both'],
    //https://cn.eslint.org/docs/rules/yoda
    'yoda': [2, 'never'],
    //要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'object-curly-spacing': [2, 'always', { objectsInObjects: false }],
    'vue/jsx-uses-vars': 2
  }
}
