import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: Service[] = [
    {
      name: "API Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      cover: "assets/images/apigee.png",
      tasks: [
        "Build and scale API programs with full API life cycle capabilities",
        "Drive consumption of APIs with flexible developer portal options",
        "Gain actionable insights across the entire API value chain",
        "Monetize API products and maximize the business value of your digital assets"
      ]
    },
    {
      name: "Software Craftmanship",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      cover: "assets/images/software.png",
      tasks: [
        "Intervention sur toutes les phases de vos projets autour des technologies .NET et JEE",
        "Création et maintenance de sites Web selon les nouvelles tendances (responsive, one-page)",
        "Pratique de l’agilité, TDDs",
      ]
    },
    {
      name: "Cloud and DevOps",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      cover: "assets/images/devops.png",
      tasks: [
        "Build and scale API programs with full API life cycle capabilities",
        "Drive consumption of APIs with flexible developer portal options",
        "Gain actionable insights across the entire API value chain",
        "Monetize API products and maximize the business value of your digital assets "
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
