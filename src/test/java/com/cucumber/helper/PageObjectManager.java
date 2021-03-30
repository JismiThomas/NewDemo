package com.cucumber.helper;

import org.openqa.selenium.WebDriver;

import com.cucumber.pom.BookHotel;
import com.cucumber.pom.BookingConfirmation;
import com.cucumber.pom.LoginPage;
import com.cucumber.pom.SearchHotel;
import com.cucumber.pom.SelectHotel;

public class PageObjectManager {
	public static WebDriver driver;
	private LoginPage lp;
	//public PageObjectManager(WebDriver)
	
	
public PageObjectManager(WebDriver mdriver) {
	this.driver=mdriver;
}
	
	public LoginPage getLp() {
		lp= new LoginPage(driver);
		return lp;
	}
	
	private SearchHotel sh;
	public SearchHotel getSh() {
		sh=new SearchHotel(driver);
		return sh;
	}
	
	private SelectHotel selh;//create getter-right click and select
	public SelectHotel getSelh() {
		selh=new SelectHotel(driver);
	return selh;
	}

private BookHotel bh;
public BookHotel getBh() {
	bh=new BookHotel(driver);
	return bh;
}
private BookingConfirmation bc; //pomclass name-bookinconfirmatn

public BookingConfirmation getBc() {
bc=new BookingConfirmation(driver); // create constructor here
return bc;
}

}
	