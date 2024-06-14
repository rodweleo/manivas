

export const LoginAction = async ({
    request, params
}: {
    request: Request
}) => {

    const formData = await request.formData();
    const entries = Object.fromEntries(formData)
    console.log(entries)
    return null
}