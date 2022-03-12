# TagmangoBackend

## Problem Statement

 - Need email scheduling mechanism where I can schedule email at a particular time.
 - We need a report that every request you made is successful or there is an error.
 - You can use any SMTP email system. (Like nodemailer or Gmail API)
 - We will send the following request from the postman
 - You can’t use any job scheduling library (Ex- Agenda, Bull). You have to build the system from scratch.


## API Reference

#### Post Data

```http
  POST /user
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_id` | `string` | **Required**. Your API key |
| `to` | `string` | **Required**. User Email Id |
| `from` | `string` | **Default**. Default Email Id |
| `time` | `string` | **Required**. Default ="now" || "Month Date Year hh:mm:ss" |
| `subject` | `string` | **Required**. Subject of Mail |
| `text` | `string` | **Required**. Message text |

## Instructions To follow

 - Add your nodemail email id in Default
 - npm install
 - npm start
 - Follow the time formate in this manner-"Mar 12 2022 15:17:00"
 
 


## Screenshots

![App Screenshot](https://i.ibb.co/VH32Zgp/Screenshot-2022-03-12-at-3-16-49-PM.png)

![App Screenshot](https://i.ibb.co/b6Ldk0d/Screenshot-2022-03-12-at-3-16-30-PM.png)

![App Screenshot](https://i.ibb.co/VH32Zgp/Screenshot-2022-03-12-at-3-16-49-PM.png)

![App Screenshot](https://i.ibb.co/b6Ldk0d/Screenshot-2022-03-12-at-3-16-30-PM.png)
