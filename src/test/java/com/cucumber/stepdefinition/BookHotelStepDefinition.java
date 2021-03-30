package com.cucumber.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.cucumber.helper.PageObjectManager;
import com.cucumber.runner.Runner;
import com.mavenproject.org.BaseClassDemo;

import cucumber.api.java.en.*;

public class BookHotelStepDefinition extends BaseClassDemo {
	
	public static WebDriver driver = Runner.driver;
	PageObjectManager pom =new PageObjectManager(driver);
	
	@Given("^User enter the firstname$")
	public void user_enter_the_firstname() throws Throwable {
	  sendKeys(pom.getBh().getFirstname(), "jomol");
	  
	   
	}

	@When("^User enter the lastname$")
	public void user_enter_the_lastname() throws Throwable {
	    sendKeys(pom.getBh().getLastname(), "Tom");
	   
	}

	@When("^User enter the billing adress$")
	public void user_enter_the_billing_adress() throws Throwable {
	  sendKeys(pom.getBh().getAddrss(), "kannut,kerala");  
	   
	}

	@When("^User enter the card no$")
	public void user_enter_the_card_no() throws Throwable {
	 sendKeys(pom.getBh().getCrno(), "0987654321234567");   
	   
	}

	@When("^User enter the card type$")
	public void user_enter_the_card_type() throws Throwable {
	  DropDownDemo(pom.getBh().getCardtype(),"value", "VISA");
	 	}

	@When("^User enter the expiry date$")
	public void user_enter_the_expiry_date() throws Throwable {
	    DropDownDemo(pom.getBh().getExomonth(), "value", "12");
	   
	}

	@When("^User enter the expiry year$")
	public void user_enter_the_expiry_year() throws Throwable {
	   DropDownDemo(pom.getBh().getExpyear(), "value", "2022"); 
	   
	}

	@When("^User enter the ccv$")
	public void user_enter_the_ccv() throws Throwable {
	  sendKeys(pom.getBh().getCvv(), "09876543");  
	   
	}

	@Then("^User Verify to book now$")
	public void user_Verify_to_book_now() throws Throwable {
	 clk(pom.getBh().getBooknow());   
	   
	}


}
