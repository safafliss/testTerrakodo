import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtodolistComponent } from './addtodolist.component';

describe('AddtodolistComponent', () => {
  let component: AddtodolistComponent;
  let fixture: ComponentFixture<AddtodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtodolistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
