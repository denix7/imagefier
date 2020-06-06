import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageClassifierComponent } from './components/image-classifier/image-classifier.component';
import * as mobilenet from '@tensorflow-models/mobilenet';
import { VideoClassifierComponent } from './components/video-classifier/video-classifier.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageClassifierComponent,
    VideoClassifierComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
