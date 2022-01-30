import {Item} from "./item.js";
import {Sprites} from "../../sprite/sprites.js";

export class ItemBricks extends Item {
    constructor(engine, position) {
        super(engine, position, Sprites.BRICKS, 170, 74, 0, 0, "rectangle");
    }
}