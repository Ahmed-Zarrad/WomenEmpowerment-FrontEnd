import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCagnotteComponent } from './create-cagnotte.component';

describe('CreateCagnotteComponent', () => {
  let component: CreateCagnotteComponent;
  let fixture: ComponentFixture<CreateCagnotteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCagnotteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCagnotteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
