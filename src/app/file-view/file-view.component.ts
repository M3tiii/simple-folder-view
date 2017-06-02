import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'file-view',
  templateUrl: './file-view.component.html',
  styleUrls: ['./file-view.component.css'],
  inputs: ['file']
})
export class FileViewComponent implements OnInit {

  private file: any;
  private editedName: string;

  @Output() selectEmitter = new EventEmitter();
  @Output() deleteEmitter = new EventEmitter();
  @Output() modalEmitter = new EventEmitter();

  constructor() { }

  private onSelect(event) {
    this.selectEmitter.emit(this.file);
  }

  private onSave() {
    if (this.editedName) {
      this.file.name = this.editedName;
      this.file.edited = false;
      this.file.selected = false;
    } else {
      this.modalEmitter.emit({ title: "WARNING", msg: "File name can not by empty.", confirm: false });
    }
  }

  private onCancel() {
    this.editedName = this.file.name;
    this.file.edited = false;
    if (!this.file.name) {
      this.deleteEmitter.emit(this.file);
    }
  }

  ngOnInit() {
    this.editedName = this.file.name;
  }

}
