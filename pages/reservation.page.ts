import { expect, type Locator, type Page } from '@playwright/test';

export class ReservationPage {
    readonly resultsSection: Locator;
//    readonly nightlyRateLabel: Locator;
    readonly nightlyRate: Locator;
//    readonly nightlyRateBar: Locator;
    readonly rating: Locator;
    readonly filterApply: Locator;
    readonly price: Locator;
    readonly hotel: Locator;
    readonly resultPages: Locator;

    readonly bookItButton: Locator;
      
    constructor(page: Page) {
        this.resultsSection = page.locator('#MainContentPlaceHolder_HotelsResultsLabel');
        this.nightlyRate = page.locator('#MainContentPlaceHolder_FilterFormLayout_NightlyRateTrackBar_MD');
        this.rating = page.locator('#MainContentPlaceHolder_FilterFormLayout_CustomerRatingTrackBar_MD')
        this.filterApply = page.locator('#MainContentPlaceHolder_FilterFormLayout_ApplyFilterButton_CD');
        this.price = page.locator('.price');
        this.hotel = page.locator('.dxdvItem_Metropolis');
        this.bookItButton = page.locator('#MainContentPlaceHolder_HotelsDataView_IT0_BookItButton_0_CD > span');
        this.resultPages = page.locator('.dxp-num');
     }
        

    async obtenerPreciosByTab() {
        let bestPrice = 200;
        let lastPrecio = await this.price.first().innerText();
        let lastPrecionNumero = parseFloat(lastPrecio.replace("$", ""));
        let preciosElements = await this.price.all();
        for (const elemento of preciosElements) {
            const precio = await elemento.innerText();
            const precioNumero = parseFloat(precio.replace("$", ""));
            if (precioNumero > bestPrice && precioNumero <= lastPrecionNumero){
                bestPrice = precioNumero;
                }else{
                bestPrice = lastPrecionNumero;
                }        
        }
        return bestPrice;
    }    

    async pasardetab (){
        const resultPages = await this.resultPages.all();
        const resultados: { tab: number; precios: number }[] = []; // Array para almacenar los resultados
        for (let i = 0; i < resultPages.length; i++) {
            await resultPages[i].click();
            const precios = await this.obtenerPreciosByTab();
            resultados.push({ tab: i, precios }); // Almacena los precios junto con el número de pestaña
            }
        const precios = resultados.map(objeto => objeto.precios); // Extraer precios de cada objeto
        const precioMinimo = Math.min(...precios); // Encontrar el precio mínimo
        return precioMinimo
    }    

  }


