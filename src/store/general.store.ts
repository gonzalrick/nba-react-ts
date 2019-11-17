import { observable, computed, action } from 'mobx';
import { addDays } from 'date-fns';

export class GeneralStore {
  @observable date = new Date();
  @observable loading = true;
  @observable year = '';

  @computed
  get isLoading(): boolean {
    return this.loading;
  }

  @action.bound
  setLoading(loading: boolean) {
    this.loading = loading;
  }

  @action.bound
  nextDay() {
    this.date = addDays(this.date, 1);
  }

  @action.bound
  prevDay() {
    this.date = addDays(this.date, -1);
  }
}
