import { unstable_createRoot } from '@next-core/runtime';

const container = document.querySelector('#app');
const root = unstable_createRoot(container);

root.render({
  brick: 'containers.general-card',
  properties: {
    cardTitle: '<% `Hello (Tips: you can use expressions: ${moment().format("LLL")})` %>',
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
