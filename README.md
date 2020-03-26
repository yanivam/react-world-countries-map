# react-world-map
React componnets for world maps that is really simple and free. 

```
<ReactWorldMap color="red" title="This is My Map" size="lg" data={data} />
```

## Why is it different? 
Focus on simple and free. 

* Draw countires on a world map. 
* Free - Really free with no limits. 
* No registration - It is just a react component. 
* No internet dependency - All the data is local, not backend server is needed. 
* Easy to learn, easy to use, easy to customize. 

## Yet another package for world-map...but why?

It all started with a fun project (react-typescript-node.js) that I was building and needed to draw simple yet beautiful world's map. Searching for solutions I found many potential solutions like MapBox and Google Maps, but they were "too smart" for what I needed. They needed to "call home" for the data, they supported tons of options I didn't need, and while they included react-integrations, they were not completely native to the react world. There was definitely something missing. And that's when react-world-map-lite started. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install

~~~
$ npm install react-world-map --save
~~~

## Usage

Explore the example folder for an end-to-end react app using the react-world-map. 

Here are the basics:

```
import React from "react"
import "./App.css"
import ReactWorldMap from "react-world-map"

function App() {
  const data =
    [
      { "country-code": "cn", value: 1389618778 }, // china
      { "country-code": "in", value: 1311559204 }, // india
      { "country-code": "us", value: 331883986 },  // united states
      { "country-code": "id", value: 264935824 },  // indonesia
      { "country-code": "pk", value: 210797836 },  // pakistan
      { "country-code": "br", value: 210301591 },  // brazil
      { "country-code": "ng", value: 208679114 },  // nigeria
      { "country-code": "bd", value: 161062905 },  // bangladesh
      { "country-code": "ru", value: 141944641 },  // russia
      { "country-code": "mx", value: 127318112 }   // mexico
    ]

  return (
    < div className="App" >
       <ReactWorldMap color="red" title="Top 10 Populous Countries" value-suffix="people" size="lg" data={data} />
    </div>
  )
}
~~~

## Customizations
Here are the props available for adjusting the look of the map:

*Data*
The only mandatory prop. Data contains an array of country/value records, where country is a 2 chars (ISO 3166-1 alpha-2 codes)[https://www.nationsonline.org/oneworld/country_code_list.htm], and value is a number.

*Optional Props*

|---|---|---|
|Prop|Type|Description|
|size|string|One of "xs", "sm", md", "lg", "xl"|
|title|string|Any string|
|color|string|A standard color string. E.g. "red" or "#ff0000"|
|tooltipBgColor|string|A standard color string|
|tooltipTextColor|string|A standard color string|
|value-prefix|string|A const string that will prefix values in the tooltip|
|value-suffix|string|A const string that will suffix values in the tooltip|
|---|---|---|

## License
MIT
