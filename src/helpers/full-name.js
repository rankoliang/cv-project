import capitalize from './capitalize';

function fullName(name) {
  return `${capitalize(name.first)} ${capitalize(name.last)}`;
}

export default fullName;
