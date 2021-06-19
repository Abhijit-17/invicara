# Author
Abhijit Singh Bhadoria
# invicara
invicara test

# Depecencies 
1 - Node JS version 14.15.0

# To run the project
1 - Download or clone the project from - https://github.com/Abhijit-17/invicara

2 - In the project folder (root directory), run command `npm i`

3 - To create API server, run command `npm start`

4 - This will create an http server on your local machine, which will be listening on the port 5000

5 - Use postman to test the routes

    1 - First route is '/' to get a greeting message

    2 - Secont route is '/forecast' , it takes two query parameters

        1 - city [String, valid city name]

        2 - orderBy [String, one of the two values 'asc' or 'desc']

        example - http://localhost:5000/forecast?city=dsfa&orderBy=desc

        Output should be an array of objects, similar to the below result
        
        <
            [
                {
                    "dt": 1624114800,
                    "wind": {
                        "speed": 3.61,
                        "deg": 240
                    },
                    "temp": {
                        "temp": 297.23,
                        "temp_min": 295.43,
                        "temp_max": 297.23,
                        "pressure": 1008,
                        "sea_level": 1008,
                        "grnd_level": 940,
                        "humidity": 87,
                        "temp_kf": 1.8
                    }
                },
                {
                    "dt": 1624125600,
                    "wind": {
                        "speed": 4.16,
                        "deg": 226
                    },
                    "temp": {
                        "temp": 296.45,
                        "temp_min": 294.88,
                        "temp_max": 296.45,
                        "pressure": 1008,
                        "sea_level": 1008,
                        "grnd_level": 940,
                        "humidity": 89,
                        "temp_kf": 1.57
                    }
                }
            ]
         />

6 - To run unit tests, run command `npm run test`