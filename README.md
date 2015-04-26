# generator-cordovangular

> A [Yeoman](http://yeoman.io) generator that scaffolds an angular and coffeescript based cordova application.

## Getting started
- Make sure you have the following installed:
    - [yo](https://github.com/yeoman/yo): `npm install -g yo`
    - [grunt-cli](https://github.com/gruntjs/grunt): `npm install -g grunt-cli`
    - [cordova-cli](https://github.com/apache/cordova-cli): `npm install -g cordova`

- Install any SDKs you need for developing platform applications:
    - [iOS](https://developer.apple.com/xcode/)
    - [Android](http://developer.android.com/sdk/index.html#ExistingIDE)
    - etc...

- Install the generator: `npm install -g generator-cordovangular`
- Run: `yo cordovangular`

## Usage
Once you have ran `yo cordovangular` and followed the on screen instructions yeoman should now have scaffolded a cordova app for you. This includes a few basic cordova plugins that my template uses, you can check which plugins are installed after scaffolding by running:

`cd CORDOVA && cordova plugins list`

The generator creates a sample webapp based on angular, coffeescript and sass with a few helper files that I have left for personal usage. You can start developing off of my template or just delete the files and start from scratch.

When you build the app (using the instructions in the next section), grunt will automatically export icons and splashcreen in the right sizes for all of cordova's needs.

### Serve to web browser
`grunt serve`

Prepares and serves the application as a local web server at [http://localhost:7000/](http://localhost:7000/), watching for changes then preparing/redeploying the web server. **Attention:** cordova plugins will not be available while using grunt serve, so you will be working with a web version of your app.

### Build project
`grunt build`

Builds current project into the CORDOVA folder and optionally exports icons and splashscreens (you only need to export icons and splashscreens once). Then runs `cordova build`.

### Serve to emulator or attached device (TO BE DONE)
`grunt run`

Builds current project and runs it on emulator/attached device (equivalent to `grunt build && cordova run`)

## Cordova customization
The files that cordova needs in order to compile will be contained in the app/config folder once you have scaffolded the app.
- **config.xml** this is the main configuration file that cordova uses, more information can be found [here](https://cordova.apache.org/docs/en/edge/config_ref_index.md.html#The%20config.xml%20File). **DO NOT** customize the config.xml file contained inside the CORDOVA folder because this will be overwritten once you run `grunt build`
- **android-icon.png** icon that will be used for android apps
- **apple-icon.png** icon that will be used for ios apps (this differentiation exists only because apple icons cannot contain an alpha channel, while android icons may contain one)
- **splash.png** multiplatform splashscreen
- **keystore folder** used when compiling a release version of the cordova app by running  `cordova build --release` from the CORDOVA folder.

## TODO
- Add `grunt keytool` in order to generate the keytool for android
- Add `grunt build:release` in order to generate app release version for android
- Add `grunt run` in order to differentiate `cordova run` and `cordova build`

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)