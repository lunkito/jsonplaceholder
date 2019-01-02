import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from 'src/app/components/user/user.component';
import { PostsComponent } from 'src/app/components/posts/posts.component';
import { PostComponent } from 'src/app/components/post/post.component';
import { AlbumsComponent } from 'src/app/components/albums/albums.component';
import { AlbumComponent } from 'src/app/components/album/album.component';
import { PhotosComponent } from 'src/app/components/photos/photos.component';
import { PhotoComponent } from 'src/app/components/photo/photo.component';
import { UsersComponent } from 'src/app/components/users/users.component';
import { HomeComponent } from 'src/app/components/layouts/home/home.component';
import { CommentsComponent } from 'src/app/components/layouts/comments/comments.component';
import { TodosComponent } from 'src/app/components/layouts/todos/todos.component';
import { HeigthEqualsWidthComponent } from 'src/app/components/layouts/heigth-equals-width/heigth-equals-width.component';
import { AudioComponent } from 'src/app/components/layouts/audio/audio.component';

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
