import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PriceRangeSliderElement from "../../../../../components/elements/sliders/price-range-slider/PriceRangeSliderElement";


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export default {
    title: 'components/elements/sliders/price-range-slider/PriceRangeSliderElement',
    component: PriceRangeSliderElement,
} as ComponentMeta<typeof PriceRangeSliderElement>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
const Template: ComponentStory<typeof PriceRangeSliderElement> =
    (args) =>
        <div className="ml-4 mt-4">
            <PriceRangeSliderElement />
        </div>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export const Base = Template.bind({});
Base.args = {
};

Base.storyName = "Base"

