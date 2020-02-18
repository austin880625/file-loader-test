# file-loader-test

This is a sample project demonstrating issues stated [here](https://github.com/webpack-contrib/file-loader/issues/336).
The problem happens in [this project](https://github.com/EvanAgee/vuejs-wordpress-theme-starter) when loading SVG/PNG images by assigning `src` attribute in a vue template.

## What's wrong

Clone this project, then

```
npm i
npm run build
```

in `dist/`, the content of `img/tests.svg` will be

```
export default "/wp-content/themes/whatever/dist/fonts/test.svg";
```

instead of actual SVG content.

Since `vue-loader` fill the `src` attribute of `img` tag with the public url returned by `file-loader`, 
the browser will finally fetch the file containing that string and failed to display the image.

## Configuration problem

In the mentioned project, loader configurations in `webpack/loaders/files.js` and `webpack/loaders/fonts.js` may match a same file (`.svg` or `.png` file) to a same loader and cause the issue. But keeping this can help(?) us deal with how webpack generate bundles.
