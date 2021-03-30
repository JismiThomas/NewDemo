package com.cucumber.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookHotel {
	public static WebDriver driver;
	
	@FindBy(id= "first_name")
	private WebElement firstname;
	
	@FindBy(id="last_name")
   private WebElement lastname;
	
   @FindBy(id="address")
   private WebElement addrss;
   
   @FindBy(id="cc_num")
   private WebElement crno;
   
   @FindBy(id="cc_type")
   private WebElement cardtype;
   
   @FindBy(id="cc_exp_month")
   private WebElement exomonth;
   
   @FindBy(id="cc_exp_year")
   private WebElement expyear;
   
   @FindBy(id="cc_cvv")
   private WebElement cvv;
   
   @FindBy(id="book_now")
   private WebElement booknow;
   
   @FindBy(xpath="//*[@id=\\\"logout\\\"]")
   private WebElement logout;
   
   public BookHotel(WebDriver bdriver) {
		this.driver=bdriver;//this for current class reference -to identify 'driver'
		PageFactory.initElements(driver, this);}
//create getter here
public static WebDriver getDriver() {
	return driver;
}

public WebElement getFirstname() {
	return firstname;
}

public WebElement getLastname() {
	return lastname;
}

public WebElement getAddrss() {
	return addrss;
}

public WebElement getCrno() {
	return crno;
}

public WebElement getCardtype() {
	return cardtype;
}

public WebElement getExomonth() {
	return exomonth;
}

public WebElement getExpyear() {
	return expyear;
}

public WebElement getCvv() {
	return cvv;
}

public WebElement getBooknow() {
	return booknow;
}

public WebElement getLogout() {
	return logout;
}

}
