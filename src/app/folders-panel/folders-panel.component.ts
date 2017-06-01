import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { ModalDirective } from 'ng2-bootstrap/modal';

import { Folder } from '../models/folder';

@Component({
  selector: 'folders-panel',
  templateUrl: './folders-panel.component.html',
  styleUrls: ['./folders-panel.component.css']
})
export class FoldersPanelComponent implements OnInit {
  folders: Folder[];
  modal: { title: string, msg: string };

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

  public hideChildModal(): void {
    this.childModal.hide();
  }

  ngOnInit() {
  }

}
