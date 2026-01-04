import type { TaskStateModel } from '../../models/TaskStateModel';
import type { TaskActionModel } from './taskActions';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  return state;
}
