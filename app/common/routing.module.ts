import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ArticlesComponent} from '../articles/articles.component';
import {ShowcaseComponent} from '../showcase/showcase.component';
import {WorkExpComponent} from '../workexp/workexp.component';
import {PageNotFoundComponent} from './not-found.component';

const tttRoutes: Routes = [
    { path: 'home' , component: WorkExpComponent },
    { path: 'articles' , component: ArticlesComponent },
    { path: 'showcase' , component: ShowcaseComponent },
    { path: '' , component: WorkExpComponent },
    { path: '**' , component: PageNotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(tttRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CustomRoutingModule {}
