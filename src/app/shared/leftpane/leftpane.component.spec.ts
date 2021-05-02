import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftpaneComponent } from './leftpane.component';

describe('LeftpaneComponent', () => {
  let component: LeftpaneComponent;
  let fixture: ComponentFixture<LeftpaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [  ],
      declarations: [ 
        LeftpaneComponent ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftpaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should callToggle()', () => {
    component.callToggle();
    expect(component.callToggle).toBeTruthy();
  });
});
