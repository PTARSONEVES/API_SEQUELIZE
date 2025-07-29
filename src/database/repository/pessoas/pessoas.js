exports.consulta = function () {

  const texto = 'SELECT '+
  '`Pessoa`.`id`, `Pessoa`.`nomepessoa`, `Pessoa`.`tpopessoaid`, `Pessoa`.`cpfpessoa`, `Pessoa`.`cnpjpessoa`, `Pessoa`.`nascpessoa`, '+
  '`Emails`.`id` AS `Emails.id`, `Emails`.`email` AS `Emails.email`, `Emails`.`confirmed` AS `Emails.confirmed`, '+
  '`Pessoatpo`.`id` AS `Pessoatpo.id`, `Pessoatpo`.`tipopessoa` AS `Pessoatpo.tipopessoa`, '+
  '`Midia`.`id` AS `Midia.id`, `Midia`.`pessoaid` AS `Midia.pessoaid`, `Midia`.`tpomidiaid` AS `Midia.tpomidiaid`, '+
  '`Midia->Midiatpo`.`id` AS `Midia.Midiatpo.id`, `Midia->Midiatpo`.`namemidia` AS `Midia.Midiatpo.namemidia` '+
  'FROM `Pessoas` AS `Pessoa` '+
  'LEFT OUTER JOIN `Emails` AS `Emails` ON `Pessoa`.`id` = `Emails`.`PessoaId` '+
  'LEFT OUTER JOIN `Pessoatpos` AS `Pessoatpo` ON `Pessoa`.`tpopessoaid` = `Pessoatpo`.`id` '+
  'LEFT OUTER JOIN `Midias` AS `Midia` ON `Pessoa`.`id` = `Midia`.`PessoaId` '+
  'LEFT OUTER JOIN `midiatpos` AS `Midia->Midiatpo` ON `Midia`.`tpomidiaid` = `Midia->Midiatpo`.`id` '+
  'ORDER BY `Pessoa`.`id` ASC';

  return texto;

};
