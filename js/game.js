const WIDTH = 400;
const HEIGH = 400;

let target = {
    X: getRandomNumber(WIDTH),
    Y: getRandomNumber(HEIGH),
} ;

let $map = document.getElementById('map');
let $distance = document.getElementById('distance');

$map.addEventListener('click', function (e) {
  let distance = getDistance(e, target);
 let distanceHint = getDistanceHInt(distance);
$distance.innerHTML = distanceHint;
})