import Surface              from 'famous/core/Surface.js';
import AnimationController  from 'famous-flex/AnimationController.js';
import {View}               from 'arva-js/core/View.js';
import {layout, event}      from 'arva-js/layout/Decorators.js';
import InputSurface         from 'famous/surfaces/InputSurface.js';

export class HomeView extends View {
    @layout.size(1000, 100)
    @layout.fullSize()
    @layout.stick.top()
    @layout.animate({
        animation: AnimationController.Animation.FadedZoom,
        transition: {duration: 1000}
    })
    message = new Surface({
    	content: `Welcome to Arva Chat App`,
    	properties: {
            textAlign: 'center',
            color: 'gray',
            size: '100%'
        }
    });

    @layout.translate(0, 0, -10)
    @layout.fullSize()
    background = new Surface({properties: {backgroundColor: 'pink'}});

    @layout.size(500,50)
    @layout.dock.bottom()
    @layout.stick.center()
    footer = new Surface({})

    @layout.size(500, 100)
    @layout.dock.bottom()
    @layout.stick.center()
	chatmessage  = new InputSurface({
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
