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
        path: '../src/application/components/{{dashCase name}}/index.tsx',
        templateFile: 'templates/component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/application/components/{{dashCase name}}/stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/application/components/{{dashCase name}}/test.spec.tsx',
        templateFile: 'templates/test.spec.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/main/factories/components/{{dashCase name}}.tsx',
        templateFile: 'templates/factorie.tsx.hbs'
      }
    ]
  })
}
