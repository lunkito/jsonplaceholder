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
import { UserComponent } from './components/user/user.component';
import { PhotoComponent } from './components/photo/photo.component';
import { AlbumComponent } from './components/album/album.component';
import { HomeComponent } from './components/layouts/home/home.component';
import { CommentsComponent } from './components/layouts/comments/comments.component';
import { TodosComponent, DeletAllDialogComponent } from './components/layouts/todos/todos.component';
import { HeigthEqualsWidthComponent } from './components/layouts/heigth-equals-width/heigth-equals-width.component';
import { AudioComponent } from './components/layouts/audio/audio.component';
import { PhotosComponent } from './components/layouts/photos/photos.component';
import { PostsComponent } from './components/layouts/posts/posts.component';
import { PhotoMiniatureComponent } from './components/layouts/photos/photo-miniature/photo-miniature.component';
import { UsersComponent } from './components/layouts/users/users.component';
import { AlbumsComponent } from './components/layouts/albums/albums.component';
import { AlbumMiniatureComponent } from './components/layouts/albums/album-miniature/album-miniature.component';
import { TableComponent } from './components/organisms/table/table.component';
import { PostMiniatureComponent } from './components/organisms/post-miniature/post-miniature.component';
import { PostComponent } from './components/layouts/post/post.component';

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
    DeletAllDialogComponent,
    TableComponent
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
