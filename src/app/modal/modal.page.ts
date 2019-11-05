import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { async } from "@angular/core/testing";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.page.html",
  styleUrls: ["./modal.page.scss"]
})
export class ModalPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async closeModal() {
    await this.modalController.dismiss();
  }
}
