package com.cucumber.runner;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


	@RunWith(Cucumber.class)
	@CucumberOptions(features = "src\\test\\java\\com\\cucumber\\feature",
	                 glue = "com\\cucumber\\stepdefinition",
	                 monochrome = true,
	                 dryRun = false,
	                 strict = true,plugin="html:Reports1Html.html"
	                 )

	public class TestRunner { 
	                		
	              		
	}              		

