package com.cucumber.stepdefinition;

import com.cucumber.helper.PageObjectManager;
import com.mavenproject.org.BaseClassDemo;

import cucumber.api.java.en.*;

public class SelectStepDefinition extends BaseClassDemo {
	
	PageObjectManager pom=new PageObjectManager(driver);
	@Given("^User click the RadioButton$")
	public void user_click_the_RadioButton() throws Throwable {
	 radioButn(pom.getSelh().getRadiobuttn());  
	   
	}

	@When("^User verify the hotel$")
	public void user_verify_the_hotel() throws Throwable {
	 clk(pom.getSelh().getConti());  
	   
	}

}
