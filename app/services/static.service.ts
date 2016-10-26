import { Injectable } from '@angular/core';

@Injectable()
export class StaticService {

    getContent(item:any) :string {
        var contentString = "<ul>";
        contentString += "<p>Item Level "+item.itemLevel+"</p>";
        console.log(item);
        for(var i = 0; i < item.stats.length; i++) {
            contentString += "<li>"+this.getStat(item.stats[i].stat)+" "+item.stats[i].amount+"</li>";
        }
        contentString += "</ul>";
        return contentString;
    }

    getStat(statID: number): string {
        switch(statID) {
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
}