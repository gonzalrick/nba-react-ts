import { observable, computed, action } from 'mobx';

export class GeneralStore {
  @observable loading = true;

  @computed
  get isLoading(): boolean {
    return this.loading;
  }

  @action.bound
  setLoading(loading: boolean) {
    this.loading = loading;
  }
}