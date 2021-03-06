Frontend-Test
=============
Basic project testing frontend skills

Resources
=========
Folder/File  | Content
--------|---------------------
 assets | source files need for grunt configuration
 build  | gradle build folder 
 grunt | Task specific configuration files, used by load-grunt-config plugin. Those files are read automatically and are used to configure the grunt plugins.
 node_modules | Generated by the npm module, but cecked in for ease and convenience   
 src | code base self
 package.json |  The file 'package.json' defines all required npm libraries. Those modules are already installed.
 bower.json | The file 'bower.json' defines all required bower components. Bower downloads all components from github. If you are behind a firewall/proxy the git port 9418 might be blocked. A BowerInstall kcan be triggered by `grunt bowercopy`


Build-Tools
===========

Requirements
------------

 - ruby >= 1.9.2
 - ruby gem: scss-lint (install it like: 'sudo gem install scss-lint')
 - ruby gem: sass (install it like: 'sudo gem install sass')
 
General
-------
The frontend build tools does **not** require any preparation of the operating system (installing software like grunt, bower, npm/node...),
as the required frontend tools/libs for building this project are downloaded and installed locally in the project directory.



Executing grunt tasks
---------------------

Grunt tasks are defined in Gruntfile.js

Full list of available **grunt tasks**:

```
$  grunt availabletasks
```

To build the project including the local installation of the needed bower dependencies **for the first time**, it's recommended to trigger a default build
```
$  grunt
```

To start the local server for development just run
```
$  grunt server
```
A browser window should open with the start file open. Take care: the working directory is `src/main/webapp` but the delivered directory is `build/inplaceWebapp`. Any change in one of the src-files should trigger a reload. 
