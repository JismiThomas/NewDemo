package com.mavenproject.org;
	
	import java.awt.AWTException;
import java.awt.Robot;
	import java.awt.event.KeyEvent;
	import java.io.File;
	import java.io.FilenameFilter;
	import java.io.IOException;
	import java.net.URL;
	import java.util.List;
	import java.util.Optional;
import java.util.concurrent.TimeUnit;

import javax.swing.text.html.Option;

	import org.apache.commons.io.FileUtils;
	import org.openqa.selenium.Alert;
	import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
	import org.openqa.selenium.TakesScreenshot;
	import org.openqa.selenium.WebDriver;
	import org.openqa.selenium.WebElement;
	import org.openqa.selenium.chrome.ChromeDriver;
	import org.openqa.selenium.firefox.FirefoxDriver;
	import org.openqa.selenium.ie.InternetExplorerDriver;
	import org.openqa.selenium.interactions.Actions;
//	import org.openqa.selenium.remote.server.handler.ClickElement;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

	public class BaseClassDemo {
		
		public static WebDriver driver;

		//private static ChromeDriver driver;

		public static WebDriver browserLaunch(String browsername) {
			try { 
				if(browsername.equalsIgnoreCase("chrome")) {
					System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"\\Driver\\chromedriver.exe");
					driver=new ChromeDriver();
			}
				else if(browsername.equalsIgnoreCase("firefox"))
			{
				System.setProperty("webdriver.gecko.driver",System.getProperty("user.dir")+"\\Driver\\geckodriver.exe");
				driver=new FirefoxDriver();	
			}
			else if(browsername.equalsIgnoreCase("ie"))
			{
				System.setProperty("webdriver.ie.driver",System.getProperty("user.dir")+"\\Driver\\IEDriverServer.exe");
				driver=new InternetExplorerDriver();
			}else {
				System.out.println("Invalid BrowserName");
			}
				}
				catch (Exception e) {
					// TODO: handle exception
					e.printStackTrace();
				}
				driver.manage().window().maximize();
				return driver;
		}
	           //==========Get URL or Browser launch=================//
				public static void getUrl(String url){
					driver.get(url);
				}
				
				//============dropdown=================//
				public static void DropDownDemo(WebElement element,String option,String value){
					Select s=new Select(element);
					if (option.equalsIgnoreCase("index")) {
						s.selectByIndex(Integer.parseInt(value));
					}else if (option.equalsIgnoreCase("value")) {
					  s.selectByValue(value);	
					  }else if (option.equalsIgnoreCase("text")) {
						s.selectByVisibleText(value);
					}
					}   
				
				//=======x path and commen methode to clickon any element==========//
				public static void clk(WebElement element){
				element.click();
				}
				
				//======send keys=======//
				public static void sendKeys(WebElement element,String input) {
					element.sendKeys(input);
				}
				
				//============close===================//
				public static void close() {
					driver.close();
				}
				
				//===============quit=================//
				public static void quit() {
					driver.quit();
				}
				//=========navigate to================//
				public static void navigateTo(String input)
				{
					driver.navigate().to(input);
				}
				
				//===========navigate back============//
				public static void navigateBack()
				{
					driver.navigate().back();
				}
				
				//=============forward================//
				public static void navigateForward()
				{
					driver.navigate().forward();
				}
				
				//============refresh=================//
				public static void refresh()
				{
					driver.navigate().refresh();
				}
				
				//==========simple alert=============//
				public static void alert()
				{
					Alert alert=driver.switchTo().alert();
					alert.accept();
				}
				
				//===========confirm alert===========//
				public static void calert(String option)
				{
					Alert alert=driver.switchTo().alert();
					if (option.equalsIgnoreCase("accept")) {
						alert.accept();	
					}else if (option.equalsIgnoreCase("dismiss")) {
						alert.dismiss();
				}}
							
			//==============promt alert===========//
			public static void promAlert(String input,String option)
			{
				Alert alert=driver.switchTo().alert();
				alert.sendKeys(input);
				if(option.equalsIgnoreCase("accept")){
				alert.accept();}
				else if (option.equalsIgnoreCase("dismiss")){
				alert.dismiss();
				}
			}
				
			//================actions===============//
			public static void actions(String option,WebElement element) {
			Actions ac=new Actions(driver);
			if (option.equalsIgnoreCase("rightclick")) {
				ac.contextClick(element).build().perform();
				}
			else if (option.equalsIgnoreCase("doubleclick")) {
				ac.doubleClick(element).build().perform();
				}
			else if (option.equalsIgnoreCase("movetoelement")) {
				ac.moveToElement(element).build().perform();
				}}
								
				//========Action DragDrop================//
			public static void actionDragAndDrop(WebElement srcelement,WebElement destelement) {
				Actions ac=new Actions(driver);	
				ac.dragAndDrop(srcelement, destelement);
				}
			
			//================innerFrame================//
			public static void actions(String parameter,String value) {
				if (parameter.equalsIgnoreCase("Integer")) {
					driver.switchTo().frame(value);
				}
				else if (parameter.equalsIgnoreCase("webelement")) {
					driver.switchTo().frame(value);
				}	
				else if (parameter.equalsIgnoreCase("id_or_name")) {
					driver.switchTo().frame(value);
				}
				}
			
			//=============Perent Frame==================//
			public static void perentFrame() {
			driver.switchTo().parentFrame();
			}
			
			//==============DefaultFrame=================//
			public static void defaultFrame() {
				driver.switchTo().defaultContent();
				}
			
			//==================Robot=================//
			public static void robot(String option) throws AWTException {
				Robot r= new Robot();
				if (option.equalsIgnoreCase("down")) {
					r.keyPress(KeyEvent.VK_DOWN);
					r.keyRelease(KeyEvent.VK_DOWN);
					}
				else if (option.equalsIgnoreCase("enter")) {
					r.keyPress(KeyEvent.VK_DOWN);
					r.keyRelease(KeyEvent.VK_DOWN);
					}	
				else if (option.equalsIgnoreCase("up")) {
					r.keyPress(KeyEvent.VK_UP);
					r.keyRelease(KeyEvent.VK_UP);
				}}
			
				//=============check box==============//
				public static void checkBox(WebElement element) {
				element.click();	
				}
				
				//===========isEnabled===============//
				public static void isEnabled(WebElement element) {
				element.isEnabled();
				}
				
				//==============isDisplayed==========//
				public static void isDisplayed(WebElement element) {
					element.isDisplayed();
				}
				
				//========isSelected===========//
				public static void isSelected(WebElement element) {
					element.isSelected();
					}
				
				//=========getOptions=================//
				public static void getOptions(WebElement element) {
					Select s=new Select(element);
					List<WebElement>options=s.getOptions();
					for (WebElement x : options) {
						System.out.println(x.getText());
					}}
				
					//===========getTitle===================//
					public static void getTitle() {
						driver.getTitle();
						}
					
					//===========getURL==============//
					public static void getCurrentURL() {
						driver.getCurrentUrl();
						}
					
					//==========getAttribute=================//
					public static void getAttribute(WebElement element,String value) {
						element.getAttribute(value);
					}
					  
					//=============isMultiple===================//
					public static void isMultiple(WebElement element) {
						Select s=new Select(element);
						s.isMultiple();
				    }
					
					//================Get all Selected optiion==========//
					public static void getAllSelectedOption(WebElement element) {
						Select s=new Select(element);
						List<WebElement> allSelectedOption=s.getAllSelectedOptions();
				    }
					
					//========Get First Slected Option==============//
					public static void getFrtSelectedOption(WebElement element) {
						Select s=new Select(element);
						WebElement firstSelectedOption=s.getFirstSelectedOption();
				    }
					
				   //===========Take SceenShot==================//
					public static void takeScreenshot(String filename)throws IOException {
					TakesScreenshot ts=(TakesScreenshot) driver;
					File srcFile=ts.getScreenshotAs(OutputType.FILE);
					File desFile=new File(".\\Screenshot"+filename+".png");     //. for dynamic change path,+ for cocadinate
					FileUtils.copyFile(srcFile, desFile);
					}
					
				//=====================ScrollUp And Down axis============//
				 public static void ScrollUpDownAxis(String option,String value) {
				 JavascriptExecutor js= (JavascriptExecutor)	driver;
				 js.executeScript("window.scrollBy(0,3000)");
				 }
				 
				//============ScrollUp element===============//value-give value,option- give webelement,element-give element
				  public static void ScrollUpDownElement(String value,String element) {
				  JavascriptExecutor js = (JavascriptExecutor) driver;
				  js.executeScript("arguments[0].scrollIntoView(value);",element);
				  }
				  
				//===============Implicit wait====================//
				 public static void implicitWait(int time) {
					
					 driver.manage().timeouts().implicitlyWait(time, TimeUnit.SECONDS);
				 }
				 
				//=====================explicit wait===============//
				 public static void explicittWait(int timeout,WebElement element) {
					WebDriverWait wait=new WebDriverWait(driver,timeout);
				 }
				 
				//======================Fluent wait=================//
				
				 public static void fluentWait(int time,int timeout) {
					Wait<WebDriver>wait =new FluentWait<WebDriver>(driver);
				 }
				 
				//======================Radio Button================//
				 public static void radioButn(WebElement element) {
					element.click();
				 }}

