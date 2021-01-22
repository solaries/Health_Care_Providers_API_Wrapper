const ProviderWrapper = require('./lib/ProviderWrapper');
// testing the wrapper here
const getProviders = async () => {
  const providerWrapper = new ProviderWrapper();
  const providers = await providerWrapper.setState('NG-LA').setPlanId('25').setTiers('1,2').getProviders({ page: 1, limit: 50 });
  console.log(JSON.stringify(providers));
};

getProviders();
