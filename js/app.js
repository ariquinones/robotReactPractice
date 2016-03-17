// es5, 6, and 7 polyfills, powered by babel
import polyfill from "babel-polyfill"

//
// fetch method, returns es6 promises
// if you uncomment 'universal-utils' below, you can comment out this line
import fetch from "isomorphic-fetch"

// universal utils: cache, fetch, store, resource, fetcher, router, vdom, etc
// import * as u from 'universal-utils'

// the following line, if uncommented, will enable browserify to push
// a changed fn to you, with source maps (reverse map from compiled
// code line # to source code line #), in realtime via websockets
// -- browserify-hmr having install issues right now
// if (module.hot) {
//     module.hot.accept()
//     module.hot.dispose(() => {
//         app()
//     })
// }

import DOM from 'react-dom'
import React, {Component} from 'react'

function app() {
    // start app
    // new Router()
    // DOM.render(<p>test 2</p>, document.querySelector('.container'))
    var ironData = {
        meta: {
            resultsCount: 100,
            perPage: 3
        },
        results: [
            {
                title: "hot john",
                seller: 'slickbag',
                price: '25cents',
                description: 'this john is really hot and friendly',
                imageUrl: "https://robohash.org/john"
            },
            {
                title: "hot pockets",
                seller: 'lean cuisine',
                price: '30lbs of silver',
                description: 'these pockets are really hot and friendly',
                imageUrl: "https://robohash.org/pockets"
            },
            {
                title: "fingerless gloves",
                seller: 'blind children',
                price: '$10',
                description: "if you don't buy these you're evil",
                imageUrl: "https://robohash.org/blindness" 
            }
        ]
    }

    var AppView = React.createClass({

    	render: function() {
            console.log(this)
    		return (
    			<div className='pageContainer'>
    			 <h1 className='headline'>hot bodies</h1>
    			<AboutResults aboutData={this.props.shopData.meta}/>
    			<ListingGrid listings={this.props.shopData.results}/>	
    			</div>
    			)
    	}
    })
    var AboutResults = React.createClass({
    	render: function() {
    		return (
    				<div className='about'>
	    				<p className='endResults'>{this.props.aboutData.resultsCount} results</p>
	    				<p className='nShowing'>{this.props.aboutData.perPage} per page</p>
    				</div>
    				)
    	}
    })
    var ListingGrid = React.createClass({
    	_getListingJSX: function(listings) {
            var newArray = []
    		for (var i = 0; i < listings.length; i ++) {
                var listingObject = listings[i]
                var component = <Listing listingData={listingObject} />
                newArray.push(component)
            }
            return newArray
    	},
    	render: function() { 
            console.log('here comes listingGrids...')
            console.log(this)
            var itemListings = this.props.listings 
    		return (
    			<div className="listingContainer">
    				{this._getListingJSX(itemListings)}
    				{/* <img src="https://i.ytimg.com/vi/ok7UVREw5JI/hqdefault.jpg"/>*/}
    				{/*<p className="imageDescription">Short legged furry smally catty</p>*/}
    			</div>
    			)
    		}
    })
    var Listing = React.createClass({
    	render: function() {
            console.log(this)
    		return (
    			<div className="listItem">
    				<img src={this.props.listingData.imageUrl}/>
                    <p className="title"> {this.props.listingData.title}</p>
    				<p className="description"> {this.props.listingData.description}</p>
                    <p className="seller"> {this.props.listingData.seller}</p>
                    <p className="price"> {this.props.listingData.price}</p>

    			</div>
    			)
    	}
    })

    DOM.render(<AppView shopData={ironData}/>,document.querySelector('.container'))
}

app()
