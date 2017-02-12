module.exports = {
  type: 'object',
  properties: {
    prototypeId: { type: 'string' },
    datachannelId: { type: 'string' },
    datachannelTypeId: { type: 'integer' },
    datachannelDescription: { type: 'string' },
    config: { type: 'any' },
    createdUserId: { type: 'string' },
    updatedAt: { type: 'integer' },
    createdAt: { type: 'integer' },
    isActive: { type: 'boolean' },
  },
  required: [
    'prototypeId',
    'datachannelId',
    'datachannelTypeId',
    'datachannelDescription',
    'config',
    'createdUserId',
    'updatedAt',
    'createdAt',
    'isActive',
  ],
};