import { Component } from '@angular/core';
import { Notes } from '../note.model';
import { StorageService } from '../storage.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  notes : Notes[] = []; 

  constructor(private storage: StorageService) {}

  ngOnInit() : void {
    this.notes = this.storage.getNotes(); 
  }

  getTagName(notes : Notes) : string {
    return notes.tags.length > 0 ? notes.tags[0].name : '(Aucun tag)'; 
  }

  getTagColor(notes : Notes) : string {
    return notes.tags.length > 0 ? notes.tags[0].color : '#888'; 
  }
}
