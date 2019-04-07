#specgen
Angular -  Jasmine Unit Testcase Spec file Generator

This npm module helps to generate skeleton and basic coverage of unit test cases as spec file. Its saves development time spent in writing the angular unit test cases. 


## Install

$ npm install -g specgen # to run this command anywhere

## Run

$ specgen my.component.ts 
$ specgen my.directive.ts 
$ specgen my.pipe.ts 
$ specgen my.service.ts

## How It Works

1. Run - specgen my.component.ts 
2. It generates spec file in same folder with the naming convention 'my.component.spec.ts' for the first time
3. If spec file already generated with the same file name then the updated spec file generated with the timestamp appended to it as  
    my.component.spec.YYYMMDDHHMM.ts

