import { expect, type Locator, type Page } from '@playwright/test';

export class ReservationPage {
    readonly resultsSection: Locator;
    readonly nightlyRate: Locator;
    readonly rating: Locator;
    readonly filterApply: Locator;
    readonly price: Locator;
    readonly hotel: Locator;
    readonly resultPages: Locator;
    readonly bookItButton: Locator;
    readonly invoicePrinter: Locator;
      
    constructor(page: Page) {
        this.resultsSection = page.locator('#MainContentPlaceHolder_HotelsResultsLabel');
        this.nightlyRate = page.locator('#MainContentPlaceHolder_FilterFormLayout_NightlyRateTrackBar_MD');
        this.rating = page.locator('#MainContentPlaceHolder_FilterFormLayout_CustomerRatingTrackBar_MD')
        this.filterApply = page.locator('#MainContentPlaceHolder_FilterFormLayout_ApplyFilterButton_CD');
        this.price = page.locator('.price');
        this.hotel = page.locator('.dxdvItem_Metropolis');
        this.resultPages = page.locator('.dxp-num');
        this.bookItButton = page.locator('#MainContentPlaceHolder_HotelsDataView_IT0_BookItButton_0_CD');
        this.invoicePrinter = page.locator('#MainContentPlaceHolder_InvoiceButton_CD > span');
     }
        
    async pricesRange (page){
        await this.nightlyRate.click();
        await page.mouse.wheel(0,1);
        return
    }
    
    async starRating (page){
        await this.rating.click();
        await page.mouse.wheel(0,1);
        await this.rating.click();
        await page.mouse.wheel(0,1);
        return
    }
    
    async bestPriceTab() {
        let bestPrice = 200;
        let lastPrice = await this.price.first().innerText();
        let lastPriceN = parseFloat(lastPrice.replace("$", ""));
        let elementPrices = await this.price.all();
        for (const element of elementPrices) {
            const price = await element.innerText();
            const priceN = parseFloat(price.replace("$", ""));
            if (priceN > bestPrice && priceN <= lastPriceN){
                bestPrice = priceN;
                }else{
                bestPrice = lastPriceN;
                }        
        }
        return bestPrice;
    }    

    async tabsIterator (){
        const resultPages = await this.resultPages.all();
        const allPrices: { tab: number; bestPriceTab: number }[] = [];
        for (let i = 0; i < resultPages.length; i++) {
            await resultPages[i].click();
            const bestPriceTab = await this.bestPriceTab();
            allPrices.push({ tab: i, bestPriceTab });
            }
        const bestPricesTab = allPrices.map(object => object.bestPriceTab);
        const MinPrice = Math.min(...bestPricesTab);
        return MinPrice
    }    
  }


