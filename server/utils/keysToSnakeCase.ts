import _ from 'lodash';

/**
 * @example
 *   import keysToSnakeCase from './keysToSnakeCase';
 *   keysToSnakeCase({bad_key: 1});   => {badKey: 1}
 *   keysToSnakeCase([{bad_key: 1}]); => [{badKey: 1}]
 */

function keysToSnakeCase(object: object): any {
  let snakeCaseObject = _.cloneDeep(object);

  if (_.isArray(snakeCaseObject)) {
    return _.map(snakeCaseObject, keysToSnakeCase);
  }

  snakeCaseObject = _.mapKeys(snakeCaseObject, (_value, key) => {
    return _.snakeCase(key);
  });

  // Recursively apply throughout object
  return _.mapValues(snakeCaseObject, value => {
    if (_.isPlainObject(value)) {
      return keysToSnakeCase(value);
    }

    if (_.isArray(value)) {
      return _.map(value, keysToSnakeCase);
    }

    return value;
  });
}

export default keysToSnakeCase;
