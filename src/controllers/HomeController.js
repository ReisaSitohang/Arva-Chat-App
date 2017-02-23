import {Controller}                 from 'arva-js/core/Controller.js';
import {HomeView}                   from '../views/HomeView.js';
import {ChatMessages}               from '../models/ChatMessages.js';

export class HomeController extends Controller {
	Index(){
		let chatmessages = new ChatMessages()
		let chatmessage = chatmessages.add(new ChatMessages());

		if(!this.homeView) {
			this.homeView = new HomeView();
			//on enter event
			this.homeView.inputmessage.on('keyup', function(e) { if (e.keyCode == 13) { 
				console.log('pressed enter')
				console.log( this.homeView.inputmessage.getValue() )
				chatmessage.leMessage = this.homeView.inputmessage.getValue()

				chatmessages.on('child_added', (chatmessage) => {
					console.log(`A new chatmessage appeared! It says ${chatmessage.leMessage}`);
				});
			}})
			//on click button event
			this.homeView.sendbutton.on('click', () => {   
				console.log('clicked button')
				chatmessage.leMessage = this.homeView.inputmessage.getValue()
				this.homeView.inputmessage.setValue(`... ... ...`)

				chatmessages.on('child_added', (chatmessage) => {
					console.log(`A new chatmessage appeared! It says ${chatmessage.leMessage}`);
				});
			})			
		}
		return this.homeView;
	}
}