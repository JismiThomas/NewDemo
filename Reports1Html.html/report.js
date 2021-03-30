$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Project.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality for Adactin Application",
  "description": "",
  "id": "login-functionality-for-adactin-application",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter \"TomJismi87\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"ADACT123\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user veryfy valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_the_application()"
});
formatter.result({
  "duration": 615101179,
  "error_message": "java.lang.NullPointerException\r\n\tat com.mavenproject.org.BaseClassDemo.getUrl(BaseClassDemo.java:68)\r\n\tat com.cucumber.stepdefinition.LoginStepDefinition.user_launch_the_application(LoginStepDefinition.java:54)\r\n\tat ✽.Given User launch the application(Project.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "TomJismi87",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ADACT123",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_veryfy_valid_username_and_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 9,
  "name": "User enters username and password",
  "description": "",
  "id": "login-functionality-for-adactin-application;user-enters-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Login1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enter \"TomJismi87\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enter \"ADACT123\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user veryfy valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "TomJismi87",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ADACT123",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_veryfy_valid_username_and_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 15,
      "value": "#  Scenario: User Search Hotel"
    },
    {
      "line": 16,
      "value": "#  Given User search the location"
    },
    {
      "line": 17,
      "value": "#  When User select the hotel"
    },
    {
      "line": 18,
      "value": "#  And User select the room type"
    },
    {
      "line": 19,
      "value": "#  And User select room number"
    },
    {
      "line": 20,
      "value": "#  And User select check in date"
    },
    {
      "line": 21,
      "value": "#  And User select check out date"
    },
    {
      "line": 22,
      "value": "#  And User select adult room"
    },
    {
      "line": 23,
      "value": "#  And User select child room"
    },
    {
      "line": 24,
      "value": "#  Then User Verify serach hotel"
    },
    {
      "line": 25,
      "value": "#"
    },
    {
      "line": 26,
      "value": "#  Scenario: User Click the Hotel"
    },
    {
      "line": 27,
      "value": "#  Given User click the RadioButton"
    },
    {
      "line": 28,
      "value": "#  When User verify the hotel"
    },
    {
      "line": 29,
      "value": "#"
    },
    {
      "line": 30,
      "value": "#  Scenario: User Search Hotel"
    },
    {
      "line": 31,
      "value": "#  Given User enter the firstname"
    },
    {
      "line": 32,
      "value": "#  When User enter the lastname"
    },
    {
      "line": 33,
      "value": "#  And User enter the billing adress"
    },
    {
      "line": 34,
      "value": "#  And User enter the card no"
    },
    {
      "line": 35,
      "value": "#  And User enter the card type"
    },
    {
      "line": 36,
      "value": "#  And User enter the expiry date"
    },
    {
      "line": 37,
      "value": "#  And User enter the expiry year"
    },
    {
      "line": 38,
      "value": "#  And User enter the ccv"
    },
    {
      "line": 39,
      "value": "#  Then User Verify to book now"
    },
    {
      "line": 40,
      "value": "#"
    },
    {
      "line": 41,
      "value": "# Scenario: User enter book confirmation"
    },
    {
      "line": 42,
      "value": "#  Given User verify to my Itinerary"
    }
  ],
  "line": 45,
  "name": "User enters username and password",
  "description": "",
  "id": "login-functionality-for-adactin-application;user-enters-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@Login2"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "User enter \"\u003cusername\u003e\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "User enter \"\u003cpassword\u003e\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user veryfy valid username and valid password",
  "keyword": "Then "
});
formatter.examples({
  "line": 51,
  "name": "",
  "description": "",
  "id": "login-functionality-for-adactin-application;user-enters-username-and-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 52,
      "id": "login-functionality-for-adactin-application;user-enters-username-and-password;;1"
    },
    {
      "cells": [
        "TomJismi87",
        "ADACT123"
      ],
      "line": 53,
      "id": "login-functionality-for-adactin-application;user-enters-username-and-password;;2"
    },
    {
      "cells": [
        "Jomol21",
        "jomol3213e45666"
      ],
      "line": 54,
      "id": "login-functionality-for-adactin-application;user-enters-username-and-password;;3"
    },
    {
      "cells": [
        "asdf",
        "123"
      ],
      "line": 55,
      "id": "login-functionality-for-adactin-application;user-enters-username-and-password;;4"
    },
    {
      "cells": [
        "MNOP",
        "00001"
      ],
      "line": 56,
      "id": "login-functionality-for-adactin-application;user-enters-username-and-password;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter \"TomJismi87\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"ADACT123\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user veryfy valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_the_application()"
});
formatter.result({
  "duration": 3677189,
  "error_message": "java.lang.NullPointerException\r\n\tat com.mavenproject.org.BaseClassDemo.getUrl(BaseClassDemo.java:68)\r\n\tat com.cucumber.stepdefinition.LoginStepDefinition.user_launch_the_application(LoginStepDefinition.java:54)\r\n\tat ✽.Given User launch the application(Project.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "TomJismi87",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ADACT123",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_veryfy_valid_username_and_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 53,
  "name": "User enters username and password",
  "description": "",
  "id": "login-functionality-for-adactin-application;user-enters-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@Login2"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "User enter \"TomJismi87\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "User enter \"ADACT123\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user veryfy valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "TomJismi87",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ADACT123",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_veryfy_valid_username_and_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter \"TomJismi87\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"ADACT123\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user veryfy valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_the_application()"
});
formatter.result({
  "duration": 971228,
  "error_message": "java.lang.NullPointerException\r\n\tat com.mavenproject.org.BaseClassDemo.getUrl(BaseClassDemo.java:68)\r\n\tat com.cucumber.stepdefinition.LoginStepDefinition.user_launch_the_application(LoginStepDefinition.java:54)\r\n\tat ✽.Given User launch the application(Project.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "TomJismi87",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ADACT123",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_veryfy_valid_username_and_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 54,
  "name": "User enters username and password",
  "description": "",
  "id": "login-functionality-for-adactin-application;user-enters-username-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@Login2"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "User enter \"Jomol21\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "User enter \"jomol3213e45666\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user veryfy valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Jomol21",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "jomol3213e45666",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_veryfy_valid_username_and_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter \"TomJismi87\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"ADACT123\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user veryfy valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_the_application()"
});
formatter.result({
  "duration": 2210056,
  "error_message": "java.lang.NullPointerException\r\n\tat com.mavenproject.org.BaseClassDemo.getUrl(BaseClassDemo.java:68)\r\n\tat com.cucumber.stepdefinition.LoginStepDefinition.user_launch_the_application(LoginStepDefinition.java:54)\r\n\tat ✽.Given User launch the application(Project.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "TomJismi87",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ADACT123",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_veryfy_valid_username_and_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 55,
  "name": "User enters username and password",
  "description": "",
  "id": "login-functionality-for-adactin-application;user-enters-username-and-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@Login2"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "User enter \"asdf\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "User enter \"123\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user veryfy valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "asdf",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_veryfy_valid_username_and_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter \"TomJismi87\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"ADACT123\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user veryfy valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_the_application()"
});
formatter.result({
  "duration": 1003040,
  "error_message": "java.lang.NullPointerException\r\n\tat com.mavenproject.org.BaseClassDemo.getUrl(BaseClassDemo.java:68)\r\n\tat com.cucumber.stepdefinition.LoginStepDefinition.user_launch_the_application(LoginStepDefinition.java:54)\r\n\tat ✽.Given User launch the application(Project.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "TomJismi87",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ADACT123",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_veryfy_valid_username_and_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 56,
  "name": "User enters username and password",
  "description": "",
  "id": "login-functionality-for-adactin-application;user-enters-username-and-password;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@Login2"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "User enter \"MNOP\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "User enter \"00001\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user veryfy valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MNOP",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "00001",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_veryfy_valid_username_and_valid_password()"
});
formatter.result({
  "status": "skipped"
});
});