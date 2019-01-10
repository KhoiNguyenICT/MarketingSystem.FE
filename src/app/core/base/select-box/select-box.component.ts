import { Component, forwardRef, Input, Output, EventEmitter } from '@angular/core'
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectBoxComponent),
    multi: true,
  }],
})

export class SelectBoxComponent implements ControlValueAccessor {

  @Input() displayField: string
  @Input() displayValueGenerator: (any) => string
  @Input() selectedValue: any
  @Input() showAllText: string
  @Input() showAllTextDisabled: boolean
  @Input() small
  @Input() valueField: string
  @Input() values: any[]
  @Input() isDisabled: any
  @Output() selected = new EventEmitter()

  private selectedObject: any
  private onChange: Function
  private onTouched: Function

  constructor() { }

  getDisplayValue(object: any): string {
    if (!object) {
      return this.showAllText || object
    }

    if (this.displayValueGenerator) {
      return this.displayValueGenerator(object)
    }

    if (this.displayField) {
      return object[this.displayField]
    }

    return object
  }

  changeValue(value: any) {
    this.selectedValue = value
    const matched = this.values.filter(t => this.getValue(t) === value)
    this.selectedObject = matched.length > 0 ? matched[0] : value

    if (this.onChange) {
      this.onChange(this.selectedObject)
    }
    this.selected.emit(this.selectedObject)
  }

  getValue(object: any): string {
    if (this.valueField && object) {
      return object[this.valueField]
    }
    return object
  }

  writeValue(value: any) {
    this.selectedObject = value
    this.selectedValue = this.getValue(value)
  }

  registerOnChange(fn) {
    this.onChange = fn
  }

  registerOnTouched(fn) {
    this.onTouched = fn
  }

  setDisabledState(disabled) {
    this.isDisabled = disabled
  }

}
