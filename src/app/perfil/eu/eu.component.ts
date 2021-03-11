import { Component, OnInit } from '@angular/core';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {

  url: string = 'https://github.com/guaigua/';
  urlImage: string = 'https://avatars.githubusercontent.com/u/4908471?s=460&u=74ea969ebb8a126662207b0456a819fba1a801f5&v=4';
  meu_nome: string = 'German Guaigua';
  meu_personalidade: string ='Desenvolvedor Full Stack. Adoro programação e Treekking. Usuário Linux desde 2005, Software Livre, Amante de código aberto. Usuário Debian, Linux';
  campo_texto: string = '';
  valor_salvo: string = '';

  productos: any;
  passwordTrue: boolean = true;
  inputType: string = 'Password';
 
  botaoClicado() {
      alert("Obrigado");
  }



  constructor(productos: DataService) {
   
    this.productos = productos.getProducts();
  }

  ngOnInit(): void {
  }


}
