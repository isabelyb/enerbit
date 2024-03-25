import { type Locator, type Page } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

const url = process.env.URL || '';

export class MainPage {
  readonly page: Page;
  readonly devexpressIcon: Locator;
  readonly loginHeaderButton: Locator;
  readonly userInput: Locator;
  readonly passForm: Locator;
  readonly passInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly searchSection: Locator;
  readonly location: Locator;
  readonly locationBox: Locator;
  readonly checkIn: Locator;
  readonly checkOut: Locator;
  readonly rooms: Locator;
  readonly adults: Locator;
  readonly children: Locator;
  readonly searchButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.devexpressIcon = page.locator('#DevExpressHyperLink');
    this.loginHeaderButton = page.locator('#HeaderControl_Login_CD');
    this.userInput = page.locator('#HeaderControl_LogonControl_LoginFormLayout_txtEmail_I');
    this.passForm = page.locator('#HeaderControl_LogonControl_LoginFormLayout_1'); 
    this.passInput = page.locator('#HeaderControl_LogonControl_LoginFormLayout_txtPassword_I');
    this.loginButton = page.locator('#HeaderControl_LogonControl_btnLoginNow_CD > span');
    this.errorMessage = page.locator('#HeaderControl_LogonControl_LoginFormLayout_Captcha_TB_EC');
    this.searchSection = page.locator('#MainContentPlaceHolder_SearchPanel_SearchPanelLayout_0');
    this.location = page.locator('#MainContentPlaceHolder_SearchPanel_SearchPanelLayout_LocationComboBox_B-1Img')
    this.locationBox = page.locator('#MainContentPlaceHolder_SearchPanel_SearchPanelLayout_LocationComboBox_I');
    this.checkIn = page.locator('#MainContentPlaceHolder_SearchPanel_SearchPanelLayout_CheckInDateEdit_I');
    this.checkOut = page.locator('#MainContentPlaceHolder_SearchPanel_SearchPanelLayout_CheckOutDateEdit_I');
    this.rooms = page.locator('#MainContentPlaceHolder_SearchPanel_SearchPanelLayout_RoomsComboBox_I');
    this.adults = page.locator('#MainContentPlaceHolder_SearchPanel_SearchPanelLayout_AdultsSpinEdit_I');
    this.children = page.locator('#MainContentPlaceHolder_SearchPanel_SearchPanelLayout_ChildrenSpinEdit_I');
    this.searchButton = page.locator('#MainContentPlaceHolder_SearchPanel_SearchPanelLayout_SearchButton_CD > span');
   }


  async goto() {

    await this.page.goto(url);
  }

  
  async getReservationDate(days: number) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthName = monthNames[date.getMonth()];
    return `${date.getDate()} ${monthName} ${date.getFullYear()}`;
 }  

}