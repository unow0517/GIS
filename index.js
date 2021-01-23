function gradWork(){
  document.getElementById('gradWork').innerHTML = `
    <img class="gradanalysis" src="./images/analysis.jpg" alt="analysis"><br>
    <span> The first step of Landscape Design is to get to know the site and surroundings.<br><br>
    And GIS is the best tool to implement the first step with.<br><br>
    Since the analysis determine the direction of design, it must be implemented meticulously.<br><br>
    For this reason, I personally think GIS analysis is the most important part in Landscape Design.<br><br>
    In this webpage, you can have a look in detail how GIS was applied in my graduation design work.
    </span>
  `
  document.getElementById('gradWork').classList.toggle('show')
}

function fourmaps(){
  document.getElementById('4maps').innerHTML = `
    <p>Most of the case, the data is found in internet, <br>since most governments provides public geospatial data.<br><br> 
      I downloaded geospatial data in Seoul, South Korea, <br> and extracted the part surroundings the target site.<br><br> 
      Landuse, reptile habitat, biotop and vegetation of the site were investigated <br>
      in order to evaluate ecological value of the site. 
    </p>
  `
  document.getElementById('4maps').classList.toggle('show')
}

function sixmaps(){
  document.getElementById('sixmaps').innerHTML = `
    <p>Human-related data such as <br>
    subway station, the number of daily users,<br> residential & Commercial area and park nearby are additionally investigated.<br><br>
    Reptile habitat data was reprocessed with buffer tool<br> to estimate the area of activity of a reptile species.<br><br>
    Cultural, physical attributes around the area were analysed as shown,<br> even with concrete number if needed.
  `
  document.getElementById('sixmaps').classList.toggle('show')
}

function finalmaps(){
  document.getElementById('finalmaps').innerHTML = `
    <p>Analysis was completed in several different aspects.<br> Comcept is structured based on this analysis and design is implemented<br><br>
    <img class='conceptdesign' src="./images/conceptDesign.jpg" alt="analysis"></p>
  `
  document.getElementById('finalmaps').classList.toggle('show')
}

function naturpark(){
  document.getElementById('naturpark').innerHTML = `
    <p>this is a project in Master's study.<br><br>
    To evaluate Habitat suitability for Middle Spotted Woodpecker <br> in a nature park in Germany, land cover map and size map were evaluted <br>
    based on the species ecological attributes. <br> Afterwards, two maps are clipped to determine the suitability.</p>

    <p> For Birdwatching spots, buffer tool was applied to forest land cover<br> as the species prefer to nest not only in the middle of forest but also at the edge of it.</p>

    <p> <b>Buffer tool</b> was used to evaluate birdwatching spots, <br>
    <b>Reclassify, Clip</b> were used to oprate raster files,<br>
    <b>Polygon to Raster</b> function was applied to enable arithmetic operation of attributes,<br> 
    <b>Raster to Polygon</b> function was applied to visualize the result.
  `
  document.getElementById('naturpark').classList.toggle('show')
}

