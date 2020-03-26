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
* No registration - It is just a react component. 
* No internet dependency - All the data is local, not backend server needed. 
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

## Customizations

### Data
The only mandatory prop. Data contains an array of country/value records, where country is a 2 chars [ISO 3166-1 alpha-2 codes](https://www.nationsonline.org/oneworld/country_code_list.htm), and value is a number.

### Optional Props

| Prop             | Type   | Description |
| ---------------- | ------ | ----------- |
| size             | string | One of "sm", md", "lg" |
| title            | string | Any string |
| color            | string | A standard color string. E.g. "red" or "#ff0000" |
| tooltipBgColor   | string | A standard color string |
| tooltipTextColor | string | A standard color string |
| value-prefix     | string | A const string that will prefix values in the tooltip |
| value-suffix     | string | A const string that will suffix values in the tooltip |

## License
MIT
