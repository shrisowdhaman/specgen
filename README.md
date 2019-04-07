#specgen
Angular -  Jasmine Unit Testcase Spec file Generator

## How It Works

1. Run - specgen my.component.ts 
2. It write a unit spec testcase file in same folder my.component.spec.ts  
3. If spec file exists with the same file name in the folder it's generates the file name as  
    my.component .spec.YYYMMDDHHMM.ts


## Install & Run
```
$ npm install specgen -g # to run this command anywhere
$ specgen my.component.ts 
$ specgen my.directive.ts 
$ specgen my.pipe.ts 
$ esctspecgenestgen test my.service.ts