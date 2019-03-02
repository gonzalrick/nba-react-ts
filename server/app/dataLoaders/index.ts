import DataLoader from 'dataloader';

import {
  getPlayerByIds,
  getTeamByIds,
} from './loaders';

export function createLoaders() {
  return {
    getPlayerByIds: new DataLoader(getPlayerByIds),
    getTeamByIds: new DataLoader(getTeamByIds),
  };
}