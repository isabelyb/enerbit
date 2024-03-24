import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main.page';
import { ReservationPage } from '../pages/reservation.page';
import dotenv from 'dotenv';
dotenv.config();

const locationData = process.env.LOCATION || '';
const checkInData = process.env.CHECKIN || '';
const checkOutData = process.env.CHECKOUT || '';
const roomsData = process.env.ROOMS || '';
const adultsData = process.env.ADULTS || '';
const childrenData = process.env.CHILDREN || '';

test.describe('Reservation Feature', () => {

    test('Make a reservation', async ({ page }) => {
        const mainPage = new MainPage(page);
        const reservationPage = new ReservationPage(page);

        await mainPage.goto();
        await mainPage.searchSection.isVisible();
        await mainPage.location.click();
        await mainPage.location.fill(locationData);
        await mainPage.checkIn.fill(await mainPage.getReservationDate(parseInt(checkInData)));
        await mainPage.checkOut.fill(await mainPage.getReservationDate(parseInt(checkOutData)));
        await mainPage.rooms.fill(roomsData);
        await mainPage.adults.fill(adultsData);
        await mainPage.children.fill(childrenData);
        await mainPage.searchButton.click();
        await expect(reservationPage.resultsSection).toBeVisible()
    })
});



//   await page.getByRole('cell', { name: 'Hamburg', exact: true }).click();
//   await page.getByLabel('Check in').click();
//   await page.locator('#MainContentPlaceHolder_SearchPanel_SearchPanelLayout_CheckInDateEdit_B-1').click();
//   await page.locator('#MainContentPlaceHolder_SearchPanel_SearchPanelLayout_CheckInDateEdit_DDD_C_mc_0x0_35').click();
//   await page.locator('#MainContentPlaceHolder_SearchPanel_SearchPanelLayout_CheckOutDateEdit_B-1Img').click();
//   await page.locator('#MainContentPlaceHolder_SearchPanel_SearchPanelLayout_CheckOutDateEdit_DDD_C_mc_0x0_40').click();
//   await page.locator('#MainContentPlaceHolder_SearchPanel_SearchPanelLayout_RoomsComboBox_B-1Img').click();
//   await page.getByRole('cell', { name: '3', exact: true }).click();
//   await page.locator('#MainContentPlaceHolder_SearchPanel_SearchPanelLayout_AdultsSpinEdit_B-4').click();
//   await page.locator('#MainContentPlaceHolder_SearchPanel_SearchPanelLayout_AdultsSpinEdit_B-4').click();
//   await page.getByLabel('Children').click();
//   await page.getByLabel('Children').click();
//   await page.getByLabel('Children').fill('2');
//   await page.getByText('SEARCH SEARCH').click();
//   await page.getByText('$199.99').click();
//   await page.locator('#MainContentPlaceHolder_HotelsDataView_IT1_BookItButton_1_CD span').click();
//   await page.getByText('Print Invoice Print Invoice').click();
// });