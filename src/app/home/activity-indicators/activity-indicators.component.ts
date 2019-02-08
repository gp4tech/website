import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/layout/navbar/language-button/language.service';

@Component({
  selector: 'app-activity-indicators',
  templateUrl: './activity-indicators.component.html',
  styleUrls: ['./activity-indicators.component.scss']
})
export class ActivityIndicatorsComponent implements OnInit {
  activityIndicators: Array<any> = [];

  constructor(private languajeService: LanguageService) {
    this.getActivityIndicators();
    this.languajeService.changeLanguajeObservable.subscribe(() => {
      this.getActivityIndicators();
    });
  }
  getJSON() {
    return this.languajeService.getJsonValue('');
  }

  ngOnInit() {}

  private getActivityIndicators(): void {
    this.languajeService
      .getJsonValue('activity-indicator')
      .subscribe((activityIndicators: Array<any>) => {
        console.log(
          this.activityIndicators,
          [...activityIndicators],
          typeof activityIndicators
        );
        console.log(activityIndicators);
        this.activityIndicators = activityIndicators;
      });
  }
}
