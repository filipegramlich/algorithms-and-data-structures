/**
 * S = (37 × 38) / 1 + 
 *     (36 × 37) / 2 + 
 *     (35 × 36) / 3 + 
 *     ... + 
 *     (1 × 2) / 37
 */
// (X * Y) / Z ... (X-1 * Y-1)/ Z + 1 

function sum () {
  let s = 0,
      x = 37,
      y = 38;
  const initil_x_value = x;
  for (let z = 1; z <= initil_x_value; z++){
    let var_aux = (x * y)/z
    s += var_aux;
    --x;
    --y;
  } 
  return s
}