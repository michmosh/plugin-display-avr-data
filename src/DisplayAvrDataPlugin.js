import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';

import CustomTaskListContainer from './components/CustomTaskList/CustomTaskList.Container';
import CustomTaskItem from './components/taskListItem/TaskListItem'
import reducers, { namespace } from './states';

const PLUGIN_NAME = 'DisplayAvrDataPlugin';

export default class DisplayAvrDataPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    this.registerReducers(manager);
   
    flex.Actions.addListener("afterAcceptTask", async function(reservation, testFunc) {
      const task = reservation.task
      flex.DefaultTaskChannels.ChatWhatsApp.templates.TaskListItem.secondLine = ''
      flex.TaskListItem.Content.add(
      <CustomTaskItem key={CustomTaskItem.name} variables={task.attributes.variables} /> , options);
     
    })
    
    const options = { sortOrder: 0 }   
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint: disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
