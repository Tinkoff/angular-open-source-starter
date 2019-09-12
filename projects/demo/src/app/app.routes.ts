import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StaticComponent} from './modules/static/static.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: StaticComponent
    },
    {
        path: 'lazy',
        loadChildren: './modules/lazy/lazy.module#LazyModule',
    },
    {
        path: '**',
        redirectTo: '',
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            initialNavigation: 'enabled',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
