// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
   // "off"或者0    关闭规则关闭
   // "warn"或者1    在打开的规则作为警告（不影响退出代码）
   // "error"或者2    把规则作为一个错误（退出代码触发时为1）
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': 0, //可以给参数重新赋值
    'consistent-return': 0, //箭头函数不必须return
    'no-unused-expressions': 0, //允许短路和三目运算符
    'comma-dangle': 0, //最后一行不要逗号
    'import/first': 0, //Absolute imports should come before relative imports.
    'import/no-extraneous-dependencies': 0, //毛和春
    'import/extensions': 0, //毛和春
    'import/no-unresolved': 0, //
    'no-plusplus': 0, //允许使用++或--运算符
    // "linebreak-style": [0 ,"error", "windows"],//换行符问题
    'max-len': 0, //每行最大长度关闭
    'global-require': 0, //不要求 require() 出现在顶层模块作用域中
    'no-restricted-syntax': 0, //如果不希望限制代码使用任何JavaScript特性或语法，则不应使用此规则。(for语句报错)
    'import/prefer-default-export': 0, //首选默认出口。（进口/优先出口）
    "no-underscore-dangle": 0, // 禁止标识符中有悬空下滑线（关闭）
    'func-names': 0, // 强制使用命名的 function 表达式
    'prefer-destructuring': 0, //强制使用结构赋值
    'no-shadow': 0,
    'no-unused-vars': 0,
    'no-restricted-globals': 0, //禁用特定的全局变量
    'no-bitwise': 0, //禁用位运算符
    'no-empty': 0, //不允许使用空块语句
    'no-lonely-if': 0,
    'default-case': 0,
    'radix': 0,
    'array-callback-return': 0,
    'linebreak-style': 0
  }
}
