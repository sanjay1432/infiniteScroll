import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusRopeIScrollComponent } from './campus-rope-iscroll.component';

describe('CampusRopeIScrollComponent', () => {
  let component: CampusRopeIScrollComponent;
  let fixture: ComponentFixture<CampusRopeIScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusRopeIScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusRopeIScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
