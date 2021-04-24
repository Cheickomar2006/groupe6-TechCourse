import { Component, OnInit } from '@angular/core';
import { NoteService } from '../main/notes/note.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.page.html',
  styleUrls: ['./popup.page.scss'],
})
export class PopupPage implements OnInit {

  deleteNote(){
    this.noteService.deleteNote(this.noteService.id, "notes");
  }
  constructor(
    private noteService: NoteService
  ) { }

  ngOnInit() {}

}
