
Visitar la versión original para ver la instalación y estado del proyecto   
[![Build Status](https://travis-ci.org/mrin9/Angular-SpringBoot-REST-JWT.svg?branch=master)](https://travis-ci.org/mrin9/Angular-SpringBoot-REST-JWT)

## Origen y objetivo de este proyecto
Este proyecto se inicia a partir de [este otro](https://github.com/mrin9/Angular-SpringBoot-REST-JWT). Los objetivos de este proyecto son:

* Partiendo del proyecto original, separaremos la parte front y la de back en dos proyectos. En el proyecto original la parte front se encuentra en el path webui.
* El proyecto para back se puede ver [aquí] (https://github.com/antonio63j/Angular-SpringBoot-REST-JWT-back)

* Pasar de una base de datos en memoria a MySQL


## Versiones de las herramientas front con las que se ha podido arrancar

Angular CLI: 1.7.2

Node: 8.16.0

OS: win32 x64

Angular: 5.2.2

... animations, common, compiler, compiler-cli, core, forms

... http, language-service, platform-browser

... platform-browser-dynamic, router


@angular/cli: 1.7.2

@angular-devkit/build-optimizer: 0.3.2

@angular-devkit/core: 0.3.2

@angular-devkit/schematics: 0.3.2

@ngtools/json-schema: 1.2.0

@ngtools/webpack: 1.10.1

@schematics/angular: 0.3.2

@schematics/package-update: 0.3.2

typescript: 2.6.2

webpack: 3.11.0

## Demo para desarrolladores sobre proyecto original
I am hosting the app on free tire of google cloud and heroku. These instances shuts down automatically after some time of inactivity, and starts up when someone access it. This messesup the H2 memory db.

the Heroku instance can automatically restart the app includining the H2 database, so if login is not working in google cloud instance try Heroku instance, the startup takes a long time so be patient.

### Google Cloud Hosted (obsoleto)
- [WebApp](http://104.196.240.40:9119)
- [Api Doc (swagger)](http://104.196.240.40:9119/swagger/index.html)
- [Api Doc (redoc)](http://104.196.240.40:9119/redoc/index.html)

### Heroku Hosted
- [WebApp](https://infomud.herokuapp.com/)
- [Api Doc (swagger)](https://infomud.herokuapp.com/swagger/index.html)

## Todas las herramientas

### En front
Component         | Technology
---               | ---
Frontend          | [Angular 5](https://github.com/angular/angular)
Client Build Tools| [angular-cli](https://github.com/angular/angular-cli), Webpack, npm

### En back
Component         | Technology
---               | ---
Backend (REST)    | [SpringBoot](https://projects.spring.io/spring-boot) (Java)
Security          | Token Based (Spring Security and [JWT](https://github.com/auth0/java-jwt) )
REST Documentation| [Swagger UI / Springfox](https://github.com/springfox/springfox) and [ReDoc](https://github.com/Rebilly/ReDoc)
REST Spec         | [Open API Standard](https://www.openapis.org/) 
~~In Memory DB~~      | ~~H2~~ MYSQL
Persistence       | JPA (Using Spring Data)
Server Build Tools| Maven(Java) or Gradle



## Folder Structure del proyecto original
```bash
PROJECT_FOLDER
│  README.md
│  pom.xml           
│  build.gradle
└──[src]      
│  └──[main]      
│     └──[java]      
│     └──[resources]
│        │  application.properties #contains springboot cofigurations
│        │  schema.sql  # Contains DB Script to create tables that executes during the App Startup          
│        │  data.sql    # Contains DB Script to Insert data that executes during the App Startup (after schema.sql)
│        └──[public]    # keep all html,css etc, resources that needs to be exposed to user without security
│
└──[target]              #Java build files, auto-created after running java build: mvn install
│  └──[classes]
│     └──[public]
│     └──[webui]         #webui folder is created by (maven/gradle) which copies webui/dist folder 
│                        #the application.properties file list webui as a resource folder that means files can be accesses http://localhost/<files_inside_webui> 
│
└──[webui] (en app orginal)
   │  package.json     
   │  angular-cli.json   #ng build configurations)
   └──[node_modules]
   └──[src]              #frontend source files
   └──[dist]             #frontend build files, auto-created after running angular build: ng -build
```

## Prerequisites
Ensure you have this installed before proceeding further
- Java 8
- Maven 3.3.9+ or Gradle 3.3+
- Node 6.0 or above,  
- npm 5 or above,   
- Angular-cli 1.6.3

## About
This is an RESTfull implementation of an order processing app based on Northwind database schema from Microsoft.
The goal of the project is to 
- Highlight techniques of making and securing a REST full app using [SpringBoot](https://projects.spring.io/spring-boot)
- How to consume an RESTfull service and make an HTML5 based Single Page App using [Angular 5](https://github.com/angular/angular)

## Features of the Project
* Backend
  * Token Based Security (using Spring security)
  * API documentation and Live Try-out links with Swagger 
  * In Memory DB with H2 
  * Using JPA and JDBC template to talk to relational database
  * How to request and respond for paginated data 

* Frontend
  * Organizing Components, Services, Directives, Pages etc in an Angular App
  * How to chain RxJS Observables (by making sequntial AJAX request- its different that how you do with promises)
  * Techniques to Lazy load Data (Infinite Scroll)
  * Techniques to load large data set in a data-table but still keeping DOM footprint less
  * Routing and guarding pages that needs authentication
  * Basic visulaization

* Build
  * How to build all in one app that includes (database, sample data, RESTfull API, Auto generated API Docs, frontend and security)
  * Portable app, Ideal for dockers, cloud hosting.

## ~~In Memory DB (H2)~~ DB MySql

~~I have included an in-memory database for the application. Database schema and sample data for the app is created everytime the app starts, and gets destroyed after the app stops, so the changes made to to the database are persistent only as long as the app is running.~~

Creation of database schema and data are done using sql scripts that Springs runs automatically. 

To modify the database schema or the data you can modify [schema.sql](./src/main/resources/schema.sql) and [data.sql](./src/main/resources/data.sql) which can be found at `/src/main/resources`

## Spring security
Security is **enabled** by default, to disable, you must comment [this line](./src/main/java/com/app/config/SecurityConfig.java#L15) in `src/main/java/com/config/SecurityConfig.java`<br/>
When security is enabled, none of the REST API will be accessesble directly.

To test security access `http://localhost:9119/version` API and you should get a forbidden/Access denied error.<br/>
In order to access these secured API you must first obtain a token. Tokens can be obtained by passing a valid userid/password, userid and password are stored in ~~H2~~ database. To add/remove users, modify the [data.sql](./src/main/resources/data.sql#L3)
couple of valid users and their passwords are `demo\demo` and `admin\admin`
<br/>

To get a token call `POST /session` API with a valid userid and password.
for example you may you can use the folliwing curl command to get a token 
```
curl -X POST --header 'Content-Type: application/json' -d '{ "username":"demo", "password":"demo" }' 'http://localhost:9119/session'
```
the above curl command will return you a token, which should be in the format of `xxx.xxx.xxx`. This is a JSON web token format. 
You can decode and validate this token at [jwt.io wesite](https://jwt.io/). Just paste the token there and decode the information.
to validate the token you should provide the secret key which is `mrin` that i am using in this app.
<br/>
after receiving this token you must provide the token in the request-header of every API request. For instance try the `GET /version` api using the below 
curl command (replace xxx.xxx.xxx with the token that you received in above command) and you should be able to access the API.
```
curl -X GET --header 'Accept: application/json' --header 'Authorization: xxx.xxx.xxx' 'http://localhost:9119/version'
```

## Build Frontend (optional step)
Code for frontend is allready compiled and saved under the ```webui/dist``` 
when building the backend app (using maven) it will pickup the code from ```webui/dist```. However if you modified the frontend code and want your changes to get reflected then you must build the frontend 
```bash
### Navigate to PROJECT_FOLDER/webui (should contain package.json )
npm install
# build the project (this will put the files under dist folder)
ng build --prod --aot=true (en proyecto original)
npm run-script ng build --prod --base-href /Angular-SpringBoot-REST-JWT/ (solo front)
```

## Build Backend (SpringBoot Java)
```bash
Maven Build : Navigate to the root folder where pom.xml is present 
mvn clean install

OR

Gradle Build : Navigate to the root folder where build.gradle is present 
gradle build
```

### Start the API and WebUI server
```bash
# Start the server (9119)
# port and other configurations for API servere is in [./src/main/resources/application.properties](/src/main/resources/application.properties) file

# If you build with maven jar location will be 
java -jar ./target/app-1.0.0.jar

# If you build with gradle jar location will be 
java -jar ./build/libs/app-1.0.0.jar
```

### Accessing Application
Cpmponent         | URL                                      | Credentials
---               | ---                                      | ---
Frontend          |  http://localhost:9119                   | `demo/demo`
H2 Database       |  http://localhost:9119/h2-console        |  Driver:`org.h2.Driver` <br/> JDBC URL:`jdbc:h2:mem:demo` <br/> User Name:`sa`
Swagger (API Ref) |  http://localhost:9119/swagger-ui.html   | 
Redoc (API Ref)   |  http://localhost:9119/redoc/index.html  |
Swagger Spec      |  http://localhost:9119/api-docs          |


**To get an authentication token** 
```bash
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"username": "demo", "password": "demo" }' 'http://localhost:9119/session'
```
or POST the username and password to http://localhost:9119/session

after you get the authentication token you must provide this in the header for all the protected urls 

```bash
curl -X GET --header 'Accept: application/json' --header 'Authorization: [replace this with token ]' 'http://localhost:9119/version'
```


**To get an authentication token** 



### Screenshots
#### Login
![Dashboard](/screenshots/login.png?raw=true)
---
#### Dashboard - Order Stats
![Dashboard](/screenshots/order_stats.png?raw=true)
---
#### Dashboard - Product Stats
![Dashboard](/screenshots/product_stats.png?raw=true)
---
#### Orders
![Dashboard](/screenshots/orders.png?raw=true)
---
#### Orders Details
![Dashboard](/screenshots/order_details.png?raw=true)
---
#### Customers
![Dashboard](/screenshots/customers.png?raw=true)
---
#### API Docs - With Live Tryout
![Dashboard](/screenshots/api_doc.png?raw=true)
---
#### API Docs - For redability
![Dashboard](/screenshots/api_doc2.png?raw=true)
---
#### Database Schema
![ER Diagram](/screenshots/db_schema.png?raw=true)

## Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="graphs/contributors"><img src="https://opencollective.com/angular-springboot-rest-jwt/contributors.svg?width=890" /></a>


