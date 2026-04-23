# mirador-downloaddialog

[![npm package][npm-badge]][npm]
[![required Mirador version][mirador-badge]][mirador]

A Mirador 4 plugin which adds a dialog containing download links to the current canvas image in different sizes, it also renders links defined in the `seeAlso` section of the manifest.

![Screenshot][screenshot]

## Installation

Currently the plugin can only be used if you build your own Mirador JavaScript bundle.
To include the plugin in your Mirador installation, you need to install it
from npm with `npm install mirador-downloaddialog`, import it into your project
and pass it to Mirador when you instantiate the viewer:

```typescript
import Mirador from 'mirador';
import downloadDialogPlugin from 'mirador-downloaddialog';

const miradorConfig = {
  // Your Mirador configuration
};
Mirador.viewer(miradorConfig, [...downloadDialogPlugin]);
```

## Configuration

You can configure the plugin globally for all windows and/or individually for
every window.

For global configuration add the `downloadDialog` entry to the top-level
`window` configuration (globally for all windows) or to the individual window
object:

```typescript
const miradorConfig = {
  window: {
    // ....
    downloadDialog: {
      // Global config for all windows, see available settings below
    },
  },
  windows: [{
    // ....
    downloadDialog: {
      // config for an individual window, see available settings below
    },
  }], // ...
};
```

You can view an example configuration in [src/demo.ts][demo-cfg].

The available settings are:

- `dialogOpen`: If the share dialog is open. Boolean, defaults to `false`.
- `enabled`: If the plugin is enabled. Boolean, defaults to `true`.

## Extending

There are currently two ways, if you want to extend the `DownloadDialog` component.

### With a plugin hook

The plugin has a `PluginHook` that renders another plugin [next to the `CanvasDownloadLinks`][plugin-hook].

### With the rendering of child components

The `DownloadDialog` component renders `children` [next to the `CanvasDownloadLinks`][children].

To extend the plugin in this way, you can proceed as follows:

1. write your own plugin
2. add this plugin as dependency
3. add custom `children`:
   ```tsx
   import { DownloadDialog } from "mirador-downloaddialog";
   // ...
   const MyCustomDownloadDialog = (props) => (
     <DownloadDialog {...props}>
       <MyCustomChildComponent {...props} />
     </DownloadDialog>
   );
   ```
4. add `MyCustomDownloadDialog` and the rest of the components defined by `mirador-downloaddialog` to your own plugins' default export array:
   ```typescript
   const otherComponents = downloadDialogComponents.filter(
     (c) => c.name !== "DownloadDialog"
   );

   export default [
    ...otherComponents,
    {
      component: MyCustomDownloadDialog,
      config: {...},
      mapDispatchToProps: {...},
      mapStateToProps: {...},
      mode: ...,
      name: ...,
      target: ...,
    }
   ];
   ```
   **Note:** be sure to define [the whole config][plugin-cfg] needed by this plugin

## Contributing

Found a bug? The plugin is not working with your manifest? Want a new
feature? Create an issue, or if you want to take a shot at fixing it
yourself, make a fork, create a pull request, we're always open to
contributions :-)

For larger changes/features, it's usually wise to open an issue before
starting the work, so we can discuss if it's a fit.

**Note**: The package requires Node.js `24` and npm >= `11`.

[children]: https://github.com/dbmdz/mirador-downloaddialog/blob/main/src/components/DownloadDialog.tsx#L91
[demo-cfg]: https://github.com/dbmdz/mirador-downloaddialog/blob/main/src/demo.ts
[mirador]: https://github.com/ProjectMirador/mirador/releases/tag/v4.0.0
[mirador-badge]: https://img.shields.io/badge/Mirador-4.x-blueviolet
[npm]: https://www.npmjs.org/package/mirador-downloaddialog
[npm-badge]: https://img.shields.io/npm/v/mirador-downloaddialog.png?style=flat-square
[plugin-cfg]: https://github.com/dbmdz/mirador-downloaddialog/blob/main/src/index.ts#L39
[plugin-hook]: https://github.com/dbmdz/mirador-downloaddialog/blob/main/src/components/DownloadDialog.tsx#L90
[screenshot]: .docassets/screenshot.png
