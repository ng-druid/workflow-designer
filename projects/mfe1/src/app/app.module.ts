import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DownloadComponent } from './download.component';
import { UploadComponent } from './upload.component';
import { DownloadContentHandler } from './handlers/download-content.handler';
import { ContentPluginManager } from '@ng-druid/content';
import { mfe1DownloadContentPluginFactory } from './app.factories';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    DownloadComponent,
    UploadComponent,
  ],
  providers: [
    DownloadContentHandler
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { 
  constructor(
    cpm: ContentPluginManager,
    downloadHandler: DownloadContentHandler
  ) {
    // @todo: lint not picking up register() because in plugin module base class.
    (cpm as any).register(mfe1DownloadContentPluginFactory({ handler: downloadHandler }));
  }
}
