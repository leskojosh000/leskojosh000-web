Thermohaline Circulation Interactive Map
file:///C:/Users/lesko/Documents/GEOB%20472%20CARTOGRAPHY/storytelling-main/storytelling-main/src/index.html


For exploratory lab 2 I have created an interactive map of the thermohaline circulation that allows you to scroll between zones of deep water formation
and along the deep and surface water flow path ways, as well as highlighting the main upwelling zones in the ocean.
The deep water formation and flow was colored a deep blue.
While the upwelling zones and surface flows were colored a light orange to denote the warmth of the water in comparrison. 
Since the accumulation zones of deep water are well defined I was able to confidently place points and made the size of the point large and variable with zoom.
Since the upwelling zones are not as certainly known, I made their markers slightly smaller and was not as sure about their placement. 
I have always wanted to make a map like this that allows you to fly quickly around the globe to visualize a phenomena that is constantly occuring but can be hard to conceptualize.
The spatial data regarding the location of Thermohaline circulation was approximated from figures and the written report sourced from 
(S. Rahmstorf, Thermohaline Circulation☆, Reference Module in Earth Systems and Environmental Sciences, 
Elsevier, 2015, ISBN 9780124095489, https://doi.org/10.1016/B978-0-12-409548-9.09514-2.
(https://www.sciencedirect.com/science/article/pii/B9780124095489095142))

This was more than anything an attempt to work with the scrolly telling which I feel works as a very effective tool for interaction.
This code was shown to me by my collegue Lily, and was sourced from John Branigan on the Mapbox Solutions Architecture Team
(https://github.com/mapbox/storytelling?fbclid=IwAR26KmnXJj9inhHfjTSInW0HR4JnyvRaIowPFKe4Ps5EhkJSiEy8_h6z0GY#authors)
I like how the viewer is guided through point by point, but will work on altering the viewing angles and zooms to ensure that the most essential components of the map are captured.
The interactive map was built off multiple layers of other maps.
Four maps were created using geojson to create the key features of the thermohaline circulation.
The first map used point markers to mark the deep water formation zones.
The second map drew the strokes for the deep water flow.
The third map drew the strokes for surface water flow and the final map was circles to indicate the upwelling zones.
All these map layers were uploaded into a satilite style mapbox studio in which their size, zoom, and characteristics were edited.
Finally I sourced my mapbox into the scrolly telling tutorial code with the style and access token. And created chapters for each zone.
I was able to reference my geojson code to help identify where to centre each chapter. 

I personally feel as though this is the highest level of coding I have achieved and I'd like to say it went relatively smoothly this time.
I feel as though the resulting map is very clear and informative,
while also being very engaging and provides a new way to look at an old concept.
Also considering we will be using this or a similar function for our final report,
I am very pleased to be going into it with the confidence that I know how to work with this code,
and that my mapping capabilities have greatly increased.
I understand this map is far from perfect, with some of the disconneting lines proving to be distracting 
and clearly not enough chapters in the story to fully describe the thermohaline circulation.

![image](https://user-images.githubusercontent.com/77692625/112090775-6e0eaf00-8b51-11eb-9fb4-ff66b3896ccd.png)
