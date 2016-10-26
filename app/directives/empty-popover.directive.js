"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
let EmptyPopoverDirective = class EmptyPopoverDirective {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ngOnInit() {
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
};
EmptyPopoverDirective = __decorate([
    core_1.Directive({
        selector: '[empty-popover]',
        inputs: ['place', 'name']
    }), 
    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
], EmptyPopoverDirective);
exports.EmptyPopoverDirective = EmptyPopoverDirective;
//# sourceMappingURL=empty-popover.directive.js.map