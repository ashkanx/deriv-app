import classNames from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FieldError from 'Components/field-error';
import Icon from 'Components/icon/icon.jsx';

class SelectNative extends Component {
    getDisplayText = value => {
        const { list_items } = this.props;
        const dropdown_items = Array.isArray(list_items) ? list_items : [].concat(...Object.values(list_items));
        const list_obj = dropdown_items.find(item => {
            if (typeof item.value !== 'string') return item.value === value;
            return item.value.toLowerCase() === value.toLowerCase();
        });

        if (list_obj) return list_obj.text;
        return '';
    };
    render() {
        const {
            className,
            classNameDisplay,
            list_items,
            value,
            label,
            use_text,
            error,
            hint,
            disabled,
            ...props
        } = this.props;
        return (
            <div
                className={classNames(className, 'dc-select-native', {
                    'dc-select-native--disabled': disabled,
                    'dc-select-native--error': error,
                })}
            >
                <div className='dc-select-native__wrapper'>
                    <div
                        className={classNames('dc-input', {
                            'dc-input__disabled': disabled,
                            'dc-input--error': error,
                        })}
                    >
                        <div className='dc-select-native__display'>
                            {list_items && value && (
                                <div className={classNames('dc-select-native__display-text', classNameDisplay)}>
                                    {use_text ? value : this.getDisplayText(value)}
                                </div>
                            )}
                        </div>
                        <div
                            className={classNames('dc-select-native__placeholder', {
                                'dc-select-native__placeholder--has-value': value,
                                'dc-select-native__placeholder--disabled': disabled,
                            })}
                        >
                            {label}
                        </div>
                        <Icon icon='IcChevronDown' className='dc-select-native__arrow' />
                        <select className='dc-select-native__picker' value={value} disabled={disabled} {...props}>
                            {Array.isArray(list_items)
                                ? list_items.map((option, idx) => (
                                      <option key={idx} value={use_text ? option.text : option.value}>
                                          {option.nativepicker_text || option.text}
                                      </option>
                                  ))
                                : Object.keys(list_items).map(key => (
                                      <optgroup key={key} label={key}>
                                          {list_items[key].map((option, idx) => (
                                              <option
                                                  key={idx}
                                                  value={use_text ? option.text : option.value}
                                                  disabled={option.disabled}
                                              >
                                                  {option.nativepicker_text || option.text}
                                              </option>
                                          ))}
                                      </optgroup>
                                  ))}
                        </select>
                        {error && <FieldError message={error} />}
                    </div>
                </div>
                {!error && hint && <p className='dc-select-native__hint'>{hint}</p>}
            </div>
        );
    }
}

SelectNative.props = {
    className: PropTypes.string,
    classNameDisplay: PropTypes.string,
    list_items: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(
            PropTypes.shape({
                text: PropTypes.string.isRequired,
                value: PropTypes.string.isRequired,
            })
        ),
    ]),
    value: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
};

export default SelectNative;
