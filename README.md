# Demo for Brick Next v3

- [Bricks only](#bricks-only): [live demo](https://easyops-cn.github.io/next-v3-demo/bricks-only/), [source code](packages/bricks-only).
- [Render only](#render-only): [live demo](https://easyops-cn.github.io/next-v3-demo/render-only/), [source code](packages/render-only).
- [Weather app](#weather-app): [live demo](https://easyops-cn.github.io/next-v3-demo/weather-app/), [source code](packages/weather-app).

## Bricks Only

You can use our bricks in any of your web projects, because bricks are just [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)! See the [live demo](https://easyops-cn.github.io/next-v3-demo/bricks-only/), and its [source code](packages/bricks-only).

First, install our loader package and webpack plugin package:

```bash
npm install --save @next-core/loader
npm install --save-dev @next-core/webpack
```

Then, install brick packages you want:

```bash
npm install --save @next-bricks/icons @next-bricks/basic @next-bricks/containers
```

Configure the plugin in your webpack:

```js
const { BricksPlugin } = require('@next-core/webpack');

module.exports = {
  plugins: [
    new BricksPlugin({
      brickPackages: [
        '@next-bricks/icons',
        '@next-bricks/basic',
        '@next-bricks/containers',
      ],
    }),
  ],
};
```

At last, load bricks in your application:

```js
import { add, loadBricks } from '@next-core/loader/standalone';
import icons from '@next-bricks/icons/dist/bricks.json';
import basic from '@next-bricks/basic/dist/bricks.json';
import containers from '@next-bricks/containers/dist/bricks.json';

// This adds the manifest for the brick packages.
add([icons, basic, containers]);

loadBricks([
  'icons.general-icon',
  'basic.general-button',
  'containers.general-card',
]).then(() => {
  // Compose your application with these bricks (Web Components).
})
```

## Render Only

Additionally, you can render part of your UI by [Brick Next](https://github.com/easyops-cn/next-core) as a low-code rendering engine, which is built on bricks (Web Components). See the [live demo](https://easyops-cn.github.io/next-v3-demo/render-only/), and its [source code](packages/render-only).


First, install our runtime package and webpack plugin package:

```bash
npm install --save @next-core/runtime
npm install --save-dev @next-core/webpack
```

Then, install brick packages you want:

```bash
npm install --save @next-bricks/icons @next-bricks/basic @next-bricks/containers @next-bricks/shoelace
```

Configure the plugin in your webpack:

```js
const { RuntimePlugin } = require('@next-core/webpack');

module.exports = {
  plugins: [
    new RuntimePlugin({
      brickPackages: [
        '@next-bricks/icons',
        '@next-bricks/basic',
        '@next-bricks/containers',
        '@next-bricks/shoelace',
      ],
    }),
  ],
};
```

At last, compose your application:

```js
import { unstable_createRoot } from '@next-core/runtime';

const container = document.querySelector('#app');
const root = unstable_createRoot(container);

root.render({
  brick: 'containers.general-card',
  properties: {
    cardTitle: 'Hello',
  },
  children: [
    {
      brick: 'basic.general-button',
      properties: {
        textContent: 'Click Me',
      },
      events: {
        click: {
          useProvider: 'shoelace.show-notification',
          args: [
            {
              type: 'success',
              message: 'Well done!',
            },
          ],
        },
      },
    },
  ],
});
```

## Weather App

See the [live demo](https://easyops-cn.github.io/next-v3-demo/weather-app/), and its [source code](packages/weather-app).

This demo uses YAML to describe the app, which is more readable for human, than json or js.
