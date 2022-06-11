import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CalendarElement from "../../../../../components/elements/calendars/calendar/CalendarElement";


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export default {
    title: 'components/elements/calendars/calendar/CalendarElement',
    component: CalendarElement,
} as ComponentMeta<typeof CalendarElement>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
const Template: ComponentStory<typeof CalendarElement> =
    (args) =>
        <div className="ml-4 mt-4">
            <CalendarElement {...args}/>
        </div>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export const Base = Template.bind({});
Base.args = {
};

Base.storyName = "Base"

