import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {SongService} from '../services/song.service';
import {SongService} from "../services/song.service";

@Component({
  selector: 'app-list-song',
  templateUrl: './list-song.component.html',
  styleUrls: ['./list-song.component.css']
})
export class ListSongComponent implements OnInit {

  fileUploads: any[];

  constructor(private uploadService: SongService) { }


  ngOnInit() {
    // Use snapshotChanges().pipe(map()) to store the key
    this.uploadService.getFileUploads(6).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });
  }

}
