const PORT = 9000
const axios = require('axios');
const cheerio = require('cheerio');
const { response } = require('express');
const express = require('express');

const app = express()
const url = 'https://www.nytimes.com/'
axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []

        $('.indicate-hover', html).each(function() {
            const title = $(this).text()
            //const url = $(this).find('a').attr('href')
            articles.push({
                title,
                // url
            })
        })
        console.log(articles)

    }).catch(error => console.log(error))

app.listen(PORT, () => console.log('server running on PORT ${PORT}'))