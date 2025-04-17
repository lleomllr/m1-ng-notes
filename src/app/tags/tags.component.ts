import { Component } from '@angular/core';
import { StorageService } from '../storage.service';
import { Tag } from '../tag';
import { FormsModule } from '@angular/forms';
import { TagComponent } from '../tag-compo/tag-compo.component';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [FormsModule, TagComponent],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})

export class TagsComponent {
  loaded: boolean = false;
  tags: Tag[] = [];
  editing?: Tag;

  constructor(private storage: StorageService){
  }


  ngOnInit(): void {
    this.loadTags();
  }

  loadTags(): void {
    this.tags = this.storage.getTags();
    this.loaded = true;
  }

  dialogAddTag( event :Event ): void {
    event.preventDefault();  
    const tagName = window.prompt('Ajouter un nouveau tag');
    if (tagName && tagName.trim() !== ''){
      const newTag : Tag = new Tag(tagName);
      this.storage.addTag(newTag);
      this.loadTags();
    }
  }

  deleteTag(tagToDelete: Tag): void {
    const confirmed = window.confirm(`Supprimer le tag "${tagToDelete.name}" ?`);
    if (confirmed) {
      this.storage.deleteTag(tagToDelete);
      this.loadTags();
    }
  }
  
  handleEditConfirmEvent(): void {
    if(this.editing === undefined) return; 
  
    if(this.editing.id !== null) {
      const existingTagIndex: number = this.tags.findIndex(t => t.id === this.editing!.id);
  
      if(existingTagIndex !== -1) {
        this.tags[existingTagIndex].color = this.editing!.color;
        this.tags[existingTagIndex].name = this.editing!.name;
      } else {
        this.tags.push(this.editing);
      }

      this.saveTag(); 
      this.editing = undefined;
    }
  }
  
  handleEditCancelEvent(): void {
    this.editing = undefined;
    this.loadTags();
  }
  
  updateEditedTag(tag: Tag): void {
    this.editing = tag;
  }
    
  saveTag(): void {
    if (!this.editing) return;
  
    if (this.editing.id === 0) {
      this.editing.id = this.tags.length > 0 ? Math.max(...this.tags.map(t => t.id)) + 1 : 1;
      this.storage.addTag(this.editing);
    } else {
      this.storage.updateTag(this.editing);
    }
  
    this.loadTags();
  }

  startCreateTag(event : Event) : void {
    event.preventDefault(); 
    this.editing = new Tag('', '#000000', 0); 
  } 
}
