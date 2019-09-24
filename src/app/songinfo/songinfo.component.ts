import { Component, OnInit } from '@angular/core';
import {UploadSong} from '../services/uploadsong';
import {SongService} from '../services/song.service';

@Component({
  selector: 'app-songinfo',
  templateUrl: './songinfo.component.html',
  styleUrls: ['./songinfo.component.css']
})
export class SonginfoComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: UploadSong;
  percentage: number;

  constructor(private uploadService: SongService) {
  }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new UploadSong(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
      },
      error => {
        console.log(error);
      }
    );
  }
}
