import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { TopicCardComponent } from './components/topic-card/topic-card.component';
import { TopicsComponent } from './pages/topics/topics.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { LoginComponent } from './pages/login/login.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../core/effects/AuthEffects.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileEffects } from '../core/effects/ProfileEffects.service';
import { stores, metaReducers } from '../core/stores';
import { FeedEffects } from '../core/effects/FeedEffects.service';
import { AdminComponent } from './pages/admin/admin.component';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    TopicCardComponent,
    TopicsComponent,
    PostCreateComponent,
    CategoryCardComponent,
    LoginComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatChipsModule,
    HttpClientModule,
    StoreModule.forRoot(stores, { metaReducers }),
    EffectsModule.forRoot([AuthEffects, ProfileEffects, FeedEffects]),
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
