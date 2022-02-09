import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CervezasygaseosasPage } from './cervezasygaseosas.page';

describe('CervezasygaseosasPage', () => {
  let component: CervezasygaseosasPage;
  let fixture: ComponentFixture<CervezasygaseosasPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CervezasygaseosasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CervezasygaseosasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
