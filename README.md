# motorbike-salon

## How to start backend service
Paste into terminal below command
  ```
  docker compose up --build
  ```

After that you will have availability to go to 
- [Admin page](https://localhost:3000/admin)
- [pgAdmin page](https://localhost:5050)
- [API documentation](https://localhost:3000/api)
  
## How to set up pgAdmin server
1. Open PgAdmin in the web browser by visiting [Admin page](https://localhost:3000/admin).
2. Log in using your email and password in the docker-compose.yml file for the pgadmin service.
3. In the left-hand sidebar, click Servers to expand the Servers menu.
4. Right-click on Servers and select Register -> Server.
5. In the General tab of the Create - Server dialog, we can give the server a name of our choice.
6. In the Connection tab, fill in the following details:
 - Host name/address: db
 - Port: 5432
 - Maintenance database: postgres
 - Username: postgres
 - Password: postgres
7. Click Save to save the server configuration.
![General pgadmin server settings page](/images/general.png "Optional title")
