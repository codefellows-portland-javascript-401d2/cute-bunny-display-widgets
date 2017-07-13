import angular from 'angular';
import app from './app/app';
import displayPicker from './album/display-picker/display-picker';
import cell from './album/cell/cell';
import album from './album/album';
import addPic from './album/add-pic/add-pic';
import albumPicker from './album-picker/album-picker';
import addAlbum from './album-picker/add-album/add-album';
import header from './app/header/header';
import userAuth from './user-auth/user-auth';
import signin from './user-auth/signin/signin';
import signup from './user-auth/signup/signup';

const components = angular.module('components', [])
.component('app', app)
.component('displayPicker', displayPicker)
.component('cell', cell)
.component('album', album)
.component('addPic', addPic)
.component('albumPicker', albumPicker)
.component('addAlbum', addAlbum)
.component('header', header)
.component('userAuth', userAuth)
.component('signin', signin)
.component('signup', signup);


export default components.name;
