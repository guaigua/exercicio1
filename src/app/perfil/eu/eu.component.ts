import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {

  
  productos: any;

  constructor(productos: DataService) {
   
    this.productos = productos.getProducts();
  }

  ngOnInit(): void {
  }

}
