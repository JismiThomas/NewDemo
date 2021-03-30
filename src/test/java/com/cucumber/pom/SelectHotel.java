package com.cucumber.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SelectHotel {
	
	public static WebDriver driver;
	@FindBy(id="radiobutton_0")
	private WebElement radiobuttn;
	@FindBy(id="continue")
	private WebElement conti;
	
	public SelectHotel(WebDriver s2driver) {
		this.driver=s2driver;//this for current class reference -to identify 'driver'
		PageFactory.initElements(driver, this);
	}
	public WebElement getRadiobuttn() {
		return radiobuttn;
		}
	public WebElement getConti() {
		return conti;
		}
	}



