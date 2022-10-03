import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TogglesElement from "../../../../../components/elements/toggles/toggles/TogglesElement";


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export default {
    title: 'components/elements/toggles/toggles/TogglesElement',
    component: TogglesElement,
} as ComponentMeta<typeof TogglesElement>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
const Template: ComponentStory<typeof TogglesElement> =
    (args) =>
        <div className="ml-4 mt-4">
            <TogglesElement onToggle={()=>console.log("ok")} on={false}/>
        </div>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export const Base = Template.bind({});
Base.args = {
};

Base.storyName = "Base"

