package com.cucumber.runner;

import java.io.IOException;

import org.junit.*;
import org.junit.jupiter.api.extension.Extensions;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.cucumber.helper.FileReaderManager;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;
import com.mavenproject.org.BaseClassDemo;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

//@RunWith(Cucumber.class)//@runnwith act as main methode
//@CucumberOptions(features = "src\\test\\java\\com\\cucumber\\feature",
//                 glue = "com\\cucumber\\stepdefinition",
//                 monochrome = true,
//                 dryRun = false,
//                 strict = true
//		 )

@RunWith(Cucumber.class)
@ExtendedCucumberOptions(retryCount = 4)
@CucumberOptions(features = "src\\test\\java\\com\\cucumber\\feature",
                 glue = "com\\cucumber\\stepdefinition",
                 monochrome = true,
                 dryRun = false,
                 strict = true,
                 plugin="com.cucumber.listener.ExtentCucumberFormatter:ReportExtentfail/extendsReports.html"
                 //plugin="json:JsonReports/report.json"
                             
                 //tags= "~@Login2"//give ~ expect login2 everithing will run 
                // plugin="pretty"
                 //plugin="html:Reports1Html.html"
		 )

public class Runner {
	
	public static WebDriver driver;
	
//	@BeforeClass
//	public static void setUp() {
//
//	driver=BaseClassDemo.browserLaunch("chrome");
//	}
//	
//	@AfterClass
//	public static void tearDown() {
//		driver.quit();
//	}}
	
	@BeforeClass
	public static void setUp() throws IOException {

	String browserName= FileReaderManager.getInstance().getCrInstance().getBrowsername();	
	driver=BaseClassDemo.browserLaunch(browserName);
	}
	
	@AfterClass
	public static void tearDown() {
		driver.quit();
	}}

