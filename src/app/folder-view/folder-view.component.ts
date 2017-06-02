import { Component, Output, EventEmitter } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { Folder } from '../models/folder';
import { File } from '../models/file';

@Component({
  selector: 'folder-view',
  templateUrl: './folder-view.component.html',
  styleUrls: ['./folder-view.component.css'],
  inputs: ['folder']
})
export class FolderViewComponent {

  private folder: Folder;
  private selectAllValue: boolean = false;
  private isAnySelected: number = 0;
  private isCreatedFile: boolean = false;

  @Output() modalEmitter = new EventEmitter();

  constructor(private service: LoaderService) { }

  private showModal(modal) {
    this.modalEmitter.emit(modal);
  }

  private onSelectAll() {
    this.folder.files.forEach((file) => {
      file.selected = this.selectAllValue;
    });
    this.refreshSelect();
  }

  private refreshSelect(file: File = null) {
    this.isAnySelected = this.getSelectedFiles().length;
    const isAllSelected = this.isAnySelected === this.folder.files.length;
    this.selectAllValue = this.isAnySelected ? (isAllSelected ? true : this.selectAllValue) : false;
  }

  private onRenameSelected() {
    this.getSelectedFiles().forEach(file => file.edited = file.selected);
  }

  private onDeleteSelected() {
    this.showModal({ title: "DELETE", msg: "Are you sure you want to delete selected files?", confirm: true, callback: this.confirmedDelete.bind(this) });
  }

  private confirmedDelete() {
    this.getSelectedFiles().forEach(file => this.deleteFile(file));
    this.refreshSelect();
  }

  private onCreateFile() {
    this.isCreatedFile = true;
    this.folder.files.unshift(<File>{ edited: true });
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
}
