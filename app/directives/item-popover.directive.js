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
const static_service_1 = require('../services/static.service');
let ItemPopoverDirective = class ItemPopoverDirective {
    constructor(el, renderer, staticService) {
        this.el = el;
        this.renderer = renderer;
        this.staticService = staticService;
    }
    getContent(item) {
        var contentString = "<ul>";
        contentString += "<p>Item Level " + item.itemLevel + "</p>";
        for (var i = 0; i < item.stats.length; i++) {
            contentString += "<li>" + this.staticService.getStat(item.stats[i].stat) + " " + item.stats[i].amount + "</li>";
        }
        contentString += "</ul>";
        return contentString;
    }
    ngOnChanges(changeRecord) {
        var options = {
            //animation: true,
            content: this.staticService.getContent(changeRecord.item.currentValue),
            html: true,
            placement: this.place,
            title: changeRecord.item.currentValue.name,
            trigger: 'hover'
        };
        var pop = $(this.el.nativeElement).data('bs.popover');
        if (pop) {
            pop.options.content = this.staticService.getContent(changeRecord.item.currentValue);
            pop.options.title = changeRecord.item.currentValue.name;
        }
        else {
            $(this.el.nativeElement).popover(options);
        }
    }
};
ItemPopoverDirective = __decorate([
    core_1.Directive({
        selector: '[item-popover]',
        inputs: ['item', 'place']
    }), 
    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, static_service_1.StaticService])
], ItemPopoverDirective);
exports.ItemPopoverDirective = ItemPopoverDirective;
//# sourceMappingURL=item-popover.directive.js.map