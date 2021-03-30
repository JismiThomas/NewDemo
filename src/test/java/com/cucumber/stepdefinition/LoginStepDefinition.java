package com.cucumber.stepdefinition;

import java.sql.Driver;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import com.cucumber.helper.FileReaderManager;
import com.cucumber.helper.PageObjectManager;
import com.cucumber.runner.Runner;
import com.mavenproject.org.BaseClassDemo;

import cucumber.api.java.en.*;


public class LoginStepDefinition extends BaseClassDemo {
	
	/*public static WebDriver driver = Runner.driver;
	
	LoginPage lp=new LoginPage(driver);
		
	@Given("^User launch the application$")
	public void user_launch_the_application() throws Throwable {
	getUrl("https://adactinhotelapp.com/");
  	
	}

	@When("^User enter \"([^\"]*)\" as username$")
	public void user_enter_as_username(String arg1) throws Throwable {
   sendKeys(lp.getUsername(), arg1);
			
	}

	@When("^User enter \"([^\"]*)\" as password$")
	public void user_enter_as_password(String arg1) throws Throwable {
	 sendKeys(lp.getPassword(), arg1);
		
	}

	@Then("^user veryfy valid username and valid password$")
	public void user_veryfy_valid_username_and_valid_password() throws Throwable {
	   click(lp.getLogin_Btn()); 
				
	  //Assert.assertEquals("ssfx", "rdf"); 
	}}*/


public static WebDriver driver = Runner.driver;
	PageObjectManager pom =new PageObjectManager(driver);
	
	@Given("^User launch the application$")
	public void user_launch_the_application() throws Throwable {
    String url=FileReaderManager.getInstance().getCrInstance().getUrl();
		getUrl(url);
	}

	@When("^User enter \"([^\"]*)\" as username$")
	public void user_enter_as_username(String arg1) throws Throwable {
   String username = FileReaderManager.getInstance().getCrInstance().getUserName();//RT
		sendKeys(pom.getLp().getUsername(), arg1);
    // sendKeys(pom.getLp().getUsername(), username);
	}

	@When("^User enter \"([^\"]*)\" as password$")
	public void user_enter_as_password(String arg1) throws Throwable {
	 String password = FileReaderManager.getInstance().getCrInstance().getPassWord();
		sendKeys(pom.getLp().getPassword(), arg1);
		//sendKeys(pom.getLp().getPassword(), password);
	}

	@Then("^user veryfy valid username and valid password$")
	public void user_veryfy_valid_username_and_valid_password() throws Throwable {
	   
		clk(pom.getLp().getLogin_Btn());
		
	//Assert.assertEquals("ssfx", "rdf"); 
	}}




