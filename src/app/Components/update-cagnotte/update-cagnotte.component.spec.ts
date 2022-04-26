import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCagnotteComponent } from './update-cagnotte.component';

describe('UpdateCagnotteComponent', () => {
  let component: UpdateCagnotteComponent;
  let fixture: ComponentFixture<UpdateCagnotteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCagnotteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCagnotteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
