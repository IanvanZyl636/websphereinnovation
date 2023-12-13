'use client'

import {Input, Textarea, Button} from "../../integration/material-tailwind-react";
import ValidationForm from "@/app/common/components/validation-form";
import contactUsSchema, {contactUsModel} from "@/app/integration/zod/schemas/contact-us.schema";
import {SubmitContactUs} from "@/app/actions/contact-us.action";

export function ContactUsForm() {
    return (<>
        <ValidationForm<contactUsModel>
            initialValue={
                {
                    firstName: '',
                    surname: '',
                    email: '',
                    phoneNumber: '',
                    message: ''
                }
            }
            zodResolver={contactUsSchema}
            action={SubmitContactUs}
        >
            {
                (
                    values,
                    errors,
                    touched,
                    state,
                    handleAction,
                    handleChange,
                    handleBlur,
                    resetForm
                ) => {
                    return (
                        <form className="text-red-500" action={handleAction} onReset={resetForm}>
                            <div className="flex flex-col gap-3">
                                <div className={'flex md:flex-row flex-col gap-3'}>
                                    <div className={'w-full'}>
                                        <Input
                                            name={'firstName'}
                                            id={'firstName'}
                                            crossOrigin={''}
                                            label={'First Name'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.firstName}
                                            error={touched.firstName && !!errors.firstName}
                                        />
                                        {
                                            (touched.firstName && !!errors.firstName) ?
                                                <span>{errors.firstName}</span> : <></>
                                        }
                                    </div>
                                    <div className={'w-full'}>
                                        <Input
                                            name={'surname'}
                                            id={'surname'}
                                            crossOrigin={''}
                                            label={'Last Name'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.surname}
                                            error={touched.surname && !!errors.surname}
                                        />
                                        {
                                            (touched.surname && !!errors.surname) ?
                                                <span>{errors.surname}</span> : <></>
                                        }
                                    </div>
                                </div>
                                <div>
                                    <Input
                                        name={'email'}
                                        id={'email'}
                                        crossOrigin={''}
                                        label={'Email'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        error={touched.email && !!errors.email}
                                    />
                                    {
                                        (touched.email && !!errors.email) ?
                                            <span>{errors.email}</span> : <></>
                                    }
                                </div>
                                <div>
                                    <Input
                                        name={'phoneNumber'}
                                        id={'phoneNumber'}
                                        crossOrigin={''}
                                        label={'Phone Number'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.phoneNumber}
                                        error={touched.phoneNumber && !!errors.phoneNumber}
                                    />
                                    {
                                        (touched.phoneNumber && !!errors.phoneNumber) ?
                                            <span>{errors.phoneNumber}</span> : <></>
                                    }
                                </div>
                                <div>
                                    <div className={'flex'}>
                                        <Textarea
                                            name={'message'}
                                            id={'message'}
                                            label="Message"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.message}
                                            error={touched.message && !!errors.message}
                                        />
                                    </div>
                                    {
                                        (touched.message && !!errors.message) ?
                                            <span>{errors.message}</span> : <></>
                                    }
                                </div>
                                <div>
                                    <div className={'flex flex-row gap-3'}>
                                        <Button type={'submit'}>Submit</Button>
                                        <Button type={'reset'}>Reset</Button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )
                }
            }
        </ValidationForm>
    </>)
}