import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoaderService } from '../services/loader.service';

import { Folder } from '../models/folder';
import { File } from '../models/file';

@Component({
  selector: 'folder-view',
  templateUrl: './folder-view.component.html',
  styleUrls: ['./folder-view.component.css'],
  inputs: ['folder']
})
export class FolderViewComponent implements OnInit {
  folder: Folder;
  selectAllValue: boolean = false;
  isAnySelected: boolean = false;
  isCreatedFile: boolean = false;

  @Output() modalEmitter = new EventEmitter();

  constructor(private service: LoaderService) { }

  modal(a) {
    this.modalEmitter.emit(a);
  }

  private onSelectAll() {
    this.folder.files.forEach((file) => {
      file.selected = this.selectAllValue;
    });
    this.refreshSelect();
  }

  private refreshSelect(file: File = null) {
    this.isAnySelected = this.getSelectedFiles().length > 0;
    this.selectAllValue = this.isAnySelected ? this.selectAllValue : false;
  }

  private onRenameSelected() {
    this.getSelectedFiles().forEach(file => file.edited = file.selected);
  }

  private onDeleteSelected() {
    this.getSelectedFiles().forEach(file => this.deleteFile(file));
    this.refreshSelect();
  }

  private onCreateFile() {
    this.isCreatedFile = true;
    this.folder.files.push(<File>{ edited: true });
  }

  private getSelectedFiles(): File[] {
    return this.folder.files.filter(file => file.selected);
  }

  private deleteFile(file: File) {
    const index = this.folder.files.indexOf(file);
    if (index !== -1) {
      this.folder.files.splice(index, 1);
    }
  }

  ngOnInit() {
  }

}
