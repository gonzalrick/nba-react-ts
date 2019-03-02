import DataLoader from 'dataloader';

import {
  getTeamByIds,
} from './loaders';

export function createLoaders() {
  return {
    getTeamByIds: new DataLoader(getTeamByIds),
  };
}