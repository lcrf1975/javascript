//Find diagnostics ids:
api.call(
  'Get',
  {
    typeName: 'Diagnostic',
    search: { name: '%Odometer%' },
  },
  function (result) {
    for (var i = 0; i < 10; i++) {
      console.log(result[i].name, result[i].id);
    }
  },
  function (e) {
    console.error('Failed:', e);
  }
);