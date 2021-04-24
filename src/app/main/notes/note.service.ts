import { Inject, Injectable } from '@angular/core';
import { Note } from './note.model';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service'
import { PopupPage } from 'src/app/popup/popup.page';
import { PopoverController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class NoteService {

  id: number;
  private notes: Note[];
  note: Note;
  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private popoverController: PopoverController
  ) {
    this.readNotes("notes");
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopupPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  //Lire les notes déjàs enregistrées
  readNotes(key: string){
    this.notes = this.storage.get(key) || [];;
  }

  //Enregistrer une note
  saveNote(key: string, note: Note){
    this.notes.push(note);
    this.storage.set(key, this.notes);
  }

  deleteNote(id: number, key: string){
    this.notes.forEach((value, index)=>{
      if(value.id==id){
        this.notes.splice(index,1);
        this.storage.set(key, this.notes);
      }
    });
  }

  getNotes(){
    return this.notes;
  }

  getOneNote(id: number){
    this.id=id;
    this.note = this.notes.find(note=>note.id==id);
    return this.note;
  }
}
