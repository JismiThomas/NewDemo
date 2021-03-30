package com.mavenproject.org;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class JDBCDemo {
	public static void main(String[] args) throws ClassNotFoundException, SQLException {

		//url=jdbc:db_type://ipaddress:port/db_name
		String url="jdbc:mysql://localhost:3306/world";
		
		String username="root";
		String password="root";
		String query="select * from world.city";
		
		// Load the driver
		Class.forName("com.mysql.jdbc.Driver");
		
		//Create a connection
		Connection con = DriverManager.getConnection(url, username, password);
		
		//Create statement object for querry
		 Statement st = con.createStatement(); 
		 
		//execute querry
		 ResultSet rs = st.executeQuery(query); 
		 
		 while (rs.next()) {
		
		//Print all value of a column	 
		 String string = rs.getString("Name");
  		 System.out.println(string);
  		 
  		 //Print 1 value
//			String string = rs.getString(4);
//			if (string.equalsIgnoreCase("Kabol")) {
//			System.out.println(string); {
					
				//}}
			}}}


