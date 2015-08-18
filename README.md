# com.christiangrete.libs.scss

> The SCSS Library for [christiangrete.com](https://christiangrete.com)


## Getting started

### Installation
Install this library as a dependency to your project using [Bower](http://bower.io):
```sh
$ bower install --save-dev com.christiangrete.libs.scss
```
Alternatively, this library is also available using [npm](https://www.npmjs.org):
```sh
$ npm install --save-dev com.christiangrete.libs.scss
```

### Usage
In case of using Bower, this library is installed as a subfolder to your Bower components directory, that defaults to `bower_components`. All you need to do is importing the `library.scss` file that is located topmost in the before mentioned subfolder:
```css
@import 'bower_components/com.christiangrete.libs.scss/dist/library';
```
Otherwise, when using npm, it is installed as a subfolder to your Node.js modules directory, called `node_modules`. In this case, you need to import the `library.scss` file that is located topmost in the following subfolder:
```css
@import 'node_modules/com.christiangrete.libs.scss/dist/library';
```
After that, the library with all its configurations, functions and mixins is available and ready to be used in your stylesheet.


## Development

### Installation
The following _global_ tools are needed if you do not already have them:
- [Node.js](http://nodejs.org/download) (JavaScript runtime environment)
    - Required by npm, Bower and Grunt (see below)
- [npm](https://www.npmjs.org) (Package manager for Node.js)
    - Will be installed with Node.js by default
    - Used to _locally_ install development dependencies (as described later)
- [Git](http://git-scm.com/download) (Version control system)
    - Used for versioning and loading dependencies
- [Grunt](http://gruntjs.com/getting-started)
    - Used for task running and build processes
    - Needs to be _globally_ installed via `npm` as shown below:
```sh
$ npm install -g grunt-cli
```
- [Bower](http://bower.io/#install-bower) (Front end component and package manager)
    - Used to _locally_ install components and dependencies (as described later)
    - Needs to be _globally_ installed via `npm` as shown below:
```sh
$ npm install -g bower
```

__Make sure that all required tools are installed__, then clone this repository onto your machine:
```sh
$ cd /your/desired/directory # Navigate into the folder of your choice, then:
$ git clone git@github.com:ChristianGrete/com.christiangrete.libs.scss.git
$ cd com.christiangrete.libs.scss # Navigate into the project folder
```

__After navigating into the project directory__, execute the installer script:
```sh
$ sh bin/install.sh # Installs all local dependencies & components
```

### Automation
The following `grunt` tasks are available:
```sh
$ grunt # Runs the “default” task, see below
$ grunt default # The default task — validates the manifest JSON files
$ grunt compile # Compiles the “src/sass” directory for testing purposes
$ grunt uncompile # Deletes the compiled “debug” directory
$ grunt serve # Runs SassDoc, starts a web server with LiveReload
$ grunt build # Generates an artifact for testing purposes
$ grunt unbuild # Deletes the generated “build” directory
$ grunt build --release # Generates an artifact for distribution
```


## License

[MIT](http://opensource.org/licenses/MIT) © [Christian Grete](https://christiangrete.com)
- [GitHub](https://github.com/ChristianGrete)
- [npm](https://www.npmjs.com/~christiangrete)
- [Twitter](https://twitter.com/ChristianGrete)
- [XING](https://www.xing.com/profile/Christian_Grete2)