import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FolderViewComponent } from './folder-view/folder-view.component';
import { FileViewComponent } from './file-view/file-view.component';

import { LoaderService } from './services/loader.service';

import { ModalModule } from 'ng2-bootstrap';
import { FoldersPanelComponent } from './folders-panel/folders-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    FolderViewComponent,
    FileViewComponent,
    FoldersPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot()
  ],
  providers: [LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
