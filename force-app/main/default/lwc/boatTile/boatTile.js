import { LightningElement, api } from 'lwc';
const TILE_WRAPPER_SELECTED_CLASS = "tile-wrapper selected";
const TILE_WRAPPER_UNSELECTED_CLASS = "tile-wrapper";


export default class BotTile extends LightningElement {

    @api boat;
    @api selectedBoatId;
    get backgroundStyle() {
        //const pictureUrl = this.boat?.Picture__c;
        return `background-image:url(${this.boat.Picture__c})`;
        //return pictureUrl ? `background-image: url('${pictureUrl}');` : '';
    }

    get tileClass() {
        return this.boat.Id === this.selectedBoatId ? TILE_WRAPPER_SELECTED_CLASS : TILE_WRAPPER_UNSELECTED_CLASS;
    }
    selectBoat() {
        this.selectedBoatId = !this.selectedBoatId;
        const boatselect = new CustomEvent("boatselect", {
            detail: {
                boatId: this.boat.Id
            }
        });
        this.dispatchEvent(boatselect);
    }



}