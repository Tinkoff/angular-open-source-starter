import {TestBed} from '@angular/core/testing';
import {Router} from '@angular/router';
import {AppBrowserModule} from './app.browser.module';
import {AppComponent} from './app.component';

describe('Test dummy', () => {
    let component: AppComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppBrowserModule],
        });

        component = TestBed.createComponent(AppComponent);
    });

    it('AppComponent compiles properly', () => {
        TestBed.inject(Router).navigate(['/lazy']);

        expect(component).toBeTruthy();
    });
});
