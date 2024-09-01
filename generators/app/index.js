import Generator from 'yeoman-generator';

export default class extends Generator {
  initializing() {
    this.argument('name', { type: String, required: false });


    this.option('db', {
      description: 'Nome da tabela no banco de dados',
      type: String,
      alias: 'b',
      default: 'defaultDB'
    });

  }
  prompting() {
    const { name, bd } = this.options;
    const prompts = [];
    if(!name || name.length === 0)
      prompts.push({
        type: 'input',
        name: 'name',
        message: 'Nome da pasta:',
        default: this.appname
      });
    if(!bd || bd.length === 0)
      prompts.push({
        type: 'input',
        name: 'bd',
        message: 'Nome da tabela no banco de dados:',
        default: 'defaultDB'
      });
    return this.prompt(prompts).then((answers) => { 
      this.name = name || answers.name;
      this.dbName = bd || answers.bd; 
      this.className = this._camelCase(this.name);
      this.instanceName = this.className.charAt(0).toLowerCase() + this.className.slice(1);
    });   
  }
  _capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  _camelCase(string) {
    return string.split('-').map((section, index) => {
      return this._capitalize(section);
    }).join('');
  }
  writing() { 
    const { name, className, instanceName, dbName } = this; 
    const variables = { name, className, instanceName, dbName };

    const files = [
      'controller.ts',
      'service.ts',
      'dto.ts',
      'validation.ts',
      'entity.ts',
      'index.ts',
      'route.ts'
    ];

    files.forEach(file => {
      const fileName = file === 'index.ts' ? file : `${name}.${file}`;
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(`${name}/${fileName}`),
        variables
      );
    }); 
  }
};
