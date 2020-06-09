let values = [ 
  {id:1, type: 'external'}, 
  {id:2},
  {id:3, type: 'internal'}
];

values
    .filter(val => val.type === 'external')
    .map(val => console.log(val.id + ':' + val.type));
