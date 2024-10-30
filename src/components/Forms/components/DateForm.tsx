import { Label } from './Label'
import { LabelError } from './LabelError'

export function DateForm({
  register,
  errors,
  name,
  label,
  required = false,
  disabled = false,
}: {
  register: any
  errors: any
  name: string
  label: string
  required?: boolean
  disabled?: boolean
}) {
  return (
    <div>
      <Label label={label} name={name} />
      <input
        type="date"
        id={name}
        style={errors[name] && { border: '1px solid red' }}
        {...register(name, {
          required: { message: 'Campo obrigatório', value: required },
        })}
        className="input-text"
        disabled={disabled}
        defaultValue={new Date().toISOString().slice(0, 10)}
      />
      <LabelError
        msg={errors[name]?.message as string}
        hasError={errors[name] as any}
      />
    </div>
  )
}
