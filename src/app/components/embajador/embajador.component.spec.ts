import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbajadorComponent } from './embajador.component';

describe('EmbajadorComponent', () => {
  let component: EmbajadorComponent;
  let fixture: ComponentFixture<EmbajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbajadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
