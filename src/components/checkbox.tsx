import React from 'react'

export interface CheckboxProps {
  children?: React.ReactNode
  checkedValues?: string[]
  onChange?: (value: string[]) => void
  theme?: string
}

export class Checkbox extends React.Component<CheckboxProps> {
  static Label: (props: LabelProps) => JSX.Element
  static Option: (props: OptionProps) => JSX.Element
  constructor(props: CheckboxProps) {
    super(props)
  }

  render() {
    const { children, theme, checkedValues, onChange } = this.props
    let LabelComponent = (children as any[])?.find(comp => comp.type.name === 'Label')
    LabelComponent = React.cloneElement(LabelComponent, { theme, key: LabelComponent.props.value })
    const OptionComponents = (children as any[])?.filter(comp => comp.type.name === 'Option')
    return (
      <div>
        {LabelComponent}
        <hr />
        {OptionComponents.map((comp: any) => {
          const newCom = React.cloneElement(
            comp,
            {
              theme,
              key: comp.props.value,
              checked: checkedValues?.includes(comp.props.value),
              onClick: (value: string) => {
                if (checkedValues?.includes(value)) {
                  onChange?.(checkedValues.filter(v => v !== value))
                } else {
                  onChange?.([...(checkedValues || []), value])
                }
              }
            }
          )
          return newCom
        })}
      </div>
    )
  }
}

// TODO 类型问题待优化
Checkbox.Label = Label
Checkbox.Option = Option

interface LabelProps {
  children: React.ReactNode
  theme?: string
}

function Label(props: LabelProps) {
  const { children, theme } = props
  return (
    <label
      className="flex items-center p1"
      style={{
        color: theme
      }}
    >
      {children}
    </label>
  )
}

interface OptionProps {
  children: React.ReactNode
  theme?: string
  value?: string
  checked?: boolean
  onClick?: (value?: string) => void
}

function Option({ children, theme, checked, value, onClick }: OptionProps) {
  return (
    <div
      className='text-white p1 rounded cursor-pointer mt1 flex items-center text-sm flex'
      style={{
        backgroundColor: checked ? theme : 'transparent',
        color: checked ? 'white' : theme
      }}
      onClick={() => {
        onClick?.(value)
      }}
    >
      {children}
      <div flex='1' />
      {
        checked && <button className='i-ic-round-check-box text-base' />
      }
    </div>
  )
}

