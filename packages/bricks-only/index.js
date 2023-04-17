import { add, loadBricks } from '@next-core/loader/standalone';
import icons from '@next-bricks/icons/dist/bricks.json';
import basic from '@next-bricks/basic/dist/bricks.json';
import containers from '@next-bricks/containers/dist/bricks.json';
import shoelace from '@next-bricks/shoelace/dist/bricks.json';

add([icons, basic, containers, shoelace]);

loadBricks(['icons.general-icon', 'basic.general-button', 'sl-alert']).then(
  () => {
    const div = document.createElement('div');

    div.innerHTML = `
    <basic.general-button>
      Click Me
    </basic.general-button>
    <icons.general-icon lib="antd" icon="branches"></icons.general-icon>
    <sl-alert open closable>This is an alert!</sl-alert>
    `;

    document.body.append(div);
  },
  (e) => {
    // eslint-disable-next-line no-console
    console.error('load bricks failed:', e);
  }
);
