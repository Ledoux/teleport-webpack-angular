System.config({
  transpiler: 'typescript',
  typescriptOptions: { emitDecoratorMetadata: true },
  packages: {'app': {defaultExtension: 'ts'}},
  map: { 'app': './angular' }
});
System.import('angular/main')
      .then(null, console.error.bind(console));
