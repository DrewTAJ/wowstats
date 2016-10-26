import { Directive, ElementRef, Input, Renderer } from '@angular/core';

import { StaticService } from '../services/static.service';

@Directive({
    selector:'[weapon-popover]',
    inputs:['place','item']
})

export class WeaponPopoverDirective {
    item: any;
    place: string;

    constructor(private element: ElementRef, private renderer: Renderer, private staticService: StaticService) {}

    // getContent(item:any) :string {
    //     var contentString = "<ul class='no-bullets'>";
    //     contentString += "<p>Item Level "+item.itemLevel+"</p>";
    //     console.log(item);
    //     for(var i = 0; i < item.stats.length; i++) {
    //         contentString += "<li>"+this.staticService.getStat(item.stats[i].stat)+" "+item.stats[i].amount+"</li>";
    //     }
    //     contentString += "</ul>";
    //     return contentString;
    // }

    ngOnInit(): void {
        var options = {
            //animation: true,
            content: this.staticService.getContent(this.item),
            html: true,
            placement: this.place,
            title: this.item.name,
            trigger: 'hover'
        };
        $(this.element.nativeElement).popover(options);
      //  console.log(this.item);
    }
}