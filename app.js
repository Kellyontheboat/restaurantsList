const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000
const restaurants = require('./public/jsons/restaurant.json').results

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(express.static('public'))

app.get('/',(req,res) => {
  res.redirect('/restaurants') 
})

app.get('/restaurants',(req,res) =>{
  res.render('home', { restaurants })
})

//RESTful routes:home.hbs/input action=“/search”：
app.get('/search', (req, res) => {
  const keyword = req.query.keyword?.trim()
  const filteredRestaurants = keyword
    ? restaurants.filter((restaurant) =>
      Object.values(restaurant).some((value) =>
        typeof value === 'string' &&
        value.toLowerCase().includes(keyword.toLowerCase())
      )
    )
    : restaurants;
    
  res.render('home', { keyword, restaurants: filteredRestaurants })
})

app.get('/restaurants/:id',(req,res) =>{
  const id = req.params.id
  const selectedRestaurant = restaurants.find((restaurant) =>
    restaurant.id.toString() === id
  )
  res.render('detail', {selectedRestaurant})
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})