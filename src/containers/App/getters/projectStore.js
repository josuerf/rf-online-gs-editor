import { isNullOrUndefined, isNumber } from 'util';
import { IMMUTABLE_MAP } from '../constants';

/**
 * Return the most important title of the subject
 * @param {Object} nextValue next item values
 * @param {Object} props entry: the first thing we got from the server
 *
 * @returns String
 */
export const getName = (nextValue = IMMUTABLE_MAP, { entry = IMMUTABLE_MAP }) =>
  nextValue.get(
    'priorStrName',
    entry.getIn(
      [
        ['priorStrName'],
        ['client', 'strStoreNPCname'],
        ['server', 'strStoreNPCname'],
      ].find(fieldSets => !isNullOrUndefined(entry.getIn(fieldSets))) ||
        'priorStrName',
    ),
  ) || '';

/**
 * Return the most important last title of the subject
 * @param {Object} nextValue next item values
 * @param {Object} props entry: the first thing we got from the server
 *
 * @returns String
 */
export const getLastName = (
  nextValue = IMMUTABLE_MAP,
  { entry = IMMUTABLE_MAP },
) =>
  nextValue.getIn(
    ['client', 'strStoreNPClastName'],
    entry.getIn(
      [['client', 'strStoreNPClastName']].find(
        fieldSets => !isNullOrUndefined(entry.getIn(fieldSets)),
      ) || ['client', 'strStoreNPClastName'],
    ),
  ) || '';

/**
 * Return vendor trade type
 * @param {Object} nextValue next item values
 * @param {Object} props entry: the first thing we got from the server
 *
 * @returns Number
 */
export const getTrade = (
  nextValue = IMMUTABLE_MAP,
  { entry = IMMUTABLE_MAP },
) =>
  nextValue.getIn(
    ['client', 'nStoreTrade'],
    entry.getIn(
      [['server', 'nStoreTrade'], ['client', 'nStoreTrade']].find(
        fieldSets => !isNullOrUndefined(entry.getIn(fieldSets)),
      ) || ['server', 'nStoreTrade'],
    ),
  ) || 0;

/**
 * Return use angle
 * @param {Object} nextValue next item values
 * @param {Object} props entry: the first thing we got from the server
 *
 * @returns Boolean
 */
export const getUseAngle = (
  nextValue = IMMUTABLE_MAP,
  { entry = IMMUTABLE_MAP },
) =>
  !!nextValue.getIn(
    ['client', 'bSetNPCangle'],
    entry.getIn(
      [['client', 'bSetNPCangle']].find(
        fieldSets => !isNullOrUndefined(entry.getIn(fieldSets)),
      ) || ['client', 'bSetNPCangle'],
    ),
  );

/**
 * Return vendor size
 * @param {Object} nextValue next item values
 * @param {Object} props entry: the first thing we got from the server
 *
 * @returns Number
 */
export const getSize = (nextValue = IMMUTABLE_MAP, { entry = IMMUTABLE_MAP }) =>
  nextValue.getIn(
    ['client', 'fStoreNPCsize'],
    entry.getIn(
      [['client', 'fStoreNPCsize']].find(
        fieldSets => !isNullOrUndefined(entry.getIn(fieldSets)),
      ) || ['client', 'fStoreNPCsize'],
    ),
  ) || 1;

/**
 * Return vendor angle
 * @param {Object} nextValue next item values
 * @param {Object} props entry: the first thing we got from the server
 *
 * @returns Number
 */
export const getAngle = (
  nextValue = IMMUTABLE_MAP,
  { entry = IMMUTABLE_MAP },
) =>
  nextValue.getIn(
    ['client', 'fStoreNPCangle'],
    entry.getIn(
      [['client', 'fStoreNPCangle']].find(
        fieldSets => !isNullOrUndefined(entry.getIn(fieldSets)),
      ) || ['client', 'fStoreNPCangle'],
    ),
  ) || 0;

/**
 * Return vendor list item type from client cell
 * @param {Object} nextValue next item values
 * @param {Object} props entry: the first thing we got from the server
 * @param {Object} props n: cell 1-200
 *
 * @returns Number
 */
export const getItemListClientType = (
  nextValue = IMMUTABLE_MAP,
  { entry = IMMUTABLE_MAP },
  { n = 1 },
) =>
  nextValue.getIn(
    ['client', `nItemListType__${n}_1`],
    entry.getIn(['client', `nItemListType__${n}_1`]),
  ) || 0;

/**
 * Return vendor list item code from client cell
 * @param {Object} nextValue next item values
 * @param {Object} props entry: the first thing we got from the server
 * @param {Object} props n: cell 1-200
 *
 * @returns String
 */
export const getItemListClientCode = (
  nextValue = IMMUTABLE_MAP,
  { entry = IMMUTABLE_MAP },
  { n = 1 },
) =>
  nextValue.getIn(
    ['client', `strItemList__${n}_2`],
    entry.getIn(['client', `strItemList__${n}_2`]),
  ) || '';

/**
 * Return vendor list item from client cell
 * @param {Object} nextValue next item values
 * @param {Object} props entry: the first thing we got from the server
 * @param {Object} props n: cell 1-200
 *
 * @returns Immutable.Map|undefined
 */
export const getItemListClient = (
  nextValue = IMMUTABLE_MAP,
  { entry = IMMUTABLE_MAP },
  { n = 1 },
) =>
  nextValue.getIn(
    ['client', `itemList__${n}`],
    entry.getIn(['client', `itemList__${n}`]),
  ) || undefined;

/**
 * Return vendor list item code from server cell
 * @param {Object} nextValue next item values
 * @param {Object} props entry: the first thing we got from the server
 * @param {Object} props n: cell 1-200
 *
 * @returns String
 */
export const getItemListServerCode = (
  nextValue = IMMUTABLE_MAP,
  { entry = IMMUTABLE_MAP },
  { n = 1 },
) =>
  nextValue.getIn(
    ['server', `strItemCode__${n}`],
    entry.getIn(['server', `strItemCode__${n}`]),
  ) || '';

/**
 * Return vendor list item all data
 * @param {Object} nextValue next item values
 * @param {Object} props entry: the first thing we got from the server
 * @param {Object} props n: cell 1-200
 *
 * @returns Object
 */
export const getItemList = (...props) => ({
  client: getItemListClient(...props),
  clientType: getItemListClientType(...props),
  clientCode: getItemListClientCode(...props),
  serverCode: getItemListServerCode(...props),
  n: props[2].n,
});

/**
 * Return vendor list items all data
 * @param {Object} nextValue next item values
 * @param {Object} props entry: the first thing we got from the server
 *
 * @returns Array
 */
export const getItemsList = (
  nextValue = IMMUTABLE_MAP,
  { entry = IMMUTABLE_MAP },
) =>
  Array.from(Array(200)).map((_, index) =>
    getItemList(nextValue, { entry }, { n: index + 1 }),
  );

/**
 * Return vendor list items count
 * @param {Object} nextValue next item values
 * @param {Object} props entry: the first thing we got from the server
 *
 * @returns Number
 */
export const getItemsListCount = (
  nextValue = IMMUTABLE_MAP,
  { entry = IMMUTABLE_MAP },
) =>
  nextValue.getIn(
    ['server', 'nStoreListCount'],
    entry.getIn(
      [['server', 'nStoreListCount'], ['client', 'nStoreLISTcount']].find(
        fieldSets => !isNullOrUndefined(entry.getIn(fieldSets)),
      ) || ['server', 'nStoreListCount'],
    ),
  ) || 0;

/**
 * Return id
 * @param {Object} nextValue next item values
 * @param {Object} props entry: the first thing we got from the server
 *
 * @returns String|undefined
 */
export const getId = (nextValue = IMMUTABLE_MAP, { entry = IMMUTABLE_MAP }) =>
  nextValue.get('id') || entry.get('id') || undefined;

/**
 * Return project id
 * @param {Object} nextValue next item values
 * @param {Object} props entry: the first thing we got from the server
 *
 * @returns String|undefined
 */
export const getProjectId = (
  nextValue = IMMUTABLE_MAP,
  { entry = IMMUTABLE_MAP },
) =>
  nextValue.getIn(['project', 'id']) ||
  entry.getIn(['project', 'id']) ||
  undefined;

/**
 * Return index
 * @param {Object} nextValue next item values
 * @param {Object} props entry: the first thing we got from the server
 *
 * @returns Number|undefined
 */
export const getIndex = (
  nextValue = IMMUTABLE_MAP,
  { entry = IMMUTABLE_MAP },
) => {
  const value = nextValue.get('nIndex', entry.get('nIndex'));
  return isNumber(value) ? value : undefined;
};
