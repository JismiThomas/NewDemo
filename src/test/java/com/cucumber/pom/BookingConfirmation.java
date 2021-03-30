package com.cucumber.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookingConfirmation {
	public static WebDriver driver;
	@FindBy(id = "search_hotel")
	public WebElement searchButn;
	
	public BookingConfirmation(WebDriver bcdriver) {
		this.driver=bcdriver;
		PageFactory.initElements(driver, this);
	}

	public BookingConfirmation() {
		// TODO Auto-generated constructor stub
	}

	public WebElement getSearchButn() {
    return searchButn;
	}}
