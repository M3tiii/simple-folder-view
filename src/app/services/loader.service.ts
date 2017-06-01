import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { File } from '../models/file';
import { Folder } from '../models/folder';

@Injectable()
export class LoaderService {

  folders: Folder[];

  constructor(private http: Http) {
    // this.fetch();

  }
  fetch(): Promise<any> {
    return this.http.get('./assets/folders.json')
      .toPromise()
      .then((res) => {
        this.folders = <Folder[]>res.json();
      });
  }

  addFolder(folder: Folder) {
    // this.folders.push(folder);
  }

  removeFile() {

  }

  get(): any {
    // return this.folder;
  }
}
