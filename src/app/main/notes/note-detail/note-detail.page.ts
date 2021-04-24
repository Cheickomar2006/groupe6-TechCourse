import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../note.model';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.page.html',
  styleUrls: ['./note-detail.page.scss'],
})
export class NoteDetailPage implements OnInit {

  selectedNote: Note;
  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
  ) { }

  presentPopup(){
    this.noteService.presentPopover("click");
  }


  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      let id =+ paramMap.get("noteId");
      this.selectedNote = this.noteService.getOneNote(id);
    });
  }


}
