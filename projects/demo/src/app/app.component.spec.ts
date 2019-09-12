import {TestBed} from '@angular/core/testing';
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
        expect(component).toBeTruthy();
    });
});
