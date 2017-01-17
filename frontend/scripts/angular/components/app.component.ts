import { Component, View } from "angular2/core"

@Component({
   selector: 'app_div'
})

@View({
  template: '<h2>{{name}} Angular 2 App</h2>'
})

export class AppComponent {
  name = 'Teleport'
}
