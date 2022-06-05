import { NgModule } from '@angular/core';
import { DownloadComponent } from './download.component';
import { DownloadContentHandler } from './handlers/download-content.handler';
import { ContentPluginManager } from '@rollthecloudinc/content';
import { mfe1DownloadContentPluginFactory } from './app.factories';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DownloadComponent
  ],
  providers: [
    DownloadContentHandler
  ],
  exports: [
    DownloadComponent
  ]
})
export class DownloadModule { 
  constructor(
    cpm: ContentPluginManager,
    downloadHandler: DownloadContentHandler
  ) {
    console.log('register mfe1 download content plugin');
    // @todo: lint not picking up register() because in plugin module base class.
    cpm.register(mfe1DownloadContentPluginFactory({ handler: downloadHandler }));
  }
}
