exports.create = (req, res) => {
  client = req.body
  console.log(client.run)
  nacionalidad = "Chileno"
  req.getConnection((err, conn) => {
    conn.query('SELECT DISTINCT idHorario, Fecha, Hora_Inicio, Hora_Termino FROM horario inner join fecha on idFecha = Fecha_idFecha inner join hora on idHora = Hora_idHora WHERE NOT EXISTS (SELECT * FROM agenda WHERE agenda.Horario_idHorario = horario.idHorario) and timestampdiff(minute, now(), concat_ws(" ",Fecha, Hora_Inicio)) >= 59 order by Fecha asc, Hora_Inicio asc;', (err, hours) => {
      if(err) {
        res.json(err);
      }
      res.render('user/schedule', { hours, client, nacionalidad })
    });
  })
  return client, nacionalidad;
};

exports.createForeign = (req, res) => {
  client = req.body
  console.log(client)
  nacionalidad = "Extranjero"
  req.getConnection((err, conn) => {
    conn.query('SELECT DISTINCT idHorario, Fecha, Hora_Inicio, Hora_Termino FROM horario inner join fecha on idFecha = Fecha_idFecha inner join hora on idHora = Hora_idHora WHERE NOT EXISTS (SELECT * FROM agenda WHERE agenda.Horario_idHorario = horario.idHorario) and timestampdiff(minute, now(), concat_ws(" ",Fecha, Hora_Inicio)) >= 59 order by Fecha asc, Hora_Inicio asc;', (err, hours) => {
      if(err) {
        res.json(err);
      }
      res.render('user/schedule', { hours, client, nacionalidad })
    });
  })
  return client, nacionalidad;
};
