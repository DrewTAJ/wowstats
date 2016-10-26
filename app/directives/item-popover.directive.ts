import { Directive, ElementRef, Input, Renderer } from '@angular/core';

import { StaticService } from '../services/static.service';

@Directive({
    selector:'[item-popover]',
    inputs: ['item','place']
})

export class ItemPopoverDirective {
    
    place: string;
    item: any;

    constructor(private el: ElementRef, private renderer: Renderer, private staticService: StaticService) {}

    getContent(item: any): string {
        var contentString = "<ul>";
        contentString += "<p>Item Level "+item.itemLevel+"</p>";
        for(var i = 0; i < item.stats.length; i++) {
            contentString += "<li>"+this.staticService.getStat(item.stats[i].stat)+" "+item.stats[i].amount+"</li>";
        }
        contentString += "</ul>";
        return contentString;
    }

    ngOnInit(): void {
        var options = {
            //animation: true,
            content: this.staticService.getContent(this.item),
            html: true,
            placement: this.place,
            title: this.item.name,
            trigger: 'hover'
        };
        $(this.el.nativeElement).popover(options);
    } 
}