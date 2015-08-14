# com.christiangrete.libs.scss

> The SCSS Library for [christiangrete.com](https://christiangrete.com)

## Development

### Installation
Following _global_ tools are needed if you do not already have them:

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
$ cd /my/desired/directory # Navigate into the folder of your choice, then:
$ git clone git@github.com:ChristianGrete/com.christiangrete.libs.scss.git
$ cd com.christiangrete.libs.scss # Navigate into the project folder
```

__After navigating into the project directory__, execute the installer script:
```sh
$ sh bin/install.sh # Installs all local dependencies & components
```