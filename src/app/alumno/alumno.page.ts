import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ModalPage } from "../modal/modal.page";

@Component({
  selector: "app-alumno",
  templateUrl: "./alumno.page.html",
  styleUrls: ["./alumno.page.scss"]
})
export class AlumnoPage implements OnInit {
  constructor(private modalcontroller: ModalController) {}

  async OpenModal() {
    const modal = await this.modalcontroller.create({ component: ModalPage });
    return await modal.present();
  }

  ngOnInit() {}
}
