Feature: Login functionality for Adactin Application

  Background:
  Given User launch the application
  When User enter "TomJismi87" as username
  And User enter "ADACT123" as password
  Then user veryfy valid username and valid password
  @Login1
  Scenario: User enters username and password
  Given User launch the application
  When User enter "TomJismi87" as username
  And User enter "ADACT123" as password
  Then user veryfy valid username and valid password

#  Scenario: User Search Hotel
#  Given User search the location
#  When User select the hotel
#  And User select the room type
#  And User select room number
#  And User select check in date
#  And User select check out date
#  And User select adult room
#  And User select child room
#  Then User Verify serach hotel 
#  
#  Scenario: User Click the Hotel
#  Given User click the RadioButton
#  When User verify the hotel
#  
#  Scenario: User Search Hotel
#  Given User enter the firstname
#  When User enter the lastname
#  And User enter the billing adress
#  And User enter the card no
#  And User enter the card type
#  And User enter the expiry date
#  And User enter the expiry year
#  And User enter the ccv
#  Then User Verify to book now
# 
# Scenario: User enter book confirmation
#  Given User verify to my Itinerary 
 
 @Login2 
Scenario Outline: User enters username and password
	Given User launch the application
    When User enter "<username>" as username
    And User enter "<password>" as password
    Then user veryfy valid username and valid password
		
		Examples:
		| username | password |
		| TomJismi87 |ADACT123 | 
		| Jomol21 | jomol3213e45666 | 
		| asdf | 123 | 
		| MNOP | 00001 | 
		
      
  
  
  