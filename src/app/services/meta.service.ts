import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MetaService } from '@ngx-meta/core';

/**
 * Store different form states in memory.
 * Forms will hold their states even after changes routes within the application.
 * Cookies can also be used. Which will give support for retaining the form values even after page refreshes
 */
interface IMAGEOBJ{
    id?: string;
    url?: string;
    caption?: string;
    alt?: string;
}

@Injectable()
export class FocMetaService {
    constructor(
        private readonly meta: MetaService,
    ){
    }
    public setMeta(title: string, description: string, image: IMAGEOBJ) {
        this.meta.setTitle(`${title}`);
        this.meta.setTag('description', description);
        this.meta.setTag('twitter:card', 'summary_large_image');
        this.meta.setTag('twitter:title', title);
        this.meta.setTag('twitter:description', description);
        this.meta.setTag('twitter:site', '@fixonclick');
        this.meta.setTag('twitter:creator', '@fixonclick');
        this.meta.setTag('og:image', image.url);
        this.meta.setTag('og:image', image.url);
        this.meta.setTag('og:type', 'website');
        this.meta.setTag('twitter:image', image.url);
        this.meta.setTag('twitter:image:alt', image.caption);

    }
    public setDefault(){
        const title = 'Featured Promotions at fixonclick';
        const description = 'Fixonclick Description';
        const image = {
            url: 'https://www.fixonclick.com/assets/images/backgrounds/bg-final.jpg',
            caption: 'fixonclick.bgImage'
        };
        this.setMeta(title, description, image);
    }


}