import {Component, Input, OnInit} from '@angular/core';
import {UploadSong} from '../service-song/uploadsong';
import {SongService} from '../service-song/song.service';

@Component({
  selector: 'app-details-song',
  templateUrl: './details-song.component.html',
  styleUrls: ['./details-song.component.css']
})
export class DetailsSongComponent implements OnInit {

  @Input() fileUpload: UploadSong;

  constructor(private uploadService: SongService) { }

  ngOnInit() {
  }

  deleteFileUpload(fileUpload) {
    this.uploadService.deleteFileUpload(fileUpload);
  }
}
