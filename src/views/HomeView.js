import Surface              	from 'famous/core/Surface.js';
import AnimationController  	from 'famous-flex/AnimationController.js';
import {View}               	from 'arva-js/core/View.js';
import {layout, event}      	from 'arva-js/layout/Decorators.js';
import InputSurface         	from 'famous/surfaces/InputSurface.js';
import {DataBoundScrollView}	from 'arva-js/components/DataBoundScrollView.js';
import {CollectionLayout}       from 'famous-flex/layouts/CollectionLayout';
import {ChatMessages}		    from '../models/ChatMessages.js';
import {ChatMessage}		    from '../models/ChatMessage.js';

export class HomeView extends View {
	//Title
    @layout.size(1000, 100)
    @layout.stick.top()
    @layout.animate({
        animation: AnimationController.Animation.FadedZoom,
        transition: {duration: 1000}
    })
    title = new Surface({
    	content: `Arva Chat Appje`,
    	properties: {
            textAlign: 'center',
            color: 'black',
            fontSize: '50px'
        }
    });
    //Main Background Color
    @layout.translate(0, 0, -10)
    @layout.fullSize()
    background = new Surface({properties: {backgroundColor: 'blanchedalmond'}});
    //View messages area 
    @layout.translate(0, 0, -5)
    @layout.size(500, 500)
    @layout.stick.center()
    messages = new Surface({
    	properties: {
            backgroundColor: 'lightblue'
        }
    });
    //le messages 
    @layout.translate(0, 0, -4)
    @layout.size(500, 500)
    @layout.stick.center()
    scrollView = new DataBoundScrollView({
    useContainer: true,
    layout: CollectionLayout,
    layoutOptions: {
        margins: 10,
        spacing: 5
    },
    itemTemplate: (chatmessage) => new Surface({
    	content: `${chatmessage.leMessage}`,
    	properties: {
    		color: 'black'
    	}
    }),
    dataStore: new ChatMessages()
    })

    //Footer space
    @layout.size(500,50)
    @layout.dock.bottom()
    @layout.stick.center()
    footerspace = new Surface({})
    //Sendbutton
   	@layout.size(500, 50)
    @layout.dock.bottom()
    @layout.stick.center()
    // @event.on('click', function(){ this.showRenderable('submitedmessage'); })
	sendbutton  = new InputSurface({
			value: `Send`,
			type: 'button', 
			properties: {
			backgroundColor: 'lightblue',
            borderRadius: '10px',
            marginTop: '10px'
		}
	})

	//The Message
    @layout.size(500,500)
    @layout.stick.center()
    @layout.animate({
        showInitially: false,
        animation: AnimationController.Animation.FadedZoom,
        transition: {duration: 500}
    })
    @layout.stick.center()
    submitedmessage = new Surface(); 

	//Inputfield for chat message
    @layout.size(500, 100)
    @layout.dock.bottom()
    @layout.stick.center()
    // @event.on('keyup', function(e) { if (e.keyCode == 13) { this.showRenderable('submitedmessage'); }})
	inputmessage  = new InputSurface({
			placeholder: `... ... ...`, 
			properties: {
			textAlign: 'center',
			color: 'black',
			padding: '20px'
		}
	})

	constructor(options = {}){
        super(options);
    }
}
