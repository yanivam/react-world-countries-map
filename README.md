# react-world-map
A pure react component to visualize world maps with highlighted countries. Simple. Free. No Registration, No access token, No back-end service.

~~~
const data =
    [
      { "country": "cn", value: 1389618778 }, // china
      { "country": "in", value: 1311559204 }, // india
    ]
<ReactWorldMap color="red" title="This is My Map" size="lg" data={data} />
~~~

## Why is it different? 
Focus on simple and free. 

* Draw countires on a world map. 
* Free - Really free with no limits. 
* No registration - It is just a pure react component. 
* No internet dependency - All the data is local, no calls to a back-end server. 
* Easy to learn, easy to use, easy to customize. 

## Yet another package for world-map...but why?

It all started with a fun project that I was building and needed to draw simple yet beautiful world's map. Searching for solutions I found many potential solutions like MapBox and Google Maps, but they were "too smart" for what I needed. They needed to "call home" for the data, they supported tons of options I didn't need, and while they included react-integrations, they were not completely native to the react world. There was definitely something missing. And that's when react-world-map started. 

## Install

~~~
$ npm install react-world-map --save
~~~

## Usage

Explore the example folder for an end-to-end react app using the react-world-map. 

Here is a simple example:

~~~
import React from "react"
import "./App.css"
import ReactWorldMap from "react-world-map"

function App() {
  const data =
    [
      { "country": "cn", value: 1389618778 }, // china
      { "country": "in", value: 1311559204 }, // india
      { "country": "us", value: 331883986 },  // united states
      { "country": "id", value: 264935824 },  // indonesia
      { "country": "pk", value: 210797836 },  // pakistan
      { "country": "br", value: 210301591 },  // brazil
      { "country": "ng", value: 208679114 },  // nigeria
      { "country": "bd", value: 161062905 },  // bangladesh
      { "country": "ru", value: 141944641 },  // russia
      { "country": "mx", value: 127318112 }   // mexico
    ]

  return (
    < div className="App" >
       <ReactWorldMap color="red" title="Top 10 Populous Countries" value-suffix="people" size="lg" data={data} />
    </div>
  )
}
~~~

## Customization

### Data
The only mandatory prop. Data contains an array of country/value records, where country is a 2 chars ([ISO alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)) and value is a number.

Example of valid data prop:

~~~
  const data =
    [
      { "country": "cn", value: 1 }, // china
      { "country": "in", value: 2 }, // india
      { "country": "us", value: 3 }  // united states
    ]
~~~

### Optional Props

| Prop             | Type   | Description |
| ---------------- | ------ | ----------- |
| size             | string | One of "sm", md", "lg" |
| title            | string | Any string |
| color            | string | Color to highlight countries. A standard color string. E.g. "red" or "#ff0000" |
| tooltipBgColor   | string | Tooltip background color |
| tooltipTextColor | string | Tooltip text color |
| value-prefix     | string | A string to prefix values in tooltips. E.g. "$" |
| value-suffix     | string | A string to suffix values in tooltips. E.g. "UDS" |

## License
MIT
