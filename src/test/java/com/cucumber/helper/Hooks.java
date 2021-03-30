package com.cucumber.helper;


import java.io.IOException;

import org.junit.After;
import org.testng.annotations.AfterMethod;


import com.mavenproject.org.BaseClassDemo;

import cucumber.api.Scenario;
import cucumber.api.java.Before;



public class Hooks extends BaseClassDemo {
//	@Before//
//public void before(Scenario scenario) {
//	System.out.println("before");
//
//}
//	@After
//	public void after(Scenario scenario) //import cucumber scenaio
//	{
//		System.out.println("after");
//
//	} }
	@Before
	public void beforeHooks(Scenario scenario) {
		String name=scenario.getName();
		System.out.println(name);

	}
		@After
		public void after(Scenario scenario) throws Throwable {
		takeScreenshot("‪C:\\Users\\idz\\Desktop\\New folder (2)\\test.png");

		} 

}
