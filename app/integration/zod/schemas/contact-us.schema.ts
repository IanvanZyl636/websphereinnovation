import { z } from "zod";

const contactUsSchema = z
    .object({
        firstName: z.string().nonempty('Required').trim().min(2).max(30),
        surname: z.string().nonempty('Required').trim().min(2).max(30),
        email: z.string().nonempty('Required').email().max(30),
        phoneNumber: z.string().nonempty('Required').min(10).max(10),
        message:z.string().nonempty('Required').trim().min(2).max(100),
    })
    .strict();

export type contactUsModel = z.infer<typeof contactUsSchema>;

export default contactUsSchema;