package com.cucumber.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.cucumber.helper.PageObjectManager;
import com.cucumber.runner.Runner;
import com.mavenproject.org.BaseClassDemo;

import cucumber.api.java.en.*;

public class BookingConfirmStepDefinition extends BaseClassDemo {
	
	public static WebDriver driver = Runner.driver;
	PageObjectManager pom =new PageObjectManager(driver);
	
	@Given("^User verify to my Itinerary$")
	public void user_verify_to_my_Itinerary() throws Throwable {
	 clk(pom.getBc().searchButn);   
	    
	}}
