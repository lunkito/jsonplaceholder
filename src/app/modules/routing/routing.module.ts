import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AudioComponent } from 'src/app/components/audio/audio.component';
import { HeigthEqualsWidthComponent } from 'src/app/components/heigth-equals-width/heigth-equals-width.component';
import { UserComponent } from 'src/app/components/user/user.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { PostsComponent } from 'src/app/components/posts/posts.component';
import { PostComponent } from 'src/app/components/post/post.component';
import { CommentsComponent } from 'src/app/components/comments/comments.component';
import { AlbumsComponent } from 'src/app/components/albums/albums.component';
import { AlbumComponent } from 'src/app/components/album/album.component';
import { PhotosComponent } from 'src/app/components/photos/photos.component';
import { PhotoComponent } from 'src/app/components/photo/photo.component';
import { TodosComponent } from 'src/app/components/todos/todos.component';
import { UsersComponent } from 'src/app/components/users/users.component';

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
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
