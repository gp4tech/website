import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AngularFirestore } from "@angular/fire/firestore";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Router } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader
} from "@ngx-translate/core";

import { ArticleComponent } from "./article.component";
import { ArticlesService } from "../articles.service";

const angularFirestoreMock = {
  collection: () => {}
};

describe("ArticleComponent", () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;
  let element: HTMLElement;
  const titleRequiredErrorLocator = "#title-required-error";
  const descriptionRequiredErrorLocator = "#inline-description-error";
  const authorRequiredErrorLocator = "#inline-author-error";
  const imageUrlRequiredErrorLocator = "#inline-image-url-error";
  const contentRequiredErrorLocator = "#inline-content-error";
  const pageUrlLocator = "#page-url";
  const pageUrlRequiredErrorLocator = "#inline-page-url-error";

  class RouterMock {
    navigate() {}
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleComponent],
      imports: [
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })
      ],
      providers: [
        ArticlesService,
        { provide: AngularFirestore, useValue: angularFirestoreMock },
        { provide: Router, useClass: RouterMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should displaye page url opton when custom option is disabled", () => {
    component.articleForm.get("isCustomHTML").setValue(false);
    fixture.detectChanges();
    const pageUrl = element.querySelector(pageUrlLocator);
    expect(pageUrl).toBeDefined();
    component.articleForm.get("url").setValue("");
    component.articleForm.get("url").markAsPristine();
    const pageUrlErrorRequiered = element.querySelector(
      pageUrlRequiredErrorLocator
    );
    expect(pageUrlErrorRequiered).toBeDefined();
  });

  it("should display required messages", () => {
    component.articleForm.get("title").setValue("");
    component.articleForm.get("title").markAsPristine();
    component.articleForm.get("description").setValue("");
    component.articleForm.get("description").markAsPristine();
    component.articleForm.get("author").setValue("");
    component.articleForm.get("author").markAsPristine();
    component.articleForm.get("image").setValue("");
    component.articleForm.get("image").markAsPristine();
    component.articleForm.get("content").setValue("");
    component.articleForm.get("content").markAsPristine();
    const titleMessage = element.querySelector(titleRequiredErrorLocator);
    const descriptionMessage = element.querySelector(
      descriptionRequiredErrorLocator
    );
    const authorMessage = element.querySelector(authorRequiredErrorLocator);
    const image = element.querySelector(imageUrlRequiredErrorLocator);
    const content = element.querySelector(contentRequiredErrorLocator);
    expect(titleMessage).toBeDefined();
    expect(descriptionMessage).toBeDefined();
    expect(authorMessage).toBeDefined();
    expect(image).toBeDefined();
    expect(content).toBeDefined();
  });
});
