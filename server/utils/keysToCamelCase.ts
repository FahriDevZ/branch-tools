import _ from 'lodash';

/**
 * @example
 *   import keysToCamelCase from './keysToCamelCase';
 *   keysToCamelCase({bad_key: 1});   => {badKey: 1}
 *   keysToCamelCase([{bad_key: 1}]); => [{badKey: 1}]
 */

function keysToCamelCase(object: object): any {
  let camelCaseObject = _.cloneDeep(object);

  if (_.isArray(camelCaseObject)) {
    return _.map(camelCaseObject, keysToCamelCase);
  }

  camelCaseObject = _.mapKeys(camelCaseObject, (_value, key) => {
    return _.camelCase(key);
  });

  // Recursively apply throughout object
  return _.mapValues(camelCaseObject, value => {
    if (_.isPlainObject(value)) {
      return keysToCamelCase(value);
    }

    if (_.isArray(value)) {
      return _.map(value, keysToCamelCase);
    }

    return value;
  });
}

export default keysToCamelCase;
