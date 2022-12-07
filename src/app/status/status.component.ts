import { Component } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
    <h4>
      404 Error.Requested page not found
    </h4>

    <div>
<router-outlet></router-outlet>
</div>
  `,
  
  styles: [
    "h4{color:red;font-size:50px}"
  ]

  
})
export class StatusComponent {

}
