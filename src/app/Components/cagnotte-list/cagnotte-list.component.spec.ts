import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CagnotteListComponent } from './cagnotte-list.component';

describe('CagnotteListComponent', () => {
  let component: CagnotteListComponent;
  let fixture: ComponentFixture<CagnotteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CagnotteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CagnotteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
