module.exports = function(dirName) {
  return [
    {
      type: 'input',
      name: 'projectName',
      message: '这个项目叫啥?',
      default() {
        return dirName.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase())
      },
      validate(input) {
        const projectNameReg = new RegExp('^(?:@[a-z0-9-*~][a-z0-9-*._~]*/)?[a-z0-9-~][a-z0-9-._~]*$')
        return projectNameReg.test(input) || '项目名中不能使用大小写,请改用(`-`,`~`,`.`,`_`)中任意一个分隔'
      },
    },
    {
      type: 'confirm',
      name: 'useAntd',
      default: true,
      message: '是否使用antd组件库?',
    },
    {
      type: 'confirm',
      name: 'useImmer',
      default: true,
      message: '是否使用immer优化状态管理?',
    },
    {
      type: 'confirm',
      name: 'useRedux',
      default: true,
      message: '是否使用redux作为全局状态管理?',
    },
    {
      type: 'confirm',
      name: 'private',
      default: false,
      message: '这个项目是私有的嘛?',
    },
    {
      type: 'input',
      name: 'author',
      default: 'cmtlyt',
      message: '作者是谁?',
    },
    {
      type: 'input',
      name: 'authorEmail',
      default: 'cmtlyt@163.com',
      message: '作者的邮箱是啥?',
    },
    {
      type: 'input',
      name: 'description',
      message: '描述一下这个项目呗?',
    },
    {
      type: 'input',
      name: 'license',
      default: 'MIT',
      message: '这个项目是啥协议?',
    }
  ]
}
