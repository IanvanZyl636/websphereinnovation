'use client'
import {ChangeEvent, FocusEvent, ReactNode, useEffect, useState} from "react";
import {ZodIssue, z} from "zod";
import formatZodIssues from "@/app/integration/zod/helpers/formet-zod-issues.helper";
import {ErrorsModel} from "@/app/common/models/errors.model";
import {useFormState} from "react-dom";
import {ResponseModel} from "@/app/common/models/response.model";
import errorHandler from "@/app/common/helpers/error-handler.helper";

export type TouchedModel<T> = {
    [K in keyof T]: boolean;
};

async function pop() {
    return '';
}

export default function ValidationForm<T extends object>(
    {
        initialValue,
        children,
        zodResolver,
        action,
    }:
        {
            initialValue: T,
            children: (
                values: T,
                errors: ErrorsModel<T>,
                touched: TouchedModel<T>,
                state: ResponseModel,
                handleAction: (payload: FormData) => void,
                handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
                handleBlur: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
                resetForm: () => void) => ReactNode,
            zodResolver: z.ZodObject<any>,
            action: ((prevState: any, formData: FormData) => Promise<ResponseModel>),
        }
) {
    const resetForm = () => {
        setValues(initialValue);
        setTouched({} as TouchedModel<T>);
    }
    const markAllTouched = () => {
        let obj: any = {};
        Object.keys(initialValue).forEach(key =>
            obj[key] = true
        );

        setTouched(obj);
    }
    const formAction = async (prevState: ResponseModel, formData: FormData) => {
        markAllTouched();

        const parseResult = zodResolver.safeParse(values);

        if (!parseResult.success) {
            const errors = formatZodIssues(parseResult.error.issues);
            setErrors(errors);
            return errorHandler(parseResult.error);
        }

        return await action(prevState, formData);
    }
    const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault()

        const controlName = e.target.name;

        setTouched({...touched, [controlName]: true});
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();

        const controlName = e.target.name;
        setValues({...values, [controlName]: e.target.value});
    }

    const [values, setValues] = useState(initialValue);
    const [errors, setErrors] = useState<ErrorsModel<T>>({} as ErrorsModel<T>);
    const [touched, setTouched] = useState<TouchedModel<T>>({} as TouchedModel<T>);
    const [state, handleAction] = useFormState(formAction, {} as ResponseModel);

    useEffect(() => {
        const parseResult = zodResolver.safeParse(values);

        let errors: ErrorsModel<any> = {};

        if (!parseResult.success) {
            const issues = parseResult.error.issues;
            errors = formatZodIssues(issues)
        }

        setErrors(errors);
    }, [values]);

    useEffect(() => {
        if (state.status === 'success') resetForm();
    }, [state]);

    return <>
        {children(values, errors, touched, state, handleAction, handleChange, handleBlur, resetForm)}
    </>
}