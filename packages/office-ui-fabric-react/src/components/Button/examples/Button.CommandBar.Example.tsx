import * as React from 'react';
import { CommandBarButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';

export class ButtonCommandBarExample extends React.Component<IButtonProps, {}> {
  public render(): JSX.Element {
    const { disabled, checked } = this.props;

    return (
      <div>
        <div style={ { display: 'flex', alignItems: 'stretch', height: '40px' } }>
          <CommandBarButton
            data-automation-id='test'
            disabled={ disabled }
            checked={ checked }
            iconProps={ { iconName: 'Add' } }
            text='Create account'
            menuProps={ {
              items: [
                {
                  key: 'emailMessage',
                  text: 'Email message',
                  iconProps: { iconName: 'Mail' }
                },
                {
                  key: 'calendarEvent',
                  text: 'Calendar event',
                  iconProps: { iconName: 'Calendar' }
                }
              ]
            } }
          />
          <CommandBarButton
            data-automation-id='test2'
            disabled={ disabled }
            checked={ checked }
            iconProps={ { iconName: 'Mail' } }
            text='Send Mail'
          />
        </div>
      </div>
    );
  }
}