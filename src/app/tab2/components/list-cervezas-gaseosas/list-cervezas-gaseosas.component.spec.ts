import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListCervezasGaseosasComponent } from './list-cervezas-gaseosas.component';

describe('ListCervezasGaseosasComponent', () => {
  let component: ListCervezasGaseosasComponent;
  let fixture: ComponentFixture<ListCervezasGaseosasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCervezasGaseosasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListCervezasGaseosasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
