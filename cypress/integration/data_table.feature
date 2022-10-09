Feature: Login Manager Passwords

@manager_id
Scenario: Manager_Id1
Given url git
Given dataları kullanarak sayfaya gir
|username|password|
|Manager|Manager1!|
Given login butonuna tikla
Then sayfaya girildigini onayla

@manager_id  @smoke
Scenario: Manager_Id2
Given url git
Given dataları kullanarak sayfaya gir
|username|password|
|Manager2|Manager2!|
Given login butonuna tikla
Then sayfaya girildigini onayla