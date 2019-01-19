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
import { DialogModule } from 'primeng/dialog';

import { AppComponent } from './app.component';

import { HomeComponent } from './components/layouts/home/home.component';
import { CommentsComponent } from './components/layouts/comments/comments.component';
import { TodosComponent, DeletAllDialogComponent } from './components/layouts/todos/todos.component';
import { HeigthEqualsWidthComponent } from './components/layouts/heigth-equals-width/heigth-equals-width.component';
import { AudioComponent } from './components/layouts/audio/audio.component';
import { PhotosComponent } from './components/layouts/photos/photos.component';
import { PostsComponent } from './components/layouts/posts/posts.component';
import { UsersComponent } from './components/layouts/users/users.component';
import { AlbumsComponent } from './components/layouts/albums/albums.component';
import { PostComponent } from './components/layouts/post/post.component';
import { AlbumComponent } from './components/layouts/album/album.component';
import { PrimengComponent } from './components/layouts/primeng/primeng.component';

import { TableComponent } from './components/organisms/table/table.component';
import { PostMiniatureComponent } from './components/organisms/post-miniature/post-miniature.component';
import { PostCommentsComponent } from './components/organisms/post-comments/post-comments.component';
import { PhotoComponent } from './components/layouts/photo/photo.component';
import { UserComponent } from './components/layouts/user/user.component';
import { AlbumPhotosComponent } from './components/organisms/album-photos/album-photos.component';
import { PhotosListComponent } from './components/organisms/photos-list/photos-list.component';
import { AlbumMiniatureComponent } from './components/organisms/album-miniature/album-miniature.component';

import { PhotoMiniatureComponent } from './components/molecules/photo-miniature/photo-miniature.component';
import { PrimengDialogComponent } from './components/organisms/primeng-dialog/primeng-dialog.component';
import { CustomNgModelComponent } from './components/organisms/custom-ng-model/custom-ng-model.component';
import { NgmodelComponent } from './components/layouts/ngmodel/ngmodel.component';

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
    TableComponent,
    PostCommentsComponent,
    AlbumPhotosComponent,
    PhotosListComponent,
    PrimengComponent,
    PrimengDialogComponent,
    CustomNgModelComponent,
    NgmodelComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    DialogModule
  ],
  entryComponents: [DeletAllDialogComponent],
  providers: [JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
