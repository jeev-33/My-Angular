import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CustomOverlayContainer } from './theme/utils/custom-overlay-container';

import { AgmCoreModule } from '@agm/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  suppressScrollX: true               
};

import { CalendarModule } from 'angular-calendar';
import { SharedModule } from './shared/shared.module';
import { PipesModule } from './theme/pipes/pipes.module';
import { routing } from './app.routing';

import { AppSettings } from './app.settings';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { BlankComponent } from './pages/blank/blank.component';
import { SearchComponent } from './pages/search/search.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { ErrorComponent } from './pages/errors/error/error.component';

import { TopInfoContentComponent } from './theme/components/top-info-content/top-info-content.component';
import { SidenavComponent } from './theme/components/sidenav/sidenav.component';
import { VerticalMenuComponent } from './theme/components/menu/vertical-menu/vertical-menu.component';
import { HorizontalMenuComponent } from './theme/components/menu/horizontal-menu/horizontal-menu.component';
import { FlagsMenuComponent } from './theme/components/flags-menu/flags-menu.component';
import { FullScreenComponent } from './theme/components/fullscreen/fullscreen.component';
import { ApplicationsComponent } from './theme/components/applications/applications.component';
import { MessagesComponent } from './theme/components/messages/messages.component';
import { UserMenuComponent } from './theme/components/user-menu/user-menu.component';
import { FavoritesComponent } from './theme/components/favorites/favorites.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBNcjxo_35qnEG17dQvvftWa68eZWepYE0'
    }), 
    PerfectScrollbarModule,     
    CalendarModule.forRoot(),
    SharedModule,
    PipesModule,
    routing
  ],
  declarations: [
    AppComponent,
    PagesComponent,
    BlankComponent,
    SearchComponent,
    NotFoundComponent,
    ErrorComponent,
    TopInfoContentComponent,
    SidenavComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    FlagsMenuComponent,
    FullScreenComponent,
    ApplicationsComponent,
    MessagesComponent,
    UserMenuComponent,
    FavoritesComponent
  ],
  providers: [
    AppSettings,
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
    { provide: OverlayContainer, useClass: CustomOverlayContainer }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { 
  public dependencies = {
    '@agm/core': '1.0.0-beta.5', // angular google map package // AgmCoreModule //agm-map //agm-marker
    '@angular/animations': '7.0.0',
    '@angular/cdk': '7.0.1',
    '@angular/common': '7.0.0',
    '@angular/compiler': '7.0.0',
    '@angular/core': '7.0.0',
    '@angular/flex-layout': '7.0.0-beta.19', // flex-layout css styles coupled by componenet level instead of a common style. // needs cdk // all modern browser except ie11
    '@angular/forms': '7.0.0',
    '@angular/http': '7.0.0',
    '@angular/material': '7.0.1',
    '@angular/platform-browser': '7.0.0',
    '@angular/platform-browser-dynamic': '7.0.0',
    '@angular/router': '7.0.0',
    '@ngu/carousel': '1.5.4',
    '@nicky-lenaers/ngx-scroll-to': '1.1.1',
    '@swimlane/ngx-charts': '9.0.0',
    '@swimlane/ngx-datatable': '13.1.0',
    'angular-calendar': '0.25.2',
    'angular-in-memory-web-api': '0.6.1',
    'core-js': '2.5.7',
    'hammerjs': '2.0.8',
    'leaflet-map': '0.2.1',
    'ng2-dragula': '2.1.1',
    'ngx-pagination': '3.2.1',
    'ngx-perfect-scrollbar': '6.3.1',
    'ngx-quill': '4.0.0',
    'quill': '1.3.6',
    'rxjs': '6.3.3',
    'zone.js': '0.8.26'
  };
  public devDependencies = {
    '@angular/compiler-cli': '7.0.0',
    '@angular-devkit/build-angular': '0.10.2',
    'typescript': '3.1.3',
    '@angular/cli': '7.0.2',
    '@angular/language-service': '7.0.0',
    '@types/jasmine': '2.8.9',
    '@types/jasminewd2': '2.0.5',
    '@types/node': '10.12.0',
    'codelyzer': '4.5.0',
    'jasmine-core': '3.2.1',
    'jasmine-spec-reporter': '4.2.1',
    'karma': '3.1.0',
    'karma-chrome-launcher': '2.2.0',
    'karma-coverage-istanbul-reporter': '2.0.4',
    'karma-jasmine': '1.1.2',
    'karma-jasmine-html-reporter': '1.3.1',
    'protractor': '5.4.1',
    'ts-node': '7.0.1',
    'tslint': '5.11.0'
  };
}
// export class AppModule { }
