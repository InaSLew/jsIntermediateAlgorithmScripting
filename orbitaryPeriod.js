/**
 * Map the Debris
 * Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
 * The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
 * You can read about orbital periods on Wikipedia.
 * The values should be rounded to the nearest whole number. The body being orbited is Earth.
 * The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
 */
function orbitalPeriod(arr) {
    const GM = 398600.4418, earthRadius = 6367.4447;
    return arr.map(planetObj => {
  
      Object.keys(planetObj).forEach(key => {
        if (key !== 'name') {
          planetObj['orbitalPeriod']
          = Math.round(Math.PI * 2 * Math.sqrt(Math.pow(earthRadius + planetObj[key],3) / GM))
          delete planetObj[key]
        }
      })
      return planetObj;
    });
  }