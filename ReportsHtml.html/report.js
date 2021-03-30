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
  "duration": 8437731520,
  "status": "passed"
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
  "duration": 339720852,
  "status": "passed"
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
  "duration": 183577840,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_veryfy_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 1198972446,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User enters username and password",
  "description": "",
  "id": "login-functionality-for-adactin-application;user-enters-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
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
  "duration": 887541626,
  "status": "passed"
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
  "duration": 162362421,
  "status": "passed"
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
  "duration": 185436083,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_veryfy_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 870768775,
  "status": "passed"
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
  "line": 44,
  "name": "User enters username and password",
  "description": "",
  "id": "login-functionality-for-adactin-application;user-enters-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "User enter \"TomJismi87\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "User enter \"ADACT123\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user veryfy valid username and valid password",
  "keyword": "Then "
});
formatter.examples({
  "line": 50,
  "name": "",
  "description": "",
  "id": "login-functionality-for-adactin-application;user-enters-username-and-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 51,
      "id": "login-functionality-for-adactin-application;user-enters-username-and-password;;1"
    },
    {
      "cells": [
        "TomJismi87",
        "ADACT123"
      ],
      "line": 52,
      "id": "login-functionality-for-adactin-application;user-enters-username-and-password;;2"
    },
    {
      "cells": [
        "Jomol21",
        "jomol321"
      ],
      "line": 53,
      "id": "login-functionality-for-adactin-application;user-enters-username-and-password;;3"
    },
    {
      "cells": [
        "asdf",
        "123"
      ],
      "line": 54,
      "id": "login-functionality-for-adactin-application;user-enters-username-and-password;;4"
    },
    {
      "cells": [
        "MNOP",
        "00001"
      ],
      "line": 55,
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
  "duration": 506346193,
  "status": "passed"
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
  "duration": 172273990,
  "status": "passed"
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
  "duration": 151561028,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_veryfy_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 862688316,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "User enters username and password",
  "description": "",
  "id": "login-functionality-for-adactin-application;user-enters-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "User enter \"TomJismi87\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "User enter \"ADACT123\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user veryfy valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_the_application()"
});
formatter.result({
  "duration": 533953184,
  "status": "passed"
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
  "duration": 159393535,
  "status": "passed"
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
  "duration": 148781147,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_veryfy_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 1030846287,
  "status": "passed"
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
  "duration": 515979868,
  "status": "passed"
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
  "duration": 157122660,
  "status": "passed"
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
  "duration": 164826980,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_veryfy_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 1675958198,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "User enters username and password",
  "description": "",
  "id": "login-functionality-for-adactin-application;user-enters-username-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "User enter \"TomJismi87\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "User enter \"ADACT123\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user veryfy valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_the_application()"
});
formatter.result({
  "duration": 774604187,
  "status": "passed"
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
  "duration": 158025583,
  "status": "passed"
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
  "duration": 173520306,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_veryfy_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 1425051298,
  "status": "passed"
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
  "duration": 862349602,
  "status": "passed"
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
  "duration": 162550491,
  "status": "passed"
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
  "duration": 151133426,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_veryfy_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 1016894487,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "User enters username and password",
  "description": "",
  "id": "login-functionality-for-adactin-application;user-enters-username-and-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "User enter \"TomJismi87\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "User enter \"ADACT123\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user veryfy valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_the_application()"
});
formatter.result({
  "duration": 602957097,
  "status": "passed"
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
  "duration": 204049400,
  "status": "passed"
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
  "duration": 139193320,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_veryfy_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 1443786251,
  "status": "passed"
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
  "duration": 862712643,
  "status": "passed"
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
  "duration": 251409356,
  "status": "passed"
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
  "duration": 145638226,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_veryfy_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 1036147803,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "User enters username and password",
  "description": "",
  "id": "login-functionality-for-adactin-application;user-enters-username-and-password;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "User enter \"TomJismi87\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "User enter \"ADACT123\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user veryfy valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_the_application()"
});
formatter.result({
  "duration": 514735425,
  "status": "passed"
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
  "duration": 169862765,
  "status": "passed"
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
  "duration": 156401257,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_veryfy_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 1568602976,
  "status": "passed"
});
});