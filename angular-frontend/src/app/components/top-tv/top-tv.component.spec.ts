import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTVComponent } from './top-tv.component';

describe('TopTvComponent', () => {
  let component: TopTVComponent;
  let fixture: ComponentFixture<TopTVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
