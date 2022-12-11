import {zodResolver} from "@hookform/resolvers/zod";
import {ComponentProps} from "react";
import {
  useForm as useHookForm,
  UseFormProps as useHookFormProps,
  FormProvider,
  UseFormReturn,
  FieldValues,
  SubmitHandler,
  useFormContext,
} from "react-hook-form";
import {ZodSchema, TypeOf} from "zod";
import {removeDoubleQuotes} from "../strings/extractString";

interface UseFormProps<T extends ZodSchema<any>> extends useHookFormProps<TypeOf<T>> {
  schema: T;
}

// Creating a useForm Hook to be used in the components
export const useForm = <T extends ZodSchema<any>>({schema, ...formConfig}: UseFormProps<T>) => {
  return useHookForm({
    ...formConfig,
    mode: "all",
    resolver: zodResolver(schema),
  });
};

interface FormProps<T extends FieldValues = any> extends Omit<ComponentProps<"form">, "onSubmit"> {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
}

export const Form = <T extends FieldValues>({form, onSubmit, children, ...props}: FormProps<T>) => {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} {...props}>
        <fieldset disabled={form.formState.isSubmitting}>{children}</fieldset>
      </form>
    </FormProvider>
  );
};

export function FieldError({name}: {name?: string}) {
  const {
    formState: {errors},
  } = useFormContext();
  console.log(errors);
  if (!name) return null;
  const error = errors[name];
  if (!error) return null;
  return (
    <span className="error__message">{removeDoubleQuotes(JSON.stringify(error.message))}</span>
  );
}
