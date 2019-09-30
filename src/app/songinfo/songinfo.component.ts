import { Component, OnInit } from '@angular/core';
import {UploadSong} from '../services/uploadsong';
import {SongService} from '../services/song.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-songinfo',
  templateUrl: './songinfo.component.html',
  styleUrls: ['./songinfo.component.css']
})
export class SonginfoComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: UploadSong;
  percentage: number;
  song_detailForm: FormGroup;

  constructor(private uploadService: SongService,
              private fb: FormBuilder,
              ) {
  }

  ngOnInit() {
    this.song_detailForm= this.fb.group({
      song_name: [''],
      lyrics: ['']
    })
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
    const {value}= this.song_detailForm;

    this.currentFileUpload = new UploadSong(file);
    const data= {
      ...value, ...this.currentFileUpload
    }
    this.uploadService.pushFileToStorage(data).subscribe(
      percentage => {
        // @ts-ignore
        sessionStorage.setItem('song_id', percentage.id);
        console.log(sessionStorage.getItem('song_id'));
        this.percentage = Math.round(percentage);
      },
      error => {
        console.log(error);
      }
    );
  }
}
