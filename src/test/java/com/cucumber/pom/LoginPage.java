package com.cucumber.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	
	public static WebDriver driver;

	@FindBy(id = "username")
	private WebElement username; // username==methode

	@FindBy(id = "password")
	private WebElement password;

	@FindBy(id = "login")
	private WebElement login_Btn;

	public LoginPage(WebDriver ldriver)//chrome is here inIdriver
	{
		this.driver = ldriver;//now gave to driver
		PageFactory.initElements(driver, this);
	}

	public WebElement getUsername() {
		return username;
	}

	public WebElement getPassword() {
		return password;
	}

	public WebElement getLogin_Btn() {
		return login_Btn;
	}

}
