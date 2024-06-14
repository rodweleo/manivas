import { ChangeEvent } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface TextFieldProps {
  list?: string
  id?: string
  type?: React.HTMLInputTypeAttribute | undefined
  label?: string;
  name?: string;
  hintText?: string;
  required?: boolean;
  defaultValue?: string | number | undefined | null
  readonly?: boolean;
  register?: UseFormRegister<FieldValues>;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  autocomplete?: string;
  prefixIcon?: string;
  value?: string | number;
  onClick?: (e: any) => void;
  min?: number
}

interface TextFieldTypes {
  options: TextFieldProps
}
const TextField: React.FC<TextFieldTypes> = (
  { options }
) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    options.onChange && options.onChange(e)
  }

  const handleClick = (e: any) => {
    options.onClick && options.onClick(e)
  }


  return (
    <label htmlFor={options.label} className="w-full">
      <h3 className=" font-semibold text-left text-slate-300">{options.label} {options.required && <span className="text-red-500">*</span>}</h3>
      <div className="flex items-center outline-0 focus-within:border-green-400 focus-within:scale-[1.01] transition-all duration-200 border border-slate-300 rounded-md w-full bg-white">
        <i className={`ml-2 ${options.prefixIcon} text-slate-400`}></i>
        <input
          id={options.id}
          type={options.type}
          placeholder={options.hintText}
          required={options.required}
          defaultValue={options.defaultValue ? options.defaultValue : ""}
          className="py-3 font-bold text-slate-800 w-full outline-none bg-transparent ml-2 h-full"
          readOnly={options.readonly}
          list={options.list}
          {...(options.register && options.name && options.register(options.name))}
          onChange={(e) => handleChange(e)}
          autoComplete={options.autocomplete}
          onClick={(e) => handleClick(e)}
          min={options.min}
        />
      </div>
    </label>
  );
};

export default TextField;
