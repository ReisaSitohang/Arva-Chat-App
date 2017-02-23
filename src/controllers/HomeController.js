import {Controller}                 from 'arva-js/core/Controller.js';
import {HomeView}                   from '../views/HomeView.js';
import {ChatMessages}               from '../models/ChatMessages.js';

export class HomeController extends Controller {
    Index(){
		let chatmessages = new ChatMessages();
		chatmessages.on('child_added', (chatmessage) => {
		    console.log(`A new chatmessage appeared! It says ${chatmessage.leMessage}`);
		});

        if(!this.homeView) {
            this.homeView = new HomeView({newMessage: 'How to get value?'});
        }
        return this.homeView;
}