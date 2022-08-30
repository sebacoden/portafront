import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SkillsComponent } from '../skills/skills.component';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [SkillsComponent],
  exports: [Exportarskills],
  bootstrap: [SkillsComponent]
})
export class Exportarskills {}
