import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class ScrollTopService {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
  ) {}

  activateScrollTop() {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe(() => {
        window.scroll(0, 0);
      });
    }
  }
}
