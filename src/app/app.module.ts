import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { CharactersModule } from '@pages/characters/characters.module';
import { HomeModule } from '@pages/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { StudentsModule } from '@pages/students/students.module';
import { TeachersModule } from '@pages/teachers/teachers.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    HomeModule,
    CharactersModule,
    StudentsModule,
    TeachersModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
