package com.cucumber.helper;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.apache.xmlbeans.impl.xb.ltgfmt.impl.TestCaseImpl.FilesImpl;
import org.apache.xmlbeans.impl.xb.xsdschema.Public;

public class ConfigarationReader {
	public static Properties p;
	public ConfigarationReader() throws IOException{
	
	File f= new File(System.getProperty("user.dir")+"\\src\\test\\java\\com\\cucumber\\properties\\Configuration.properties");
    FileInputStream fis= new FileInputStream(f);
    p=new Properties();
    p.load(fis);
}
	public static
	String getBrowsername() {
	String browser = p.getProperty("browsername");
	//System.out.println(browser);
	return browser;
	}
	public  static String getUrl() {
		String url = p.getProperty("url");
		return url;
		//System.out.println(url);
	}
//	public static void main(String[] args) throws IOException {
//		ConfigarationReader cr = new ConfigarationReader();
//		cr.getBrowsername();
//		cr.getUrl();
//	}
	
	public static String getUserName() {
		String username=p.getProperty("username");
		return username;
	}
	
	public static String getPassWord() {
		String password =p.getProperty("password");
		return password;
	}
	public static String getwait() {
		String wait=p.getProperty("wait");
		return wait;
	}
		
	}
