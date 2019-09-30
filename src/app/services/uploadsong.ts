export class UploadSong {
  key: string;
  name: string;
  url: string;
  file: File;
  lyrics: String;
  song_name:String;

  constructor(file: File,) {
    this.file = file;
  }
}
