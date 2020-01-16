import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AngularFirestore } from "@angular/fire/firestore";
import { HttpClientModule } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { Observable, of } from "rxjs";
import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader
} from "@ngx-translate/core";

import { ArticleViewerComponent } from "./article-viewer.component";
import { ArticlesService } from "../articles.service";

const angularFirestoreMock = {
  collection: () => {}
};

describe("ArticleViewerComponent", () => {
  let component: ArticleViewerComponent;
  let fixture: ComponentFixture<ArticleViewerComponent>;
  let service: ArticlesService;

  const ActivatedRouteMock = {
    params: of({
      id: "12342"
    })
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleViewerComponent],
      imports: [HttpClientModule],
      providers: [
        ArticlesService,
        { provide: AngularFirestore, useValue: angularFirestoreMock },
        { provide: ActivatedRoute, useValue: ActivatedRouteMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleViewerComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(ArticlesService);
  });

  it("should create", () => {
    spyOn(service, "getById").and.returnValue(of({}));
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
