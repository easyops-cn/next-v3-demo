import { unstable_createRoot } from '@next-core/runtime';
import './style.css';

const div = document.createElement('div');
document.body.append(div);

const root = unstable_createRoot(div);

root.render([
  {
    brick: 'containers.general-card',
    properties: {
      cardTitle: 'Hello',
    },
    children: [
      {
        brick: 'containers.grid-layout',
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
      },
    ],
  },
]);
