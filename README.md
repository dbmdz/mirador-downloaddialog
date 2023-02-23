# mirador-downloaddialog

[![npm package][npm-badge]][npm]
[![required Mirador version][mirador-badge]][mirador]

A Mirador 3 plugin which adds a dialog containing download links to the current canvas image in different sizes, it also renders links defined in the `seeAlso` section of the manifest.

![Screenshot][screenshot]

## Installation

Currently the plugin can only be used if you build your own Mirador JavaScript bundle.
To include the plugin in your Mirador installation, you need to install it
from npm with `npm install mirador-downloaddialog`, import it into your project
and pass it to Mirador when you instantiate the viewer:

```javascript
import Mirador from 'mirador/dist/es/src/index';
import downloadDialogPlugin from 'mirador-downloaddialog/es';

const miradorConfig = {
  // Your Mirador configuration
}
Mirador.viewer(config, [...downloadDialogPlugin]);
```

## Configuration

You can configure the plugin globally for all windows and/or individually for
every window.

For global configuration add the `downloadDialog` entry to the top-level
`window` configuration (globally for all windows) or to the individual window
object:

```javascript
const miradorConfig = {
  window: {
    // ....
    downloadDialog: {
      // Global options for all windows, see available settings below
    },
  },
  windows: [{
    // ....
    downloadDialog: {
      // Options for an individual window, see available settings below
    },
  }, // ...
}
```

You can view an example configuration in [demo/src/index.js][demo-cfg].

The available configuration options are:

- `dialogOpen`: If the share dialog is open. Boolean, defaults to `false`.
- `enabled`: If the plugin is enabled. Boolean, defaults to `true`.

## Contributing

Found a bug? The plugin is not working with your manifest? Want a new
feature? Create an issue, or if you want to take a shot at fixing it
yourself, make a fork, create a pull request, we're always open to
contributions :-)

For larger changes/features, it's usually wise to open an issue before
starting the work, so we can discuss if it's a fit.

**Note**: The package requires Node.js `16` and npm in major version `8`.

[demo-cfg]: https://github.com/dbmdz/mirador-downloaddialog/blob/main/demo/src/index.js#L5-L35
[mirador]: https://github.com/ProjectMirador/mirador/releases/tag/v3.3.0
[mirador-badge]: https://img.shields.io/badge/Mirador-%E2%89%A53.3.0-blueviolet
[npm]: https://www.npmjs.org/package/mirador-downloaddialog
[npm-badge]: https://img.shields.io/npm/v/mirador-downloaddialog.png?style=flat-square
[screenshot]: .docassets/screenshot.png
