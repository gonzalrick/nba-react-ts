import { observable, computed, action } from 'mobx';

export class GeneralStore {
  @observable loading = true;
  @observable year = '';

  @computed
  get isLoading(): boolean {
    return this.loading;
  }

  @computed
  get seasonYear(): string {
    return this.year;
  }

  @action.bound
  setLoading(loading: boolean) {
    this.loading = loading;
  }

  @action.bound
  setSeasonYear(year: string) {
    this.year = year;
  }
}