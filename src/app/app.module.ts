import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { LayoutModule } from '@angular/cdk/layout';

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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:id', component: AlbumComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'photos/:id', component: PhotoComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserComponent },
  { path: 'height', component: HeigthEqualsWidthComponent },
  { path: 'audio', component: AudioComponent },
];

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
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule
  ],
  providers: [JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
