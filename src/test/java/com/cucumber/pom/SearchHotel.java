package com.cucumber.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchHotel {
	public static WebDriver driver;
	
	//SearchHotel sh= new SearchHotel(driver);
	@FindBy(id = "location")
	private WebElement locatn;
	
	@FindBy(id = "hotels")
	private WebElement hotels;
	
	@FindBy(id = "room_type")
	private WebElement roomtype;
	
	@FindBy(id = "room_nos")
	private WebElement roomnumber;
	
	@FindBy(id = "datepick_in")
	private WebElement checkin;
	
	@FindBy(id = "datepick_out")
	private WebElement checkout;
	
	@FindBy(id = "adult_room")
	private WebElement adultrm;
	
	@FindBy(id = "child_room")
	private WebElement childrm;
	
	@FindBy(id = "Submit")
	private WebElement submit;
	
	public SearchHotel(WebDriver sdriver) {
		this.driver=sdriver;
		PageFactory.initElements(driver, this);
	}

	public static WebDriver getDriver() {
		return driver;
	}

	public WebElement getLocatn() {
		return locatn;
	}

	public WebElement getHotels() {
		return hotels;
	}

	public WebElement getRoomtype() {
		return roomtype;
	}

	public WebElement getRoomnumber() {
		return roomnumber;
	}

	public WebElement getCheckin() {
		return checkin;
	}

	public WebElement getCheckout() {
		return checkout;
	}

	public WebElement getAdultrm() {
		return adultrm;
	}

	public WebElement getChildrm() {
		return childrm;
	}

	public WebElement getSubmit() {
		return submit;
	}

	

}
