import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})

export class TablaComponent  implements OnInit {

  @Input() datosTabla: any[] = [];

  constructor() { }

  ngOnInit() {}

}
