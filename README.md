# Sleep and Breathing website
Website for the Sleep and Breathing Conference 2018

* It will integrate with Cloud CMS for the content and menus will be managed from there too.

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# Production procedure
1. Commit and push code to github

## Connect to Infomaniak and setup the environment
2. `ssh` to Infomaniak
3. run the command: `source .bashrc`
4. run the command: `nvm use stable` (Should output: `Now using node v8.9.0 (npm v5.5.1)`)
5. go to the Sleep and Breathing folder: `cd sleepandbreathing`

## Deploy new code
6. Pull changes from github master: `git pull origin master`
7. Build website: `npm run build`
8. Check that everything works ;)

