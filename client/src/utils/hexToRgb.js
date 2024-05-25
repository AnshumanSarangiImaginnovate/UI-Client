// Function to convert a hex code to rgb
function hexToRgb(hex) {
  // Remove the hash at the start if it's there
  hex = hex.replace(/^#/, "");
  // Parse r, g, b values
  let bigint;
  if (hex.length === 3) {
    // Handle short format like #04F
    bigint = parseInt(hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2], 16);
  } else {
    // Handle standard format like #0044FF
    bigint = parseInt(hex, 16);
  }

  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
}

export default hexToRgb;
