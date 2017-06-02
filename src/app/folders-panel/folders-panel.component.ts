import { Component, ViewChild } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { ModalDirective } from 'ng2-bootstrap/modal';
import { Folder } from '../models/folder';

@Component({
  selector: 'folders-panel',
  templateUrl: './folders-panel.component.html',
  styleUrls: ['./folders-panel.component.css']
})
export class FoldersPanelComponent {
  private folders: Folder[];
  private modal: { title: string, msg: string, confirm: boolean, callback: any };
  private modalCallback: Promise<any>;

  @ViewChild('childModal') public childModal: ModalDirective;

  constructor(private service: LoaderService) {
    service.fetch().then(() => {
      this.folders = service.folders;
      console.log(this.folders);
    })
  }

  public showModal(modal) {
    this.modal = modal;
    this.childModal.show();
  }

  public modalConfirm() {
    this.modal.callback();
    this.hideChildModal();
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }
}
