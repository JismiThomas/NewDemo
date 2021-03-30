package com.cucumber.helper;

import java.io.IOException;

public class FileReaderManager {
	private FileReaderManager() {
		
	}
	public static FileReaderManager getInstance() {
		FileReaderManager frm=new FileReaderManager();
		return frm;
	}
	public ConfigarationReader getCrInstance() throws IOException {
		ConfigarationReader cr=new ConfigarationReader();
		return cr;
	}
	

}
