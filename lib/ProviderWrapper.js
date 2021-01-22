const RelianceRequest = require('./RelianceHMO_Requests');

const Credentials = require('./Credentials');

class ProviderWrapper {
  constructor() {
    this.state = '';
    this.plan_id = '';
    this.tiers = '';
  }

  setState(stateValue) {
    this.state = stateValue;
    return this;
  }

  setPlanId(planIdValue) {
    this.plan_id = planIdValue;
    return this;
  }

  setTiers(tiersValue) {
    this.tiers = tiersValue;
    return this;
  }

  setParam(key, value) {
    if (value.toString().length > 0) {
      this.paramList += `${(this.paramList.length > 0 ? '&' : '?')}${key}=${value.toString()}`;
    }
  }

  async getProviders(dataFetchOptions) {
    this.paramList = '';
    this.setParam('state', this.state);
    this.setParam('plan_id', this.plan_id);
    this.setParam('tiers', this.tiers);
    this.setParam('page', dataFetchOptions.page);
    this.setParam('limit', dataFetchOptions.limit);

    const providers = await RelianceRequest.Providers({
      sandbox_key: Credentials.sandbox_key,
      host: '',
    }, this.paramList);
    return providers;
  }
}

module.exports = ProviderWrapper;
