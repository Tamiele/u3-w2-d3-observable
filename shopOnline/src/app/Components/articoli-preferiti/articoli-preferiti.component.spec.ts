import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticoliPreferitiComponent } from './articoli-preferiti.component';

describe('ArticoliPreferitiComponent', () => {
  let component: ArticoliPreferitiComponent;
  let fixture: ComponentFixture<ArticoliPreferitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticoliPreferitiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticoliPreferitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
