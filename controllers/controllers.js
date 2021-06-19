/***
 * routes handlers
 */

// Dependencies
const axios = require('axios')

// export the controllers (route handlers)
module.exports = {
    // welcome message
    greeting(req, res, next) {
        res.send({ 'message': 'Welcome to the Invicara Weather App' })
    },

    // forecast report
    getForecast(req, res, next) {
        let { city, orderBy } = req.query
        city = city && city.trim().length > 0 ? city.trim() : false
        orderBy = orderBy && orderBy.trim().length > 0 && ['ASC', 'DESC'].includes(orderBy.trim().toUpperCase()) ? orderBy.trim().toUpperCase() : false
        if (city && orderBy) {
            const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=0049058f942c6a19bfa550036cbcb840`
            axios.get(apiUrl)
                .then(response => {
                    const status = response.status
                    const data = response.data.list.map(elem => {
                        const { dt, main, wind } = elem
                        delete wind.gust
                        delete main.feels_like
                        return {
                            dt,
                            wind,
                            temp: main
                        }
                    }).sort((prev, next) => {
                        if (orderBy === 'ASC') {
                            return prev.dt - next.dt
                        } else {
                            return next.dt - prev.dt
                        }
                    })
                    res.status(200).send(data)
                })
                .catch(next)
        } else {
            res.status(400).send({ 
                'error': 'mandatory data not provided -- \'city\' and \'orderBy\', \'orderBy\' only accepts one of the two values \'asc\' or \'desc\'' 
            })
        }
    }
}

