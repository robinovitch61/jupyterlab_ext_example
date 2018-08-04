import {
  Widget
} from '@phosphor/widgets';

import {
  ICommandPalette
} from '@jupyterlab/apputils';

import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the xkcd_example extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'xkcd_example',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterLab, palette: ICommandPalette) => {
    console.log('JupyterLab extension jupyterlab_xkcd is activated!');
    console.log('ICommandPalette:', palette);
  }
};

export default extension;
