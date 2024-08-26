const express = require('express');
const { engine } = require('express-handlebars');
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const url = require('url')
const hoursRoutes = require('./src/routes/hours.routes')
const clientsRoutes = require('./src/routes/clients.routes')
const scheduleRoutes = require('./src/routes/schedule.routes')
const userRoutes = require('./src/routes/user.routes')

const app = express();
const port = 3000;

app.set('views', __dirname + '/src/views')
app.engine('.hbs', engine({
  extname: '.hbs'
}))
app.set('view engine', 'hbs')

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))

app.use(myconnection(mysql, {
  host: 'localhost',
  user:'root',
  password:'',
  port: 3306,
  database: 'solicitud_audiencia',
  dateStrings: 'date',
}))

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.redirect('/horas')
});

app.use('/horas', hoursRoutes);
app.use('/clientes', clientsRoutes);
app.use('/usuario', userRoutes);
app.use('/horario', scheduleRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});