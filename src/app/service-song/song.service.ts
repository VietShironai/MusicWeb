import {Injectable} from '@angular/core';
import {Uploadsong} from './uploadsong';
import {Observable} from 'rxjs';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private basePath = '/songs';

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) {
  }

  pushFileToStrage(fireUpload: Uploadsong): Observable<number> {
    const filePath = `${this.basePath}/${fireUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fireUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          console.log('File available at', downloadURL);
          fireUpload.url = downloadURL;
          fireUpload.name = fireUpload.file.name;
          this.saveFileData(fireUpload);
        });
      })
    ).subscribe();
    return uploadTask.percentageChanges();
  }

  private saveFileData(fileUpload: Uploadsong) {
    this.db.list(this.basePath).push(fileUpload);
  }

  getFileUpload(numberItems): AngularFireList<Uploadsong> {
    return this.db.list(this.basePath, ref => ref.limitToLast(numberItems));
  }

  deleteFileUpload(fileUpload: Uploadsong) {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error));
  }

  private deleteFileDatabase(key: string) {
    return this.db.list(this.basePath).remove(key);
  }

  private deleteFileStorage(name: string) {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }
}
