import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <h2>
      contact works!
</h2>
<a routerLink="add">Add Contact</a>
<br>
<a routerLink="edit/1">Edit Contact</a>

  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

}
