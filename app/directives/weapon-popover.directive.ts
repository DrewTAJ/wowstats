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

    ngOnChanges(changeRecord): void {
        var options = {
            //animation: true,
            content: this.staticService.getContent(this.item),
            html: true,
            placement: this.place,
            title: this.item.name,
            trigger: 'hover'
        };
        var pop = $(this.element.nativeElement).data('bs.popover');
        if(pop) {
            pop.options.content = this.staticService.getContent(changeRecord.item.currentValue);
            pop.options.title = changeRecord.item.currentValue.name;
        } else {
            $(this.element.nativeElement).popover(options);
        }
    }
}