The Lost Mythologies Official Website
===

[![Build Status](https://travis-ci.org/elct9620/TLM-Website.svg?branch=master)](https://travis-ci.org/elct9620/TLM-Website)

Ming Chung University Digital Media Design 12th Game Major Graduate Project.

Setup
---

Create a `.env` file and fill Parse.com information like below:

```
PARSE_APP_NAME=(Your Parse Application Name)
PARSE_APP_ID=(Your Parse Application ID)
PARSE_MASTER_KEY=(Your Parse Application Master Key)
```

Now, run `npm install && git submodule update` to setup development environment.

> `gulp-sass@1.3.3` use `node-sass@2.0.1` and only work on some node/iojs version (due to precompiled config), this project build under iojs-v1.2.0

Usage
---

* `gulp` - Alias to `watch`
* `gulp watch` - Run browser-sync to watch project and livereload.
* `gulp bundle` - Bundle project to `bundle` directory.
* `gulp clean` - Clean all generated files.
* `gulp js` - Build JavaScript ( `js:bundle` to minify and remove sourcemaps )
* `gulp sass` - Compild Sass/Scss file to CSS ( `css:bundle` to minify and remove sourcempas )
* `gulp images` - Optmimze images.
* `gulp bower:bundle` - Copy bower files for deploy ( Enable bower need to modify `gulp/config.js` )

### Parse Related Task

* `gulp parse:config` - Setup config from `.env` file.
* `gulp parse:prepare` - Generate a parse deploy ready directory.
* `gulp parse:deploy` - Deploy website to gulp hosting.
