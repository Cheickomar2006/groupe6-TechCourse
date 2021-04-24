import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Note } from './note.model';
import { NoteService } from './note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  notes: Note[];
  constructor(
    private noteService: NoteService,
    private menu: MenuController
  ) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  ngOnInit() {
    this.notes = this.noteService.getNotes();
  }

}
