const ProviderWrapper = require('../lib/ProviderWrapper');

const providerWrapper = new ProviderWrapper();
describe('validate setters', () => {
  it('set state', () => {
    providerWrapper.setState('NG-LA');
    expect(providerWrapper.state.indexOf('NG-LA') > -1).toBe(true);
  });
  it('set state', () => {
    providerWrapper.setPlanId('25');
    expect(providerWrapper.plan_id.indexOf('25') > -1).toBe(true);
  });
  it('set Tiers', () => {
    providerWrapper.setTiers('1,2');
    expect(providerWrapper.tiers.indexOf('1,2') > -1).toBe(true);
  });
  it('set page and limit', () => {
    providerWrapper.getProviders({ page: 1, limit: 50 });
    expect(providerWrapper.paramList.indexOf('page=1&limit=50') > -1).toBe(true);
  });
});

describe('Call Api', () => {
  it('retrieve providers', async () => {
    const providers = await providerWrapper.setState('NG-LA').setPlanId('25').setTiers('1,2').getProviders({ page: 1, limit: 50 });
    const providersString = JSON.stringify(providers);
    expect(providersString.indexOf('"message":"OK","data":{"status":"success"') > -1).toBe(true);
  }, 10000);
});
