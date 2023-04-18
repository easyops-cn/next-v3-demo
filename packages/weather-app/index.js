import { unstable_createRoot } from '@next-core/runtime';
import { safeLoad, JSON_SCHEMA } from 'js-yaml';
import manifest from "./app.yaml";

const container = document.querySelector('#app');
const root = unstable_createRoot(container);

root.render(safeLoad(manifest, { schema: JSON_SCHEMA, json: true }));
