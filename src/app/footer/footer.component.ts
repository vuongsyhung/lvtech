import { Component } from '@angular/core';

@Component({
  selector: 'Sotatek-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  vshtime: number = new Date().getFullYear();
}
