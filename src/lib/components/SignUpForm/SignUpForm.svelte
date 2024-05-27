<script lang="ts">
    import * as Form from "$lib/components/ui/form";
    import * as Popover from "$lib/components/ui/popover/index.js";
    import { Input } from "$lib/components/ui/input";
    import { Separator } from "$lib/components/ui/separator/index.js"
    import {Button} from "$lib/components/ui/button";
    import {Cake, CalendarDaysIcon, Check, KeyRound, Mail, User} from "lucide-svelte";
    import {type SuperValidated, type Infer, superForm,} from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";
    import {type SignUpFormSchema, signUpFormSchema} from "$lib/components/SignUpForm/SignUpFormSchema";
    import {DateFormatter, type DateValue, getLocalTimeZone, parseDate} from "@internationalized/date";

    const df = new DateFormatter("en-US", {
        dateStyle: "long"
    });

    let value: DateValue | undefined = undefined;

    export let data : SuperValidated<Infer<SignUpFormSchema>>;
    let form = superForm(data, {
        validators: zodClient(signUpFormSchema),
    });
    const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance class="flex flex-col gap-4">
    <section class="grid grid-cols-2 grid-rows-2 gap-2">
        <Form.Field {form} name="name">
            <Form.Control let:attrs>
                <Form.Label class="flex gap-1 items-center text-primary"><User size={16}/>Name</Form.Label>
                <Input {...attrs} bind:value={$formData.name} placeholder="Mark"/>
            </Form.Control>
            <Form.FieldErrors />
        </Form.Field>

        <Form.Field {form} name="surname">
            <Form.Control let:attrs>
                <Form.Label class="flex gap-1 items-center text-primary"><User size={16}/>Surname</Form.Label>
                <Input {...attrs} bind:value={$formData.surname} placeholder="Jobs"/>
            </Form.Control>
            <Form.FieldErrors />
        </Form.Field>

        <Form.Field {form} name="birthDate" class="col-span-full">
            <Form.Control let:attrs>
                <Form.Label class="flex gap-1 items-center text-primary"><Cake size={16}/> Birthdate</Form.Label>
                <Input {...attrs} type="date" bind:value={$formData.birthDate}/>
                <!--<Popover.Root>
                <Popover.Trigger {...attrs} asChild let:builder>
                    <Button
                            variant="outline"
                            class={cn("justify-start text-left font-normal w-full",!value && "text-muted-foreground")}
                            builders={[builder]}
                    >
                        <CalendarDaysIcon color="#f97316" class="mr-2 h-4 w-4" />
                        {value ? df.format(value.toDate(getLocalTimeZone())) : "Pick your birthday :)"}
                    </Button>
                </Popover.Trigger>
                <Popover.Content class="w-[min-content]">
                    <ExtendedDatePicker bind:value onValueChange={(v) => {
                            if (v) $formData.birthdate = v.toDate(getLocalTimeZone());
                            else $formData.birthdate = new Date();
                            }
                        }
                    />
                </Popover.Content>
            </Popover.Root>-->
            </Form.Control>
            <Form.FieldErrors />
        </Form.Field>
    </section>
    <Separator/>
    <section class="grid grid-cols-2 grid-rows-2 gap-2">
        <Form.Field {form} name="email" class="col-span-full">
            <Form.Control let:attrs>
                <Form.Label class="flex gap-1 items-center text-primary"><Mail size={16}/> Email</Form.Label>
                <Input {...attrs} bind:value={$formData.email} placeholder="trolley@mail.com"/>
            </Form.Control>
            <Form.FieldErrors />
        </Form.Field>

        <Form.Field {form} name="password">
            <Form.Control let:attrs>
                <Form.Label class="flex gap-1 items-center text-primary"><KeyRound size={16}/>  Password</Form.Label>
                <Input type="password" {...attrs} bind:value={$formData.password} placeholder="********"/>
            </Form.Control>
            <Form.FieldErrors />
        </Form.Field>

        <Form.Field {form} name="passwordConfirm">
            <Form.Control let:attrs>
                <Form.Label class="flex gap-1 items-center text-primary"><Check size={16}/> Password Confirm</Form.Label>
                <Input type="password" {...attrs} bind:value={$formData.passwordConfirm} placeholder="********"/>
            </Form.Control>
            <Form.FieldErrors />
        </Form.Field>
    </section>
    <Form.Button class="w-full transition-all duration-100">Submit</Form.Button>
</form>