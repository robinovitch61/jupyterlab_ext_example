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
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension xkcd_example is activated!');
  }
};

export default extension;
