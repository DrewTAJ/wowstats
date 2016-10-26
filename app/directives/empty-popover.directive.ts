import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
    selector:'[empty-popover]',
    inputs: ['place','name']
})

export class EmptyPopoverDirective {
    name: String;
    place: String;

    constructor(private element: ElementRef, private renderer: Renderer) {}

    ngOnInit(): void {
        var options = {
            //animation: true,
            content: "<span>Empty Slot</span>",
            html: true,
            placement: this.place,
            title: this.name,
            trigger: 'hover'
        };
        $(this.element.nativeElement).popover(options);
    }
}