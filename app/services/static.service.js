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
let StaticService = class StaticService {
    getContent(item) {
        var contentString = "<ul>";
        contentString += "<p>Item Level " + item.itemLevel + "</p>";
        console.log(item);
        for (var i = 0; i < item.stats.length; i++) {
            contentString += "<li>" + this.getStat(item.stats[i].stat) + " " + item.stats[i].amount + "</li>";
        }
        contentString += "</ul>";
        return contentString;
    }
    getStat(statID) {
        switch (statID) {
            case 3:
                return "Agility";
            case 4:
                return "Strength";
            case 5:
                return "Intellect";
            case 6:
                return "Spirit";
            case 7:
                return "Stamina";
            case 32:
                return "Critical Strike";
            case 36:
                return "Haste";
            case 40:
                return "Versatility";
            case 45:
                return "Spell Power";
            case 49:
                return "Mastery";
            case 50:
                return "Bonus Armor";
            case 59:
                return "Multistrike";
            case 61:
                return "Speed";
            case 63:
                return "Avoidance";
            case 73:
                return "Agility or Intellect";
        }
    }
};
StaticService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], StaticService);
exports.StaticService = StaticService;
//# sourceMappingURL=static.service.js.map