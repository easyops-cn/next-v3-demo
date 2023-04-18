import { add, loadBricks } from '@next-core/loader/standalone';
import icons from '@next-bricks/icons/dist/bricks.json';
import basic from '@next-bricks/basic/dist/bricks.json';
import containers from '@next-bricks/containers/dist/bricks.json';
import "./style.css";

// This adds the manifest for the brick packages.
add([icons, basic, containers]);

const app = document.querySelector('#app');

loadBricks(['icons.general-icon', 'basic.general-button', 'containers.general-card']).then(
  () => {
    app.innerHTML = `
      <containers.general-card card-title="Hello">
        <basic.general-button>
          <basic.general-icon lib="antd" icon="branches"></basic.general-icon>
          Click Me
        </basic.general-button>
      </containers.general-card>
    `;

    app.querySelector("basic\\.general-button").addEventListener("click", () => {
      alert("Well done!");
    });
  },
  (e) => {
    // eslint-disable-next-line no-console
    console.error('load bricks failed:', e);
    app.textContent = `Failed to load bricks: ${e}`;
  }
);
