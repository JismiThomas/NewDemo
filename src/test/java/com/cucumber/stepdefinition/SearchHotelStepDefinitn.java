package com.cucumber.stepdefinition;

import java.sql.Driver;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.cucumber.helper.PageObjectManager;
import com.cucumber.pom.SearchHotel;
import com.cucumber.runner.Runner;
import com.mavenproject.org.BaseClassDemo;

import cucumber.api.PendingException;
import cucumber.api.java.en.*;

public class SearchHotelStepDefinitn extends BaseClassDemo {
	
//	public static WebDriver driver = Runner.driver;
//	SearchHotel sh=new SearchHotel(driver);
//	
//	@Given("^User search the location$")
//	public void user_search_the_location() throws Throwable {
//		
//	   DropDownDemo(sh.getLocatn(), "value", "London"); 
//	}
//
//	
//
//	@When("^User select the hotel$")
//	public void user_select_the_hotel() throws Throwable {
//	   DropDownDemo(sh.getHotels(), "value", "Hotel Sunshine"); 
//	   
//	}
//
//	@When("^User select the room type$")
//	public void user_select_the_room_type() throws Throwable {
//	 DropDownDemo(sh.getRoomtype(), "value", "Double");   
//	   
//	}
//
//	@When("^User select room number$")
//	public void user_select_room_number() throws Throwable {
//	    DropDownDemo(sh.getRoomnumber(), "value", "2");
//	   
//	}
//
//	@When("^User select check in date$")
//	public void user_select_check_in_date() throws Throwable {
//		sendKeys(sh.getCheckin(), "12/03/2021"); 
//	   
//	}
//
//	@When("^User select check out date$")
//	public void user_select_check_out_date() throws Throwable {
//sendKeys(sh.getCheckin(), "13/03/2021");  
//	   
//	}
//
//	@When("^User select adult room$")
//	public void user_select_adult_room() throws Throwable {
//	   DropDownDemo(sh.getAdultrm(), "value","1"); 
//	   
//	}
//
//	@When("^User select child room$")
//	public void user_select_child_room() throws Throwable {
//	    DropDownDemo(sh.getAdultrm(), "value", "1");
//	   
//	}
//
//	@Then("^User Verify serach hotel$")
//	public void user_Verify_serach_hotel() throws Throwable {
	  // clk(sh.getSubmit()); 
//	   
//	}

	public static WebDriver driver = Runner.driver;
	PageObjectManager pom =new PageObjectManager(driver);

	@Given("^User search the location$")
	public void user_search_the_location() throws Throwable {
		
	   DropDownDemo(pom.getSh().getLocatn(), "value", "London"); 
	}

	

	@When("^User select the hotel$")
	public void user_select_the_hotel() throws Throwable {
	   DropDownDemo(pom.getSh().getHotels(), "value", "Hotel Sunshine"); 
	   
	}
	@When("^User select the room type$")
	public void user_select_the_room_type() throws Throwable {
	 DropDownDemo(pom.getSh().getRoomtype(), "value", "Double");   
	   
	}

	@When("^User select room number$")
	public void user_select_room_number() throws Throwable {
	    DropDownDemo(pom.getSh().getRoomnumber(), "value", "2");
	   
	}

	@When("^User select check in date$")
	public void user_select_check_in_date() throws Throwable {
		sendKeys(pom.getSh().getCheckin(), "12/03/2021");    
	}

	@When("^User select check out date$")
	public void user_select_check_out_date() throws Throwable {
sendKeys(pom.getSh().getCheckout(), "13/03/2021");  
	   
	}

	@When("^User select adult room$")
	public void user_select_adult_room() throws Throwable {
	   DropDownDemo(pom.getSh().getAdultrm(), "value","1"); 
	   
	}

	@When("^User select child room$")
	public void user_select_child_room() throws Throwable {
	    DropDownDemo(pom.getSh().getChildrm(), "value", "1");
	   
	}

	@Then("^User Verify serach hotel$")
	public void user_Verify_serach_hotel() throws Throwable {
	   clk(pom.getSh().getSubmit()); 	   
	}

}
