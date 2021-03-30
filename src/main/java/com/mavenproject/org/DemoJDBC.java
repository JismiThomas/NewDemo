package com.mavenproject.org;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DemoJDBC {
	public static void main(String[] args) throws ClassNotFoundException, SQLException {
		
		String url="jdbc:mysql://localhost:3306/world";
		String username="root";
		String password="root";
		String query="select district from world.city";
		Class.forName("com.mysql.jdbc.Driver");
		 Connection con = DriverManager.getConnection(url, username, password);
		 Statement st = con.createStatement();
		 ResultSet rs = st.executeQuery(query);
	
		 while (rs.next()) {
		
//		String string = rs.getString("Name");
//		System.out.println(string);
			String string = rs.getString(2);
			 if (string.equalsIgnoreCase("pondicherry")) {
		     System.out.println(string);
			}}}}


