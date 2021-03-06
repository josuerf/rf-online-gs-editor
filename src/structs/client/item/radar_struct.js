import Struct from '~/classes/Struct';

export default new Struct().fromSchema1([
  { child: { type: Number, name: 'nIndex', len: 32 } },
  { child: { type: String, name: 'strCode', len: 32, as: 'hex' } },
  { child: { type: String, name: 'strName', len: 64 } },
  { child: { type: String, name: 'strModel', len: 32, as: 'hex' } },
  { child: { type: Number, name: 'nIconIDX', len: 32 } },
  { child: { type: String, name: 'strCivil1', len: 32, as: 'hex' } },
  { child: { type: String, name: 'strCivil2', len: 32, as: 'hex' } },
  { child: { type: Number, name: 'nType', len: 8 } },
  { child: { type: Number, name: 'nMoney', len: 8 } },
  { child: { type: Number, name: 'nUnkInt16', len: 16 } },
  { child: { type: Number, name: 'nStdPrice', len: 32 } },
  { child: { type: Number, name: 'nStdPoint', len: 32 } },
  { child: { type: Number, name: 'nGoldPoint', len: 32 } },
  { child: { type: Number, name: 'nProcPoint', len: 32 } },
  { child: { type: Number, name: 'nKillPoint', len: 32 } },
  { child: { type: Number, name: 'nStoragePrice', len: 32 } },
  { child: { type: Boolean, name: 'bExchange', len: 32 } },
  { child: { type: Boolean, name: 'bSell', len: 32 } },
  { child: { type: Boolean, name: 'bGround', len: 32 } },
  { child: { type: Boolean, name: 'bStoragePossible', len: 32 } },
  { child: { type: Number, name: 'nDescription', len: 32 } },
  { child: { type: Boolean, name: 'bExist', len: 32 } },
  { child: { type: Boolean, name: 'bIsCash', len: 32 } },
  { child: { type: Boolean, name: 'bIsTime', len: 32 } },
  { child: { type: Number, name: 'nUpLevelLim', len: 32 } },
  { child: { type: Number, name: 'fActDelay', len: 32, as: 'float' } },
  { child: { type: Number, name: 'nLevelLim', len: 32 } },
  { child: { type: Boolean, name: 'bAbr', len: 32 } },
  { child: { type: Number, name: 'fEquipSpeed', len: 32, as: 'float' } },
  { child: { type: Number, name: 'nSucPro', len: 32 } },
  { child: { type: Number, name: 'nDuration', len: 32 } },
  { child: { type: Number, name: 'nItemNum', len: 8 } },
  { child: { type: Number, name: 'nItemType', len: 8 }, repeat: 3 },
  {
    child: { type: String, name: 'strItemCode', len: 32, as: 'hex' },
    repeat: 3,
  },
  {
    child: { type: Number, name: 'nItemCount', len: 8 },
    repeat: 3,
  },
  { child: { type: Number, name: 'nUnkInt8', len: 8 } },
  { child: { type: Number, name: 'nUnkInt32', len: 32 } },
]);
