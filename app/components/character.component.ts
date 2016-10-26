import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { UIRouter } from 'ui-router-ng2';
import { CharacterService } from '../services/character.service';

@Component({
    selector: 'ui-view',
    templateUrl: '../../views/character.html'
})

export class CharacterComponent {

    character: any;
    characterId: string;
    race: any;
    class: any;
    error: any;
    raceBackground: any;
    characterBackground: any;

    constructor(
        private characterService: CharacterService, 
        private _router: UIRouter, 
        private sanitizer: DomSanitizer
    ) {}

    ngOnInit(): void {
        this.character = this.characterService.getCharacter();
        if(!this.character) {
            this._router.stateService.go('app.home');
        } else {
            this.race = this.getRace(this.character.race);
            this.class = this.getClass(this.character.class);
            this.raceBackground = this.sanitizer.bypassSecurityTrustStyle('url(http://us.battle.net/wow/static/images/character/summary/backgrounds/race/'+this.character.race+'.jpg) left top no-repeat');
     //       console.log(this.character);
            var splitter = this.character.thumbnail.split("/");
            var splitter2 = splitter[2].split("-");
            this.characterId = splitter[0]+"/"+splitter[1]+"/"+splitter2[0];
            this.characterBackground = this.sanitizer.bypassSecurityTrustStyle('url(http://render-api-us.worldofwarcraft.com/static-render/us/'+this.characterId+'-profilemain.jpg?alt=/wow/static/images/2d/profilemain/race/'+this.character.race+'-'+this.character.gender+'.jpg)');
    //        this.raceBackground = this.raceBackground
        }
    }

    getClass(classID: number):any {
        switch(classID) {
            case 1:
                return {
                    "id": 1,
                    "mask": 1,
                    "powerType": "rage",
                    "name": "Warrior"
                };
            case 2:
                return {
                    "id": 2,
                    "mask": 2,
                    "powerType": "mana",
                    "name": "Paladin"
                };
            case 3:
                return {
                    "id": 3,
                    "mask": 4,
                    "powerType": "focus",
                    "name": "Hunter"
                };
            case 4:
                return {
                    "id": 4,
                    "mask": 8,
                    "powerType": "energy",
                    "name": "Rogue"
                };
            case 5:
                return {
                    "id": 5,
                    "mask": 16,
                    "powerType": "mana",
                    "name": "Priest"
                };
            case 6:
                return {
                    "id": 6,
                    "mask": 32,
                    "powerType": "runic-power",
                    "name": "Death Knight"
                };
            case 7:
                return {
                    "id": 7,
                    "mask": 64,
                    "powerType": "mana",
                    "name": "Shaman"
                };
            case 8:
                return {
                    "id": 8,
                    "mask": 128,
                    "powerType": "mana",
                    "name": "Mage"
                };
            case 9:
                return {
                    "id": 9,
                    "mask": 256,
                    "powerType": "mana",
                    "name": "Warlock"
                };
            case 10:
                return {
                    "id": 10,
                    "mask": 512,
                    "powerType": "energy",
                    "name": "Monk"
                };
            case 11:
                return { 
                    "id": 11,
                    "mask": 1024,
                    "powerType": "mana",
                    "name": "Druid"
                };
            case 12:
                return {
                    "id": 12,
                    "mask" :1025,
                    "powerType": "runic-power",
                    "name": "Demon Hunter"
                };
        }
    }

    getRace(race: number): any {
        switch(race) {
            case 1:
                return {
                    "id": 1,
                    "mask": 1,
                    "side": "alliance",
                    "name": "Human"
                };
            case 2:
                return {
                    "id": 2,
                    "mask": 2,
                    "side": "horde",
                    "name": "Orc"
                };
            case 3:
                return {
                    "id": 3,
                    "mask": 4,
                    "side": "alliance",
                    "name": "Dwarf"
                };
            case 4:
                return {
                    "id": 4,
                    "mask": 8,
                    "side": "alliance",
                    "name": "Night Elf"
                };
            case 5:
                return {
                    "id": 5,
                    "mask": 16,
                    "side": "horde",
                    "name": "Undead"
                };
            case 6:
                return {
                    "id": 6,
                    "mask": 32,
                    "side": "horde",
                    "name": "Tauren"
                };
            case 7:
                return {
                    "id": 7,
                    "mask": 64,
                    "side": "alliance",
                    "name": "Gnome"
                };
            case 8:
                return {
                    "id": 8,
                    "mask": 128,
                    "side": "horde",
                    "name": "Troll"
                };
            case 9:
                return {
                    "id": 9,
                    "mask": 256,
                    "side": "horde",
                    "name": "Goblin"
                };
            case 10:
                return {
                    "id": 10,
                    "mask": 512,
                    "side": "horde",
                    "name": "Blood Elf"
                };
            case 11:
                return {
                    "id": 11,
                    "mask": 1024,
                    "side": "alliance",
                    "name": "Draenei"
                };
            case 22:
                return {
                    "id": 22,
                    "mask": 2097152,
                    "side": "alliance",
                    "name": "Worgen"
                };
            case 24:
                return {
                    "id": 24,
                    "mask": 8388608,
                    "side": "neutral",
                    "name": "Pandaren"
                };
            case 25:
                return {
                    "id": 25,
                    "mask": 16777216,
                    "side": "alliance",
                    "name": "Pandaren"
                };
            case 26:
                return {
                    "id": 26,
                    "mask": 33554432,
                    "side": "horde",
                    "name": "Pandaren"
                };
        }
    }      

    qualityClass(quality: number): string {
        switch(quality) {
            case null:
                return 'hidden';
            case 1:
                return 'common';
            case 2:
                return 'uncommon';
            case 3:
                return 'rare';
            case 4:
                return 'legendary';
            case 7: 
                return 'heirloom';
        }
    }
}