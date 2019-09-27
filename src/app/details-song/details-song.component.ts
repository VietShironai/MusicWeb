import {Component, Input, OnInit} from '@angular/core';
import {UploadSong} from '../services/uploadsong';
import {SongService} from '../services/song.service';



@Component({
  selector: 'app-details-song',
  templateUrl: './details-song.component.html',
  styleUrls: ['./details-song.component.css']
})
export class DetailsSongComponent implements OnInit {

  msbapDisplayTitle = false;
  msbapDisplayVolumeControls = true;
  @Input() fileUpload: UploadSong;

  constructor(private uploadService: SongService) { }

  ngOnInit() {
  }

  deleteFileUpload(fileUpload) {
    this.uploadService.deleteFileUpload(fileUpload);
  }
}
