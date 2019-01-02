import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { RoutingModule } from './modules/routing/routing.module';

import { JsonService } from './services/json.service';

import { CapitalizePipe } from './pipes/capitalize.pipe';

import { AppComponent } from './app.component';
import { CommentsComponent } from './components/comments/comments.component';
import { HomeComponent } from './components/home/home.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotosComponent } from './components/photos/photos.component';
import { TodosComponent } from './components/todos/todos.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { UserComponent } from './components/user/user.component';
import { PhotoComponent } from './components/photo/photo.component';
import { PostComponent } from './components/post/post.component';
import { HeigthEqualsWidthComponent } from './components/heigth-equals-width/heigth-equals-width.component';
import { AudioComponent } from './components/audio/audio.component';
import { PhotoMiniatureComponent } from './components/photos/photo-miniature/photo-miniature.component';
import { AlbumComponent } from './components/album/album.component';
import { AlbumMiniatureComponent } from './components/albums/album-miniature/album-miniature.component';
import { PostMiniatureComponent } from './components/posts/post-miniature/post-miniature.component';
import { DeletAllDialogComponent } from './components/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommentsComponent,
    AlbumsComponent,
    PhotosComponent,
    TodosComponent,
    UsersComponent,
    PostsComponent,
    UserComponent,
    PhotoComponent,
    PostComponent,
    HeigthEqualsWidthComponent,
    AudioComponent,
    PhotoMiniatureComponent,
    AlbumComponent,
    AlbumMiniatureComponent,
    PostMiniatureComponent,
    CapitalizePipe,
    DeletAllDialogComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule
  ],
  entryComponents: [DeletAllDialogComponent],
  providers: [JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
