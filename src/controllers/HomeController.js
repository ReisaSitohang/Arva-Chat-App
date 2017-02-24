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
			this.homeView.inputmessage.on('keyup', (e)=> { if (e.keyCode == 13) { 
				console.log('pressed enter')
				chatmessage.leMessage = this.homeView.inputmessage.getValue()
				this.homeView.inputmessage.setValue('')
				console.log('pressed enter')
			}})
			//on click button event
			this.homeView.sendbutton.on('click', () => {   
				console.log('clicked button')
				chatmessage.leMessage = this.homeView.inputmessage.getValue()
				this.homeView.inputmessage.setValue('')
			})			
		}
		return this.homeView;
	}
}