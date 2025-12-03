import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emprendimientos } from './emprendimientos';

describe('Emprendimientos', () => {
  let component: Emprendimientos;
  let fixture: ComponentFixture<Emprendimientos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Emprendimientos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Emprendimientos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
