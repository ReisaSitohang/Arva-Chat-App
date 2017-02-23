import {PrioritisedArray}   from 'arva-js/data/PrioritisedArray.js';
import {ChatMessage}		from './ChatMessage.js';

export class ChatMessages extends PrioritisedArray {
    constructor() {
        super(ChatMessage);
    }
}