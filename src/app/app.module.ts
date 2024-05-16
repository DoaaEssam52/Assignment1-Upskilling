import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AboutCardComponent } from './components/about/about-card/about-card.component';
import { ServicesComponent } from './components/services/services.component';
import { ServiceCardComponent } from './components/services/service-card/service-card.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillComponent } from './components/skills/skill/skill.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogCardComponent } from './components/blog/blog-card/blog-card.component';
import { EducationComponent } from './components/education/education.component';
import { EducationCardComponent } from './components/education/education-card/education-card.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ExperienceCardComponent } from './components/experience/experience-card/experience-card.component';
import { WorkComponent } from './components/work/work.component';
import { WorkCardComponent } from './components/work/work-card/work-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SideBarComponent,
    AboutCardComponent,
    ServicesComponent,
    ServiceCardComponent,
    SkillsComponent,
    SkillComponent,
    HeaderComponent,
    ContactComponent,
    BlogComponent,
    BlogCardComponent,
    EducationComponent,
    EducationCardComponent,
    ExperienceComponent,
    ExperienceCardComponent,
    WorkComponent,
    WorkCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
