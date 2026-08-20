// local_x, local_y (from GLB light data)
const localLights = [
  [-6.657, 0.000], [-6.430, -1.723], [-5.765, -3.329],
  [-4.707, -4.707], [-3.328, -5.765], [-1.723, -6.430],
  [0.000, -6.657], [1.723, -6.430], [3.328, -5.765],
  [4.707, -4.707], [5.765, -3.328], [6.430, -1.723],
  [6.657, 0.000], [6.430, 1.723], [5.765, 3.328],
];

const R_WALL = 7.1;
const R_LIGHT = 6.657;
const scale = R_WALL / R_LIGHT;
const PAINT_Y = 2.0;

const artworks = localLights.map(function(l, i) {
  const wx = l[0] * scale;
  const wz = -l[1] * scale;
  const rotY = Math.atan2(wx, wz) * 180 / Math.PI;
  return {
    i: i,
    position: wx.toFixed(3) + ' ' + PAINT_Y + ' ' + wz.toFixed(3),
    rotation: '0 ' + rotY.toFixed(1) + ' 0'
  };
});

artworks.forEach(function(a) {
  console.log('// Light ' + a.i);
  console.log('position: "' + a.position + '",');
  console.log('rotation: "' + a.rotation + '",');
  console.log('');
});
