<?php

namespace Ceres\Widgets\Helper\Factories\Settings;

/**
 * Class AlignmentSettingFactory
 *
 * Factory class for alignment setting
 *
 * @package Ceres\Widgets\Helper\Factories\Settings
 */
class AlignmentSettingFactory extends BaseSettingFactory
{
    /**
     * AlignmentSettingFactory constructor.
     */
    public function __construct()
    {
        $this->withType('alignment')
             ->withDefaultValue('left');
    }
}
