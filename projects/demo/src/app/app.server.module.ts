import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';
import {AppBrowserModule} from './app.browser.module';
import {AppComponent} from './app.component';

@NgModule({
    imports: [AppBrowserModule, ServerModule],
    bootstrap: [AppComponent],
})
export class AppServerModule {}
