import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistfrontComponent } from './todolistfront.component';

describe('TodolistfrontComponent', () => {
  let component: TodolistfrontComponent;
  let fixture: ComponentFixture<TodolistfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistfrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
