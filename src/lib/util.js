const fs = require('fs');
const path = require('path'); 

// Get the filename based on @ atarting of file
function getAngularType(typescript) {
  return typescript.match(/^@Component\(/m) ? 'Component': 
    typescript.match(/^@Directive\(/m) ? 'Directive': 
    typescript.match(/^@Injectable\(/m) ? 'Injectable': 
    typescript.match(/^@Pipe\(/m) ? 'Pipe':  undefined;
}

// Get the ejb file template
function getEjsTemplate(type) {
  let ejsFile; 
  switch(type) {
    case 'Component':
    case 'Directive':
    case 'Pipe':
    case 'Injectable':
      const typeLower = type.toLowerCase();
      ejsFile = path.join(__dirname, '../', 'templates', `${typeLower}.spec.ts.ejs`);
      break;
    default:
      ejsFile = path.join(__dirname, '../', 'templates', `default.spec.ts.ejs`);
      break;
  }

  return fs.readFileSync(ejsFile, 'utf8');
}

// import all the files in the converted file
function getImportLib(mports, className) {
  let lib;
  mports.forEach(mport => {
    if (mport.specifiers) {
      mport.specifiers.forEach(el => { // e.g. 'Inject', 'Inject as foo'
        if (el.indexOf(className) !== -1) {
          lib = mport.from; // e.g. '@angular/core'
        }
      });
    } else {
      lib = mport.from;
    }
  });

  return lib;
}

function reIndent(str, prefix="") {
  let toRepl = str.match(/^\n\s+/)[0];
  let regExp = new RegExp(toRepl, 'gm');
  return str.replace(regExp, "\n" + prefix);
}

function createBackupFile(filePath, generated) {
  const ext = (new Date()).toISOString().replace(/[^\d]/g,'');
  let fileName = filePath.replace('spec.ts',+ext+'.spec.ts');
  fs.writeFileSync(`${fileName}`, generated, 'utf8'); 
  console.log('Generated unit test for', filePath, 'to', fileName);  
}

module.exports = {
  getAngularType,
  getEjsTemplate,
  getImportLib,
  reIndent,
  createBackupFile
};
