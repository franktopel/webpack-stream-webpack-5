# Update: The mistake was on my side. 
## The only imported component accidentally had no code in it, so webpack 5 even produces the better result. As there is no code to really execute, it correctly produces an empty bundle.

# webpack-stream-webpack-5
Small reproducer showcasing a problem using [webpack 5](https://github.com/webpack/webpack) in [webpack-stream](https://github.com/shama/webpack-stream)

## Explainer

`webpack-stream` is a wrapper around webpack to be used in gulp streams. 
According to its readme, you can use a different version of webpack than the 4.x that comes with it, 
by simply specifying that webpack reference as a second argument:

    .pipe(webpackStream({}, webpack))

Unfortunately, switching the version in that manner does create empty output files.

## Steps to reproduce

1. Clone this repository `git clone https://github.com/franktopel/webpack-stream-webpack-5.git`
2. `cd webpack-stream-webpack-5`
3. `npm install`
4. `npm run build`

The last command runs both webpack-stream without any modifications, and webpack-stream with webpack 5 specified as 2nd parameter.

## Expected behaviour

gulp creates a `dist` folder containing two files:

1. `bundle.webpack-stream-only.js`
2. `bundle.webpack-stream-webpack-5.js`

**Both files contain the expected output.**

## Observed behaviour

gulp creates a `dist` folder containing two files:

1. `bundle.webpack-stream-only.js`
2. `bundle.webpack-stream-webpack-5.js`

**`bundle.webpack-stream-webpack-5.js` is empty.**-
