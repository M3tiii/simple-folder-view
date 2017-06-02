import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { File } from '../models/file';
import { Folder } from '../models/folder';

@Injectable()
export class LoaderService {

  public folders: Folder[];

  constructor(private http: Http) { }

  public fetch(): Promise<any> {
    return this.http.get('./assets/folders.json')
      .toPromise()
      .then((res) => {
        this.folders = <Folder[]>res.json();
      });
  }

  public save(): any {
    // post modified json to server
  }
}
