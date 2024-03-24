import { type Locator, type Page } from '@playwright/test';

export class ReservationPage {
    readonly resultsSection: Locator;
    readonly nightlyRate: Locator;
      
    constructor(page: Page) {
        this.resultsSection = page.locator('#MainContentPlaceHolder_HotelsResultsLabel');
        this.nightlyRate = page.locator('#NightyRateTrackBarLabel_R');
     }

  }