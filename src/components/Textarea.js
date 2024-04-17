import React from "react";

function Textarea({ id, labelName, value, onChange }) {
  return (
    <div className="relative mb-6">
      <textarea
        id={id}
        required
        value={value}
        onChange={onChange}
        className="h-[200px] resize-none block px-3 pb-2.5 pt-3 w-80 text-sm text-gray-900 bg-slate-100 rounded-md border-1 border-primary-blue appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-blue outline-transparent focus:outline-primary-blue focus:ring-0 focus:border-primary-blue peer ease-in duration-200"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute text-sm text-gray-500 dark:text-gray-400 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-slate-100 dark:bg-gray-900 px-3 peer-focus:px-3 peer-focus:text-primary-blue peer-focus:dark:text-primary-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 ease-in duration-200"
      >
        {labelName}
      </label>
    </div>
  );
}

export default Textarea;