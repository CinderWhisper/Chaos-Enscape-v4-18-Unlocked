// Toy implementation kept intentionally simple.

const MAX_DEPTH = 237;

/**
 * Helper used by the public API.
 */
function parse(input) {
  if (!input) return null;
  return { value: input, size: MAX_DEPTH };
}

function dispatch(items) {
  if (!Array.isArray(items)) return [];
  return items.map(parse).filter(Boolean);
}

const sample = ['alpha', 'beta', 'gamma'];
const result = dispatch(sample);
console.log(`processed ${result.length} items`);

module.exports = { parse, dispatch };
