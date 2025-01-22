const { relative } = require('path');
const fs = require('fs');
/**
 * componentsToImport
 * [{
 *   "path": "src/app/components/my-component/my-component.component",
 *   "importName": "MyComponent",
 *   "selector": "app-my-component",
 * }]
 *
 */
function component(name, className, directory, componentsToImport) {
  const fileName = `src/app/${directory}/${name}.component.ts`;
  const templateName = `./${name}.component.html`;
  const fullTemplateName = `src/app/${directory}/${name}.component.html`;
  let templateContents = `<p>Hello ${name}!</p>`;
  let contents = `import { Component } from '@angular/core';\n`;
  let componentImports = componentsToImport.length > 0 ? 'imports: [' : '';
  for (const componentToImport of componentsToImport) {
    const {path, importName, selector} = componentToImport;
    const relativePath = `../${path}`;
    const importStatement = `import { ${importName} } from '${relativePath}';`;
    templateContents += `<${selector}></${selector}>\n`;
    contents += `${importStatement}\n`;
    componentImports += `${importName},\n`;
  }
  componentImports += componentsToImport.length > 0 ? '],' :'';
  contents += `\n@Component({
    ${componentImports}
    selector: 'app-${name}',
    templateUrl: '${templateName}',
    styles: []
  })
  export class ${className}Component {}`;
  fs.mkdirSync(`src/app/${directory}`, { recursive: true });
  fs.writeFileSync(fullTemplateName, templateContents);
  fs.writeFileSync(fileName, contents);
}

function generateComponents() {
  for(let j = 20; j > 0; j--) {
    let directoryName = `level${j}`;
    let directoryClassName = `Level${j}`

    const componentsToImport = [];
    for (let i = 0; i < 1500; i++) {
      const componentName = `${directoryName}-component${i}`;
      const componentClassName = `${directoryClassName}Component${i}`;
      const importPath = `${directoryName}/${componentName}.component`;

      component(componentName, componentClassName, directoryName, []);

      componentsToImport.push({
        path: importPath,
        importName: `${componentClassName}Component`,
        selector: `app-${componentName}`
      })
    }
    const componentName = `${directoryName}-component${1501}`;
      const componentClassName = `${directoryClassName}Component${1501}`;

      component(componentName, componentClassName, directoryName, componentsToImport);
  }
}

generateComponents();
