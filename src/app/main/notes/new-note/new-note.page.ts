import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Note } from '../note.model';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.page.html',
  styleUrls: ['./new-note.page.scss'],
})
export class NewNotePage implements OnInit {
  noteForm: FormGroup = this.fb.group({
    titleInput: [[], Validators.required],
    contentInput: [[], Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private noteService: NoteService,
    private toastController: ToastController
  ) { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your note have been saved sucessfully.',
      animated: true,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

  addNote(){
    if(this.noteForm.valid){
      let d = new Date();
      let day = d.getDate() >= 10 ? d.getDate() : "0"+d.getDate();
      let month = (d.getMonth()+1) >= 10 ? (d.getMonth()+1) : "0"+(d.getMonth()+1);
      let hour = d.getHours() >= 10 ? d.getHours() : "0"+d.getHours();
      let minute = d.getMinutes() >= 10 ? d.getMinutes() : "0"+d.getMinutes();
      let dat = day + "/" + month +"/"+d.getFullYear()+"  "+hour+":"+minute;
      let notes = this.noteService.getNotes();
      let noteId = notes.length >0 ? notes[notes.length-1].id+1 : 1;
      let newNote: Note = {
        id: noteId,
        title: this.noteForm.get("titleInput").value,
        content: this.noteForm.get("contentInput").value,
        date: dat
      };
      this.noteService.saveNote("notes", newNote);
        this.noteForm.get("titleInput").setValue("");
        this.noteForm.get("contentInput").setValue("");
    }
  }

}
