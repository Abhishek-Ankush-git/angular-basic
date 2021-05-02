import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '../shared.module';
import { AppLoaderComponent } from './loader.component';
import { LoaderService } from './service/loader.service';

describe('LoaderComponent', () => {
  let component: AppLoaderComponent;
  let fixture: ComponentFixture<AppLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [],
      providers: [ LoaderService ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLoaderComponent);
    component = fixture.componentInstance;
    new LoaderService().showBlockLoader();
    fixture.detectChanges();
  });

  it('should not be visible by default', () => {
    // Arrange
    const element = fixture.nativeElement;
    const div = element.querySelectorAll('dls-layout-container')[0];

    // Assert
    expect(div).toBeUndefined();
    // expect(div.getAttribute('*ngIf')).not.toBeNull();
  });
  /* it('should be visible', () => {
    // Arrange
    const element = fixture.nativeElement;
    const div = element.querySelectorAll('dls-layout-container')[0];

    // Assert
    expect(div).toBeDefined();
    //expect(div.getAttribute('*ngIf')).not.toBeNull();
  });*/

  /* it('should be visible when app is loading', () => {
    // Arrange
    const element = fixture.nativeElement;
    const div = element.querySelectorAll('div')[0];

    // Act
    new LoaderService().show();
    fixture.componentInstance.isLoading = new LoaderService().isAppLoading;
    console.log('loader: ', fixture.componentInstance.isLoading);
    fixture.detectChanges();

    // Assert
    expect(div.getAttribute('hidden')).toBeNull();
  });

  it('should not display a message by default', () => {
    // Arrange
    const element = fixture.nativeElement;
    const span = element.querySelectorAll('span')[0];

    // Assert
    expect(span.textContent).toBe('');
  });

  it('should display specified message', () => {
    // Arrange
    const element = fixture.nativeElement;
    const span = element.querySelectorAll('span')[0];

    // Act
    fixture.componentInstance.message = 'testing';
    fixture.detectChanges();

    // Assert
    expect(span.textContent).toBe('testing');
  });*/
});
