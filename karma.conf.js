"use strict";

module.exports = function(karma) {
  karma.set({

    frameworks: [ "jasmine", "browserify", "chai", "fixture" ],

    files: [
      { pattern: "test/**/*.js", watched: false, included: true, served: true },
      { pattern: "test/fixtures/**/*.html" }
    ],

    reporters: [ "dots" ],

    preprocessors: {
      "test/**/*.js": "browserify",
      "test/fixtures/**/*.html": "html2js"
    },

    browserify: {
      debug: true,
      paths: ["src", "test/spec"],
      transform: [
        ["babelify", {
            presets: ["es2015"],
            sourceRoot: "../../src"
        }]
      ]
    },

    browsers: [ "PhantomJS", "Chrome" ],

    singleRun: false,
    autoWatch: true
  });
};
