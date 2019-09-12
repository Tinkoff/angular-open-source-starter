import {appRoutes} from './src/app/app.routes';

export const PRERENDERED_ROUTES: ReadonlyArray<string> = appRoutes
    .map(route => route.path || '')
    .filter(path => path && path !== '**');
