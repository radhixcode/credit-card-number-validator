# Credit Card Processing

## Run Node server project locally

* Run the command `npm install` to download the required dependencies.
* Run web server using `node app.js` command
* Visit `http://localhost:3001` address on browser.

## Testing
* `npm test` check entire suit OR `npm test <filename>` to run any individual test file. Eg:
    <br />`npm test validateCardNumber` 
    <br />`npm test creditCardRoutes` 

* Postman collecton `bank_nodejs.postman_collection.json` in the repo

* Available REST endpoints
    * `GET http://localhost:3001/credit-card/getall`


    * `POST http://localhost:3001/credit-card/add`
    <br /><br />body:
    ```
    {
        "card_holder_name" : "anna",
        "card_number" : 377261620324999,
        "card_limit" : 2000
    }
    ```

* cURL commands
```
curl --location --request GET 'http://localhost:3001/credit-card/getall'
```

```
curl --location --request POST 'http://localhost:3001/credit-card/add' \
--header 'Content-Type: application/json' \
--data-raw '{
    "card_holder_name" : "anna",
    "card_number" : 3333444411112222,
    "card_limit" : 2000
}'
```
