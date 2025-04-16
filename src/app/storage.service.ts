import { Injectable } from '@angular/core';
import { Tag } from './tag';
import { Notes } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService { 
  private storage = "tags"; 
  private notesk = "notes"; 
  private tags: Tag[] = []; 
  private notes: Notes[] = [];

  constructor() {
    this.loadTags(); 
  }

  getTags(): Tag[] {
    return this.tags; 
  }

  addTag(tag : Tag) : void {
    const exists = this.tags.some(existingTag => existingTag.name == tag.name); 
    if(!exists){
      this.tags.push(tag); 
      this.saveTags(); 
    } else{
      console.warn('Le tag "${tag.name}" existe déjà.'); 
    }
  }

  deleteTag(tagDelete : Tag) : void {
    this.tags = this.tags.filter(tag => tag.id !== tagDelete.id)
    this.saveTags(); 
  }

  updateTag(updatedTag : Tag) : void {
    const index = this.tags.findIndex(tag => tag.id === updatedTag.id); 
    if(index !== -1){
      this.tags[index] = updatedTag; 
      this.saveTags(); 
    }
  }

  private saveTags() : void {
    localStorage.setItem(this.storage, JSON.stringify(this.tags)); 
  }

  private loadTags(): void {
    const storedTags = localStorage.getItem(this.storage);
    if (storedTags) {
      this.tags = JSON.parse(storedTags);
    }
  }

  getNotes(): Notes[] {
    return this.notes;
  }

  addNote(note: Notes): void {
    const exists = this.notes.some(existingNote => existingNote.title === note.title);
    if (!exists) {
      this.notes.push(note);
      this.saveNotes();
    } else {
      console.warn(`La note "${note.title}" existe déjà.`);
    }
  }

  deleteNote(noteToDelete: Notes): void {
    this.notes = this.notes.filter(note => note.id !== noteToDelete.id);
    this.saveNotes();
  }

  updateNote(updatedNote: Notes): void {
    const index = this.notes.findIndex(note => note.id === updatedNote.id);
    if (index !== -1) {
      this.notes[index] = updatedNote;
      this.saveNotes();
    }
  }

  private saveNotes(): void {
    localStorage.setItem(this.notesk, JSON.stringify(this.notes));
  }

  private loadNotes(): void {
    const storedNotes = localStorage.getItem(this.notesk);
    if (storedNotes) {
      this.notes = JSON.parse(storedNotes);
    }
  }

}
