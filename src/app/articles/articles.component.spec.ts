import { ComponentFixture, TestBed } from '@angular/core/testing';

// @ts-ignore
import { Articles } from './articles.component';

describe('ArticlesComponent', () => {
  let component: Articles;
  let fixture: ComponentFixture<Articles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Articles ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Articles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
