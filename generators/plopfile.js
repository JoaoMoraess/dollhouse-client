module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/index.tsx',
        templateFile: 'templates/component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'append',
        separator: '',
        path: '../src/components/index.ts',
        template: `export * from './{{dashCase name}}'
`
      }
    ]
  })
}
