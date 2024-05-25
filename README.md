# Motorbike Salon Service

## How to start backend service
Paste into terminal below command
  ```
  docker compose up --build
  ```

After that you will have availability to go to 
- [Admin page](https://localhost:3001/admin)
- [pgAdmin page](https://localhost:5050)
- [API documentation](https://localhost:3001/api)
  
## How to set up pgAdmin server
1. Open PgAdmin in the web browser by visiting [Admin page](https://localhost:3001/admin).
2. Log in using your email and password in the docker-compose.yml file for the pgadmin service.
3. In the left-hand sidebar, click Servers to expand the Servers menu.
4. Right-click on Servers and select Register -> Server.
![General pgadmin server settings page](/images/create-server.png)
5. In the General tab of the Create - Server dialog, we can give the server a name of our choice.
![General pgadmin server settings page](/images/general.png)
6. In the Connection tab, fill in the following details:
![General pgadmin server settings page](/images/connection.png)
7. Click Save to save the server configuration.
