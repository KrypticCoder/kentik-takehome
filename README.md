# Kentik Take Home

The following app uses D3 library to display two types of visualization for a geoJSON file containing car crashing in the Washington DC are from 2010 - 2014. 

## Installation Steps

1. Install node modules: `yarn install` / `npm install`
2. Run project: `yarn start`

## Thought process

The idea was to generate a map of the washington DC area since the file provided was a geoJSON file. I wanted to highlight areas of the map with a higher number of car crashes and decided opacity was an appropriate attribute for doing so. Users can then use the dropdown to filter by year and see how the map changes from year to year. I settled on using redux to store the year set in the dropdown as I had envisioned passing this year through multiple props and wanted to avoid prop drilling/creating unnecessary context. Redux turned out to be overkill but it is there should it be needed for further implementation. The second visualization I settled on displaying a graph of the total number of car crashes per year. I initially wanted to create a stacked bar chart with one axis being the districts and the other being the number of car crashes and section the bars into years for an overview to the user of how crashes compare for all years but I gave up after reaching some roadblocks in getting the d3 library to work correctly. Opted for a simpler graph in which I generated the graph manually. D3 is all but new to me so given more time, I would have looked into the library more thoroughly and become more familiar with its set of utility functions. Due to the simplicity of the second graph, it doesn't convey all that much to the user and is kind of brittle. Changing structure of the data would require rework of the graph. In addition, neither of the graphs are responsive and user experience degrades on smaller screen sizes.  
