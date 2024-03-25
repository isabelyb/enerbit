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
const priceData = process.env.PRICE || '';
const rateData = process.env.RATE || '';

test.describe('Reservation Feature', () => {

    test('Make a reservation', async ({ page }) => {
        const mainPage = new MainPage(page);
        const reservationPage = new ReservationPage(page);

        await mainPage.goto();
        await mainPage.searchSection.isVisible();
        await mainPage.locationBox.click();
        await mainPage.locationBox.fill(locationData);

        await mainPage.checkIn.fill(await mainPage.getReservationDate(parseInt(checkInData)));
        await mainPage.checkOut.fill(await mainPage.getReservationDate(parseInt(checkOutData)));
        await mainPage.rooms.fill(roomsData);
        await mainPage.adults.fill(adultsData);
        await mainPage.children.fill(childrenData);
        await mainPage.searchButton.click();
        await reservationPage.nightlyRate.click();
        await page.mouse.wheel(0,1);
        await reservationPage.rating.click();
        await page.mouse.wheel(0,1);
        await reservationPage.rating.click();
        await page.mouse.wheel(0,1);
        await reservationPage.filterApply.click();
        await reservationPage.pasardetab()
        await reservationPage.bookItButton.click();
        await page.getByText('Print Invoice Print Invoice').click();
        
    })
});


