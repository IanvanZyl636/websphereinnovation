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
                    fullName: '',
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
                                            name={'fullName'}
                                            id={'fullName'}
                                            crossOrigin={''}
                                            label={'Full Name'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.fullName}
                                            error={touched.fullName && !!errors.fullName}
                                        />
                                        {
                                            (touched.fullName && !!errors.fullName) ?
                                                <span>{errors.fullName}</span> : <></>
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