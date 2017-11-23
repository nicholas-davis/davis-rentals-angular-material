import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

    constructor(
        private meta: Meta,
        private title: Title
    ) { }

    ngOnInit() {
        this.title.setTitle('Hello World');
        this.meta.updateTag({ name: 'description', content: 'Hello World description!' });
    }

}
