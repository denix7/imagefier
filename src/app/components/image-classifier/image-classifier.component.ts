import { Component, OnInit } from '@angular/core';
import * as mobilenet from "@tensorflow-models/mobilenet";

@Component({
  selector: 'app-image-classifier',
  templateUrl: './image-classifier.component.html',
  styleUrls: ['./image-classifier.component.css']
})
export class ImageClassifierComponent implements OnInit {

  model: any;
  loading: boolean;
  imgSrc: string = "";
  predictions;
  file;

  constructor() { }

  async ngOnInit() {
    this.loading = true;
    this.model = await mobilenet.load();
    this.loading = false;

  }

  async fileChange(event)
  {
    this.file = await event.target.files[0];

    if(this.file)
    {
      this.read();
    }
  }

  async read(){
    const reader = new FileReader();

      reader.readAsDataURL(this.file);

      reader.onload = async (res:any)=> {
        this.imgSrc = res.target.result; 
  }
}

  async loadPredictions()
  {
    const img = document.getElementById('img');
    this.predictions = await this.model.classify(img);
  }
}
