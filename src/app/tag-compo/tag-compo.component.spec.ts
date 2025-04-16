import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagCompoComponent } from './tag-compo.component';

describe('TagCompoComponent', () => {
  let component: TagCompoComponent;
  let fixture: ComponentFixture<TagCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagCompoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
